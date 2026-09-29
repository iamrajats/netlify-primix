import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { ArrowUpRight, Clock3, Sparkles } from 'lucide-react'
import { PageHero } from '../components/SiteLayout'

export const Route = createFileRoute('/blog/')({ component: BlogPage })

const dateFormatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

function BlogPage() {
  const posts = [...allPosts].sort((a, b) => b.published.localeCompare(a.published))
  const [featuredPost, ...morePosts] = posts

  return (
    <>
      <PageHero
        eyebrow="The Primix Labs journal"
        title="Notes on building useful AI."
        description="Practical ideas on generative AI, agentic systems, and the engineering that makes intelligent software dependable in the real world."
      />

      <section className="px-6 py-16 sm:py-20" style={{ background: '#0A0A14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold uppercase tracking-widest mb-7"><Sparkles size={16} /> Featured article</div>
          {featuredPost ? (
            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="group grid lg:grid-cols-[1fr_1fr] overflow-hidden rounded-3xl transition-all hover:-translate-y-1"
              style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}
            >
              <div className="min-h-64 lg:min-h-80 flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(59,130,246,0.32), transparent 58%), linear-gradient(135deg, #10152b, #120c20)' }}>
                <div className="absolute inset-0 grid-bg opacity-70" />
                <div className="relative flex flex-col items-center gap-4 text-center p-8">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(96,165,250,0.35)', boxShadow: '0 0 80px rgba(59,130,246,0.15)' }}>
                    <Sparkles size={38} className="text-blue-300" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-blue-200">Ideas into intelligent systems</span>
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-5">{featuredPost.tags.map((tag) => <span key={tag} className="rounded-full px-3 py-1 text-xs text-blue-200" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>{tag}</span>)}</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-blue-100">{featuredPost.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-7">{featuredPost.description}</p>
                <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                  <span>{dateFormatter.format(new Date(`${featuredPost.published}T00:00:00Z`))} · {featuredPost.readingTime} min read</span>
                  <span className="inline-flex items-center gap-2 text-blue-300 font-semibold">Read article <ArrowUpRight size={16} /></span>
                </div>
              </div>
            </Link>
          ) : <p className="text-slate-400">New articles are on the way.</p>}

          {morePosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
              {morePosts.map((post) => (
                <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group p-6 sm:p-7 rounded-2xl flex flex-col min-h-72 transition-all hover:-translate-y-1" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                  <div className="flex flex-wrap gap-2 mb-5">{post.tags.slice(0, 2).map((tag) => <span key={tag} className="rounded-full px-3 py-1 text-xs text-purple-200" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>{tag}</span>)}</div>
                  <h2 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-blue-100">{post.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{post.description}</p>
                  <div className="flex items-center justify-between gap-3 mt-7 pt-5 text-xs text-slate-500" style={{ borderTop: '1px solid #1E1E3A' }}>
                    <span>{dateFormatter.format(new Date(`${post.published}T00:00:00Z`))}</span>
                    <span className="inline-flex items-center gap-1"><Clock3 size={13} />{post.readingTime} min <ArrowUpRight size={14} className="ml-1 text-blue-300" /></span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
