import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5bt56plq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  // Query atualizada usando o campo 'content' e o 'excerpt' do seu queries.ts
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    category,
    readTime,
    excerpt,
    content
  }`;

  return await client.fetch(
    query, 
    { slug }, 
    { next: { revalidate: 0 } }
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <Link 
        href="/blog" 
        className="text-sm font-semibold text-sky-400 hover:underline inline-block"
      >
        ← Voltar para o Blog
      </Link>

      <header className="space-y-4">
        {post.category && (
          <span className="text-xs font-semibold text-sky-400 bg-sky-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
        )}
        
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          {post.title}
        </h1>

        <p className="text-slate-500 text-sm">
          Publicado em {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : 'Data recente'}
          {post.readTime && ` • ${post.readTime}`}
        </p>

        {post.excerpt && (
          <p className="text-lg text-slate-600 italic border-l-4 border-sky-500 pl-4 py-1">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Alterado para post.content */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
        {post.content ? (
          <PortableText value={post.content} />
        ) : (
          <p className="italic text-slate-400">Este post ainda não possui conteúdo no campo content.</p>
        )}
      </div>
    </article>
  );
}