// src/app/blog/page.tsx
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/queries';

// Tipo simples para os posts
interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
}

export default async function BlogPage() {
  // Executa a busca GROQ no Sanity
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Artigos da Psicóloga</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post._id} className="p-6 bg-sky-100/50 rounded-xl shadow-lg">
            <span className="text-xs text-sky-500 font-semibold uppercase">
              {post.category}
            </span>
            <h2 className="text-xl font-bold my-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{post.readTime}</span>
              <a 
                href={`/blog/${post.slug}`} 
                className="text-sky-500 font-medium hover:underline"
              >
                Ler artigo →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}