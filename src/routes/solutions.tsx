import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Database, Workflow } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/solutions')({ component: SolutionsPage })

const solutions = [
  {
    icon: BriefcaseBusiness,
    number: '01',
    title: 'Intelligent hiring workflows',
    description: 'Help recruiting teams process applications consistently and spend more time connecting with the right candidates.',
    details: ['Resume parsing and structured profiles', 'Semantic role-to-candidate matching', 'Review queues with transparent scoring'],
    accent: '#60A5FA',
  },
  {
    icon: Database,
    number: '02',
    title: 'Knowledge assistants',
    description: 'Make internal knowledge easier to find with answers grounded in your organization’s documents and systems.',
    details: ['Secure document ingestion', 'Context-aware retrieval and citations', 'Feedback loops and answer evaluation'],
    accent: '#A78BFA',
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Real-time data operations',
    description: 'Turn disconnected manual processes into observable pipelines that move and process business data reliably.',
    details: ['Event-driven ingestion and processing', 'Retries, monitoring, and failure handling', 'Scalable queues and integrations'],
    accent: '#34D399',
  },
  {
    icon: Bot,
    number: '04',
    title: 'Internal AI copilots',
    description: 'Give teams practical AI assistance connected to the tools and workflows they use every day.',
    details: ['Role-specific assistant experiences', 'Tool calling and workflow orchestration', 'Permission-aware integrations'],
    accent: '#FBBF24',
  },
]

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solutions · Built around real work"
        title="Useful AI. Real systems. Measurable impact."
        description="We design and build AI-powered systems around the operational problems your team actually needs to solve—not technology for its own sake."
      />

      <section className="px-6 py-20 sm:py-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">What we can build</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Solutions that fit your business</h2>
            </div>
            <p className="text-slate-400 max-w-md">Each engagement starts with your workflow, data, and users—then we engineer the right solution for the job.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map(({ icon: Icon, number, title, description, details, accent }) => (
              <article key={number} className="card-hover p-7 sm:p-9 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${accent}18` }}>
                    <Icon size={23} style={{ color: accent }} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-500">Solution {number}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                <ul className="space-y-3 pt-5" style={{ borderTop: '1px solid #1E1E3A' }}>
                  {details.map((detail) => <li key={detail} className="text-sm text-slate-300 flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" style={{ background: '#050508' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Production, not just a demo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Designed for the messy details of the real world.</h2>
            <p className="text-slate-400 leading-relaxed">Successful AI products depend on much more than a model call. We connect the full system—from data and retrieval to APIs, evaluation, operations, and the people using it.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Reliable data flows', 'Useful user experience', 'Cost-aware architecture', 'Monitoring & evaluation'].map((item) => (
              <div key={item} className="min-h-32 rounded-xl p-5 flex flex-col justify-between" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <ArrowUpRight className="text-blue-400" size={20} /><span className="text-sm sm:text-base font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24" style={{ background: '#050508' }}>
        <div className="max-w-5xl mx-auto text-center p-8 sm:p-12 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))', border: '1px solid rgba(59,130,246,0.25)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your use case is unique. Let’s shape it together.</h2>
          <p className="text-slate-400 mb-7">Tell us what you want to improve, automate, or bring to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
            Discuss your use case <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
