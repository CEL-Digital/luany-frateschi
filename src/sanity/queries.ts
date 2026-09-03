// src/sanity/queries.ts
import { groq } from 'next-sanity';

// Busca todos os posts publicados (ordenados do mais recente para o mais antigo)
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    readTime,
    publishedAt,
    excerpt
  }
`;

// Busca um único post completo baseado no slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    readTime,
    publishedAt,
    excerpt,
    content
  }
`;