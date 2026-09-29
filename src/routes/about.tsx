import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Check, Compass, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/about')({ component: AboutPage })

const principles = [
  { icon: ShieldCheck, title: 'Built for production', copy: 'Reliability, security, and observability are core requirements—not items left for later.' },
  { icon: Gauge, title: 'Practical by design', copy: 'We choose technology to fit the business problem, team, constraints, and expected scale.' },
  { icon: Compass, title: 'Clear from day one', copy: 'You get direct collaboration, understandable trade-offs, and a delivery path you can follow.' },
  { icon: Sparkles, title: 'AI with purpose', copy: 'We focus on outcomes where AI creates real value, with evaluation and human needs in view.' },
]

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Primix Labs"
        title="We take ambitious ideas all the way to production."
        description="Primix Labs is an engineering partner for teams building with AI. We bring together modern AI capabilities and strong backend foundations to create software that works beyond the demo."
      />

      <section className="px-6 py-20 sm:py-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Our point of view</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">AI is only as strong as the system around it.</h2>
            <p className="text-slate-400 leading-relaxed mb-5">The hard part of building useful AI is rarely a single model call. It is making the right data available, integrating into existing workflows, handling edge cases, and ensuring the experience remains reliable as usage grows.</p>
            <p className="text-slate-400 leading-relaxed">That is why we approach AI as engineering: understand the problem, design the whole system, then deliver and improve it with the people who use it.</p>
          </div>
          <div className="p-8 sm:p-10 rounded-2xl relative overflow-hidden" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.12), rgba(139,92,246,0.08))', border: '1px solid rgba(59,130,246,0.2)' }}>
            <div className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-6">From idea to impact</div>
            <div className="space-y-4">
              {['A problem worth solving', 'A system designed to fit', 'A product ready to grow'].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>{index + 1}</span>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" style={{ background: '#050508' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">What guides us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Good engineering is more than code.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="p-6 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <Icon className="text-blue-400 mb-5" size={24} />
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24" style={{ background: '#050508' }}>
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl" style={{ background: '#0A0A14', border: '1px solid #1E1E3A' }}>
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">Working together</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">A senior, collaborative engineering approach.</h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {['Direct communication and shared context', 'Thoughtful technical trade-offs', 'Small, validated delivery steps', 'Knowledge transfer for your team'].map((item) => (
              <li key={item} className="flex gap-3 text-slate-300"><Check size={18} className="text-blue-400 shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
          <Link to="/contact" className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors">Start a conversation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </SiteLayout>
  )
}
