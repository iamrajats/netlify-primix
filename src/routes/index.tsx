import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Brain,
  Zap,
  Server,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Layers,
  GitBranch,
  Database,
  Activity,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: PrimixLabs,
})

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(5,5,8,0.92)', WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(30,30,58,0.8)', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src="/primix-wordmark.png"
            alt="Primix Labs"
            height={32}
            className="primix-logo"
            style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block' }}
            draggable={false}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(5,5,8,0.98)' }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors py-2" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div
        className="absolute glow-bg"
        style={{ width: '100%', maxWidth: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />
      <div
        className="absolute glow-bg"
        style={{ width: '100%', maxWidth: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', top: '40%', left: '40%', transform: 'translate(-50%,-50%)', animationDelay: '2s' }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 sm:pt-24">
        {/* Full logo */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <img
            src="/logo-transparent.png"
            alt="Primix Labs"
            className="primix-logo"
            style={{
              maxWidth: 720,
              width: '100%',
              height: 'auto',
              display: 'block',
              imageRendering: 'auto',
            }}
            draggable={false}
          />
        </div>

        {/* Badge */}
        <div id="home" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-8 scroll-mt-24"
          style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#3B82F6' }}>
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" style={{ boxShadow: '0 0 8px #3B82F6' }} />
          AI Systems & Backend Engineering
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
          <span className="gradient-text">We Build Production-Ready</span>
          <br />
          <span className="text-white">AI Systems</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          From LLM pipelines to scalable backend infrastructure, Primix Labs helps businesses move beyond AI experiments and build reliable, high-performance systems that work in real-world environments.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {[
            '✦ Designed for scale from day one',
            '✦ Built with cost-efficiency in mind',
            '✦ Focused on real business outcomes',
          ].map((pill) => (
            <span key={pill} className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(15,15,26,0.8)', border: '1px solid #1E1E3A', color: '#94A3B8' }}>
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-105 flex items-center gap-2 justify-center"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
          >
            Book a Consultation <ArrowRight size={18} />
          </a>
          <a
            href="#solutions"
            className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:bg-white/10 flex items-center gap-2 justify-center"
            style={{ border: '1px solid rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.05)' }}
          >
            View Solutions
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Services ──────────────────────────────────────────────────────────────

const services = [
  {
    icon: Brain,
    title: 'AI Backend Systems',
    bullets: [
      'Design and build LLM-powered systems',
      'Implement RAG pipelines for knowledge retrieval',
      'Develop scalable AI APIs',
    ],
    outcome: 'Reliable AI systems ready for production use',
  },
  {
    icon: Zap,
    title: 'Automation & AI Workflows',
    bullets: [
      'Automate repetitive business processes',
      'Build AI agents for internal operations',
      'Integrate workflows across tools and systems',
    ],
    outcome: 'Reduced manual effort and faster operations',
  },
  {
    icon: Server,
    title: 'Scalable Backend Engineering',
    bullets: [
      'High-performance APIs using FastAPI',
      'Async processing and queue-based systems',
      'Distributed architecture using Kafka and Redis',
    ],
    outcome: 'Systems that scale seamlessly under load',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting',
    bullets: [
      'AI architecture design',
      'MVP strategy and execution planning',
      'Cost optimization and performance tuning',
    ],
    outcome: 'Clear roadmap from idea to scalable system',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: '#0A0A14' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="card-hover p-8 rounded-2xl"
                style={{ background: '#0F0F1A', border: '1px solid #1E1E3A', borderLeft: '3px solid', borderImage: 'linear-gradient(to bottom, #3B82F6, #8B5CF6) 1' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)' }}>
                    <Icon size={24} className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-4" style={{ borderTop: '1px solid #1E1E3A' }}>
                  <p className="text-sm font-medium" style={{ color: '#8B5CF6' }}>
                    → {s.outcome}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Solutions ─────────────────────────────────────────────────────────────

const solutions = [
  {
    num: '01',
    title: 'AI Resume Screening System',
    preview: 'Automate candidate evaluation and reduce manual hiring effort',
    problem: [
      'Recruiters spend significant time manually reviewing resumes',
      'High volume leads to inconsistent evaluation',
      'Difficulty matching candidates to role requirements',
    ],
    architecture: 'Resume ingestion pipeline → Text extraction → Embedding-based similarity matching → Scoring engine → API layer',
    features: ['Automated parsing', 'Semantic matching', 'Custom scoring', 'Real-time ranking'],
    stack: 'Python, FastAPI, OpenAI embeddings / Azure OpenAI, PostgreSQL, Async pipelines',
    outcome: '60–80% reduction in manual screening time; Improved candidate relevance; Faster hiring decisions',
  },
  {
    num: '02',
    title: 'Knowledge-Based AI Chatbot (RAG)',
    preview: 'Enable instant access to company knowledge across documents and systems',
    problem: [
      'Information scattered across PDFs, databases, tools',
      'Employees rely on others for answers',
      'Search lacks context',
    ],
    architecture: 'Document ingestion → Vector DB → RAG system → Query processing → LLM response',
    features: ['Context-aware responses', 'Multi-source integration', 'Real-time queries', 'Secure access'],
    stack: 'LangChain / LangGraph, FAISS / Pinecone / Azure AI Search, OpenAI / Azure OpenAI, FastAPI',
    outcome: 'Instant internal knowledge access; Reduced team dependency; Improved efficiency',
  },
  {
    num: '03',
    title: 'Automated Data Processing Pipelines',
    preview: 'Build real-time, scalable pipelines for processing and transforming data',
    problem: [
      'Manual workflows are slow and error-prone',
      'Cannot handle real-time data at scale',
      'Lack of reliable pipelines',
    ],
    architecture: 'Event-driven design → Kafka streaming → Redis queuing → Async workers → Storage layer',
    features: ['Real-time ingestion', 'Fault-tolerant design', 'Horizontal scalability', 'Monitoring & retry'],
    stack: 'Kafka, Redis, Python asyncio, FastAPI, PostgreSQL',
    outcome: 'Real-time capability; Scalable architecture; Reduced latency',
  },
  {
    num: '04',
    title: 'Internal AI Copilot Systems',
    preview: 'Enhance team productivity with AI-powered internal assistants',
    problem: [
      'Teams spend time on repetitive tasks',
      'Lack of intelligent decision support',
      'Manual workflows reduce productivity',
    ],
    architecture: 'AI assistant + internal tools → Task orchestration → Context-aware responses → Workflow automation',
    features: ['Task automation', 'Internal system integration', 'Custom dashboards', 'Intelligent recommendations'],
    stack: 'LLM APIs, FastAPI async architecture, Database integration',
    outcome: 'Increased productivity; Reduced manual workload; Faster decisions',
  },
]

function Solutions() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="solutions" className="py-24 px-6" style={{ background: '#050508' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Real-World AI Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real-World AI Solutions We Build</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical, production-ready AI systems designed to solve real business problems with scalability, reliability, and efficiency.
          </p>
        </div>

        <div className="space-y-4 mt-16">
          {solutions.map((s, i) => (
            <div
              key={s.num}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: '#0F0F1A', border: `1px solid ${expanded === i ? 'rgba(59,130,246,0.4)' : '#1E1E3A'}` }}
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-8 text-left"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                  <span className="text-2xl sm:text-3xl font-black flex-shrink-0" style={{ color: 'rgba(59,130,246,0.4)' }}>{s.num}</span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 break-words">{s.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm break-words">{s.preview}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expanded === i
                    ? <ChevronUp size={20} className="text-blue-500" />
                    : <ChevronDown size={20} className="text-slate-400" />}
                </div>
              </button>

              {expanded === i && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 grid md:grid-cols-2 gap-6 sm:gap-8" style={{ borderTop: '1px solid #1E1E3A' }}>
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Problem</h4>
                    <ul className="space-y-2">
                      {s.problem.map((p) => (
                        <li key={p} className="text-slate-400 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span> {p}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 mt-6">Architecture</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.architecture}</p>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#93C5FD' }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <p className="text-slate-400 text-sm mb-6">{s.stack}</p>

                    <div className="p-4 rounded-xl" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
                      <p className="text-sm font-semibold text-purple-400 mb-1">Outcome</p>
                      <p className="text-slate-300 text-sm">{s.outcome}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl" style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}>
          <p className="text-slate-300 italic mb-4">
            "Have a unique use case? We design custom AI systems tailored to your business needs."
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
          >
            Discuss Your Use Case <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Why Primix Labs ────────────────────────────────────────────────────────

const whyPoints = [
  {
    icon: CheckCircle,
    title: 'We build production systems, not prototypes',
    desc: 'Every system is architected for real-world deployment with reliability, monitoring, and scalability built in from day one.',
  },
  {
    icon: Layers,
    title: 'Strong focus on backend architecture and scalability',
    desc: 'Deep expertise in designing systems that handle real traffic — async, distributed, and fault-tolerant by design.',
  },
  {
    icon: Activity,
    title: 'Cost-aware AI system design',
    desc: 'AI can be expensive. We optimize model usage, caching, and infrastructure choices to keep costs predictable.',
  },
  {
    icon: GitBranch,
    title: 'Deep expertise in async and distributed systems',
    desc: 'From Kafka to Redis Streams to asyncio — we know how to move data reliably at scale without bottlenecks.',
  },
]

function WhyPrimix() {
  return (
    <section className="py-24 px-6" style={{ background: '#0A0A14' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Primix Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyPoints.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="card-hover flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))' }}>
                  <Icon size={26} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Capabilities / Technologies ───────────────────────────────────────────

const capabilityCards = [
  {
    icon: Brain,
    title: 'AI Systems & LLM Engineering',
    bullets: [
      'Build production-ready AI systems using LLMs',
      'Implement RAG pipelines',
      'Develop context-aware, domain-specific AI solutions',
      'Optimize prompts and evaluate model performance',
    ],
    outcome: 'Reliable AI systems that work in real-world use cases',
  },
  {
    icon: Server,
    title: 'Scalable Backend Infrastructure',
    bullets: [
      'Build high-performance APIs using async frameworks',
      'Design distributed systems',
      'Implement event-driven architectures',
      'Handle high concurrency and load',
    ],
    outcome: 'Backend systems that scale under real-world traffic',
  },
  {
    icon: Database,
    title: 'Data & Real-Time Processing',
    bullets: [
      'Build real-time data pipelines and streaming systems',
      'Process large volumes of data reliably',
      'Queue-based and event-driven workflows',
      'Low-latency data handling',
    ],
    outcome: 'Fast, reliable, scalable data processing',
  },
  {
    icon: Zap,
    title: 'Automation & AI Workflows',
    bullets: [
      'Automate repetitive business processes',
      'Build AI agents for internal operations',
      'Integrate workflows across multiple systems',
      'Intelligent task orchestration',
    ],
    outcome: 'Improved efficiency and reduced manual workload',
  },
  {
    icon: Layers,
    title: 'System Design & Architecture',
    bullets: [
      'Design production-grade system architectures',
      'Choose optimal tech stack for scalability and cost',
      'Build fault-tolerant and resilient systems',
      'Plan for long-term scalability',
    ],
    outcome: 'Strong technical foundation for long-term growth',
  },
]

const techGroups = [
  { label: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js'] },
  { label: 'AI / LLM', items: ['OpenAI', 'Azure OpenAI', 'LangChain', 'LangGraph', 'Hugging Face'] },
  { label: 'Data & Storage', items: ['PostgreSQL', 'Redis', 'FAISS', 'Pinecone', 'Weaviate'] },
  { label: 'Distributed Systems', items: ['Kafka', 'RabbitMQ', 'Redis Streams'] },
  { label: 'Cloud & Infra', items: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
]

function Capabilities() {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'technologies'>('capabilities')

  return (
    <section id="capabilities" className="py-24 px-6" style={{ background: '#050508' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Do Best</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technology & Capabilities</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-xl p-1" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
            {(['capabilities', 'technologies'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-3 rounded-lg text-sm font-semibold capitalize transition-all"
                style={
                  activeTab === tab
                    ? { background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: 'white', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }
                    : { color: '#94A3B8' }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'capabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityCards.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="card-hover p-6 rounded-2xl flex flex-col" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-bold text-white text-sm">{c.title}</h3>
                  </div>
                  <ul className="space-y-2 flex-1 mb-4">
                    {c.bullets.map((b) => (
                      <li key={b} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 mt-auto" style={{ borderTop: '1px solid #1E1E3A' }}>
                    <p className="text-xs font-medium" style={{ color: '#8B5CF6' }}>→ {c.outcome}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeTab === 'technologies' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {techGroups.map((g) => (
              <div key={g.label}>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">{g.label}</p>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-default"
                      style={{ background: '#0F0F1A', border: '1px solid #1E1E3A', color: '#CBD5E1' }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.5)'
                        ;(e.currentTarget as HTMLElement).style.color = '#93C5FD'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.borderColor = '#1E1E3A'
                        ;(e.currentTarget as HTMLElement).style.color = '#CBD5E1'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ─── About ─────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: '#0A0A14' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">About Primix Labs</h2>

            <p className="text-slate-300 leading-relaxed mb-8">
              Primix Labs is built by <span className="text-white font-semibold">engineering leaders from leading technology and AI organizations</span>, with a strong focus on developing scalable, production-grade software systems. With deep expertise in high-performance backend architectures and modern AI technologies, our vision is simple: move businesses beyond AI experimentation and help them build systems that deliver real-world impact.
            </p>

            <h3 className="text-lg font-bold text-white mb-4">What We Do</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Designing robust backend architectures that handle real-world scale',
                'Building reliable LLM-powered systems such as RAG pipelines and AI APIs',
                'Creating event-driven and async systems for high performance',
                'Ensuring systems are cost-efficient, maintainable, and production-ready',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-xl italic text-slate-300" style={{ background: 'rgba(59,130,246,0.05)', borderLeft: '3px solid #3B82F6' }}>
              "Primix Labs exists to help businesses turn AI ideas into fully functional, production-ready systems that deliver measurable impact."
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
              <h3 className="text-lg font-bold text-white mb-3">Our Approach</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Systems-first approach to AI — AI as part of a larger scalable architecture. Every solution built with:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Scalability from day one', 'Strong backend foundations', 'Efficient data handling', 'Clear focus on real business outcomes'].map((item) => (
                  <div key={item} className="p-3 rounded-lg text-sm text-slate-300" style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
              <h3 className="text-lg font-bold text-white mb-3">Why Primix Labs</h3>
              <p className="text-slate-400 leading-relaxed">
                Many teams experiment with AI but struggle to take it to production. Primix Labs bridges that gap by combining backend engineering expertise with modern AI capabilities.
              </p>
            </div>

            {/* Accent visual */}
            <div className="p-8 rounded-2xl text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="text-6xl font-black mb-2" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                AI →
              </div>
              <div className="text-white font-semibold text-lg">Production</div>
              <p className="text-slate-400 text-sm mt-2">From idea to scalable system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ───────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ background: '#050508' }}>
      <div className="absolute inset-0 glow-bg" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6">
          Let's Build Something <span className="gradient-text">Scalable</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 mb-10">
          Ready to move beyond AI experiments? Let's build a system that works.
        </p>
        <a
          href="mailto:hello@primixlabs.com"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105 mb-12"
          style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 40px rgba(59,130,246,0.4)' }}
        >
          Book a Consultation <ArrowRight size={20} />
        </a>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-slate-400">
          <a href="mailto:hello@primixlabs.com" className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={18} className="text-blue-500" />
            hello@primixlabs.com
          </a>
          <a href="tel:+916376257042" className="flex items-center gap-3 hover:text-white transition-colors">
            <Phone size={18} className="text-blue-500" />
            +91 9310396520
          </a>
          <a href="https://wa.me/916376257042" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <MessageCircle size={18} className="text-green-500" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#030305', borderTop: '1px solid #1E1E3A' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <img
              src="/logo-transparent.png"
              alt="Primix Labs"
              className="primix-logo"
              style={{ maxWidth: 360, width: '100%', height: 'auto', display: 'block' }}
              draggable={false}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-white font-semibold text-sm mb-4">Navigation</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Solutions', href: '#solutions' },
                  { label: 'Services', href: '#services' },
                  { label: 'Capabilities', href: '#capabilities' },
                  { label: 'About', href: '#about' },
                ].map((l) => (
                  <a key={l.label} href={l.href} className="text-slate-500 hover:text-white text-sm transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@primixlabs.com" className="text-slate-500 hover:text-white text-sm transition-colors">hello@primixlabs.com</a>
                <a href="tel:+919310396520" className="text-slate-500 hover:text-white text-sm transition-colors">+91 9310396520</a>
                <a href="https://wa.me/916376257042" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E1E3A' }} className="pt-8 text-center text-slate-600 text-sm">
          © 2024 Primix Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────

function PrimixLabs() {
  return (
    <div style={{ background: '#050508', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <WhyPrimix />
      <Capabilities />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
