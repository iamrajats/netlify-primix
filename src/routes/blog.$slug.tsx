import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { ArrowLeft, Clock3 } from 'lucide-react'
import { PageHero } from '../components/SiteLayout'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = allPosts.find((item) => item.slug === params.slug)
    if (!post) throw notFound()
    return { post }
  },
  component: BlogPostPage,
})

const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

function BlogPostPage() {
  const { post } = Route.useLoaderData()

  return (
    <>
      <PageHero eyebrow={post.tags.join(' · ')} title={post.title} description={post.description} />
      <section className="px-6 py-14 sm:py-20" style={{ background: '#0A0A14' }}>
        <article className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 pb-7 mb-8" style={{ borderBottom: '1px solid #1E1E3A' }}>
            <span>By {post.author}</span>
            <time dateTime={post.published}>{dateFormatter.format(new Date(`${post.published}T00:00:00Z`))}</time>
            <span className="inline-flex items-center gap-2"><Clock3 size={15} />{post.readingTime} min read</span>
          </div>
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="mt-14 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5" style={{ borderTop: '1px solid #1E1E3A' }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors"><ArrowLeft size={16} /> Back to all articles</Link>
            <a href="mailto:hello@primixlabs.com" className="text-sm text-slate-400 hover:text-white transition-colors">Discuss an AI project with Primix Labs</a>
          </div>
        </article>
      </section>
    </>
  )
}
