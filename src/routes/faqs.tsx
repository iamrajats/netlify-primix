import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/faqs')({ component: FAQsPage })

const questions = [
  {
    question: 'What does Primix Labs help businesses build?',
    answer: 'We design and build production-ready AI systems, LLM and retrieval applications, backend services, data pipelines, automations, and integrations. The right scope depends on your users, data, existing systems, and goals.',
  },
  {
    question: 'Can you help take an AI prototype into production?',
    answer: 'Yes. We can assess the current prototype, identify gaps in data handling, evaluation, security, infrastructure, and user experience, then plan and implement the work needed for a dependable production release.',
  },
  {
    question: 'Do you build agentic AI applications?',
    answer: 'Yes. We help design agents around a bounded task, explicit tools and permissions, clear human approval points, and measurable evaluations. We choose the simplest architecture that can safely and reliably meet the use case.',
  },
  {
    question: 'How does a typical engagement begin?',
    answer: 'We start with a conversation about the challenge, stakeholders, constraints, and desired outcome. If there is a fit, we define scope, milestones, responsibilities, and commercial terms in a written proposal before work begins.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'Our work spans Python and FastAPI, Node.js, LLM providers and orchestration tools, relational and vector databases, queues, Kafka, Redis, and cloud platforms. Technology choices are made to fit your team and system rather than force a preset stack.',
  },
  {
    question: 'How do you approach data privacy and security?',
    answer: 'Data access, retention, model-provider choices, and deployment boundaries should be agreed as part of each project. Please avoid sending confidential, sensitive, or regulated data through the public contact channels on this website.',
  },
  {
    question: 'How long does a project take and what does it cost?',
    answer: 'It depends on the problem, integrations, existing code and data, and delivery requirements. After an initial discussion, we can propose a suitable discovery or implementation scope with estimated milestones and fees.',
  },
  {
    question: 'Do you work with teams that already have an engineering group?',
    answer: 'Yes. We can work alongside an existing team, provide focused AI or backend expertise, review an architecture, or help deliver a defined part of a larger roadmap.',
  },
]

function FAQsPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs · Straightforward answers"
        title="A few things you might be wondering."
        description="Learn how we work, what we build, and how to start a conversation with Primix Labs."
      />
      <section className="px-6 py-16 sm:py-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-4xl mx-auto space-y-3">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index
            const answerId = `faq-answer-${index}`
            return (
              <article key={question} className="rounded-2xl overflow-hidden" style={{ background: '#0F0F1A', border: `1px solid ${isOpen ? 'rgba(59,130,246,0.4)' : '#1E1E3A'}` }}>
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full flex items-center justify-between gap-5 text-left p-5 sm:p-7"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white">{question}</span>
                    <ChevronDown size={20} className={`text-blue-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h2>
                <div id={answerId} hidden={!isOpen} className="px-5 sm:px-7 pb-6 sm:pb-7"><p className="text-slate-400 leading-relaxed">{answer}</p></div>
              </article>
            )
          })}
        </div>
        <div className="max-w-4xl mx-auto mt-12 p-7 sm:p-9 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-5" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))', border: '1px solid rgba(59,130,246,0.22)' }}>
          <div><h2 className="text-xl font-bold text-white mb-1">Still have a question?</h2><p className="text-sm text-slate-400">Tell us what you’re trying to figure out.</p></div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>Contact us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </SiteLayout>
  )
}
