// src/sanity/schemaTypes/post.ts
import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (rule) => rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Amigável)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Gere o slug a partir do título.'),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Ansiedade', value: 'Ansiedade' },
          { title: 'Autoconhecimento', value: 'Autoconhecimento' },
          { title: 'Relacionamentos', value: 'Relacionamentos' },
          { title: 'Saúde Mental', value: 'Saúde Mental' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo de Leitura (ex: 5 min de leitura)',
      type: 'string',
      initialValue: '5 min de leitura',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo / Introdução',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200).warning('Mantenha o resumo curto para os cards.'),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo do Artigo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
});