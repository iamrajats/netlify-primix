import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type React from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Primix Labs — AI Systems & Backend Engineering',
      },
      {
        name: 'description',
        content: 'Primix Labs helps businesses build production-ready AI systems, scalable backend infrastructure, and reliable LLM pipelines.',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/P-logo.png' },
      { rel: 'apple-touch-icon', href: '/P-logo.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
