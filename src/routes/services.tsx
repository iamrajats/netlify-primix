import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Brain, Check, Database, Server, Workflow } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/services')({ component: ServicesPage })

const offerings = [
  {
    icon: Brain,
    number: '01',
    title: 'AI systems & LLM engineering',
    description: 'Turn language models into dependable product capabilities, grounded in your data and designed around real user needs.',
    items: ['Retrieval-augmented generation (RAG)', 'AI APIs and agent workflows', 'Evaluation, guardrails, and observability'],
  },
  {
    icon: Server,
    number: '02',
    title: 'Backend engineering',
    description: 'Build the robust services behind your product, from the first release through demanding production workloads.',
    items: ['High-performance APIs', 'Async and distributed systems', 'Architecture reviews and modernization'],
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Automation & integrations',
    description: 'Connect tools and remove repetitive work with resilient workflows that fit the way your teams already operate.',
    items: ['Workflow and process automation', 'Internal copilots and assistants', 'Third-party and platform integrations'],
  },
  {
    icon: Database,
    number: '04',
    title: 'Data platforms & pipelines',
    description: 'Make information useful with reliable ingestion, transformation, and real-time processing foundations.',
    items: ['Event-driven pipelines', 'Streaming and queue-based processing', 'Data storage and retrieval design'],
  },
]

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services · From architecture to launch"
        title="Engineering for what comes next."
        description="A hands-on engineering partner for production AI, scalable backends, and the systems that connect them. We help you move from a promising idea to software your business can rely on."
      />

      <section className="px-6 py-20 sm:py-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {offerings.map(({ icon: Icon, number, title, description, items }) => (
              <article key={number} className="card-hover p-7 sm:p-9 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <div className="flex justify-between items-start mb-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.12)' }}>
                    <Icon size={23} className="text-blue-400" />
                  </div>
                  <span className="text-sm font-bold text-slate-600">{number}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
                <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check size={17} className="text-blue-400 mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" style={{ background: '#050508' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A clear path from challenge to production.</h2>
          </div>
          <div className="space-y-5">
            {[
              ['01', 'Understand the problem', 'Align on your users, constraints, goals, and what success needs to look like.'],
              ['02', 'Design the right system', 'Shape an architecture and delivery plan that balance speed, reliability, and cost.'],
              ['03', 'Build, validate, and scale', 'Ship in focused iterations, measure real-world behavior, and improve with confidence.'],
            ].map(([step, title, copy]) => (
              <div key={step} className="flex gap-5 p-5 rounded-xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <span className="text-blue-400 font-bold">{step}</span>
                <div><h3 className="text-white font-semibold mb-1">{title}</h3><p className="text-slate-400 text-sm leading-relaxed">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24" style={{ background: '#050508' }}>
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))', border: '1px solid rgba(59,130,246,0.25)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Have a system in mind?</h2>
          <p className="text-slate-400 mb-7">Let’s work out the right first step together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
