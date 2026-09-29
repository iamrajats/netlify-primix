import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.string().date(),
    author: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    const wordCount = document.content.trim().split(/\s+/).filter(Boolean).length

    return {
      ...document,
      html,
      slug: document._meta.path,
      readingTime: Math.max(1, Math.ceil(wordCount / 220)),
    }
  },
})

export default defineConfig({ content: [posts] })
