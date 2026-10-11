import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/contact')({ component: ContactPage })

const contactOptions = [
  {
    icon: Mail,
    label: 'Email us',
    detail: 'hello@primixlabs.com',
    href: 'mailto:hello@primixlabs.com',
    action: 'Send an email',
  },
  {
    icon: Phone,
    label: 'Call us',
    detail: '+91 8766220922',
    href: 'tel:+918766220922',
    action: 'Make a call',
  },
  {
    icon: MapPin,
    label: 'Registered Office Address',
    detail: '38, 1st Floor, Ashwini Layout, 2nd Main, Egipura, Bengaluru, Karnataka 560047',
    href: 'https://maps.google.com/?q=38%2C+1st+Floor%2C+Ashwini+Layout%2C+2nd+Main%2C+Egipura%2C+Bengaluru%2C+Karnataka+560047',
    action: 'Open location',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    detail: 'Let’s start a conversation',
    href: 'https://wa.me/918766220922',
    action: 'Message us',
  },
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact · Tell us what you’re building"
        title="Let’s make your next idea real."
        description="Share the challenge, opportunity, or system you have in mind. We’ll talk through what you need and whether we’re the right team to help."
      />

      <section className="px-6 py-16 sm:py-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.78fr_1.22fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Start with a conversation.</h2>
            <p className="text-slate-400 leading-relaxed mb-8">No polished brief needed. A little context about your goals and current challenges is enough to get started.</p>
            <div className="p-5 rounded-xl" style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <p className="text-white font-semibold mb-2">Helpful things to include</p>
              <p className="text-sm text-slate-400 leading-relaxed">What you’re trying to achieve, who the system is for, and any timeline or technical constraints you already know about.</p>
            </div>

            <div className="space-y-3 mt-8">
              {contactOptions.map(({ icon: Icon, label, detail, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('https://') ? '_blank' : undefined}
                  rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl transition-colors hover:border-blue-500/40"
                  style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(59,130,246,0.12)' }}>
                    <Icon size={19} className="text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    <p className="text-sm text-slate-200 font-medium break-words">{detail}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #252544', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-7">
              <div>
                <p className="text-white text-xl font-bold mb-2">Tell us about your project</p>
                <p className="text-sm text-slate-400">A few details will help us make the first conversation useful.</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs text-slate-400 px-3 py-2 rounded-full shrink-0" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Typically replies within 2 business days
              </span>
            </div>

            {submitted ? (
              <div role="status" className="rounded-xl p-6 sm:p-8 text-center" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-emerald-300 text-xl" style={{ background: 'rgba(16,185,129,0.15)' }}>✓</div>
                <h3 className="text-lg font-bold text-white mb-2">Thanks for reaching out.</h3>
                <p className="text-sm text-slate-300 leading-relaxed">This form isn’t connected to our inbox. Please email <a className="text-emerald-300 underline underline-offset-4" href="mailto:hello@primixlabs.com">hello@primixlabs.com</a> to reach us.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-sm text-emerald-300 hover:text-white underline underline-offset-4">Back to the form</button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-200 mb-2">Your name <span className="text-blue-400">*</span></span>
                    <input name="name" type="text" autoComplete="name" required placeholder="Alex Morgan" className="contact-field" />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-200 mb-2">Work email <span className="text-blue-400">*</span></span>
                    <input name="email" type="email" autoComplete="email" required placeholder="alex@company.com" className="contact-field" />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-200 mb-2">Company</span>
                    <input name="company" type="text" autoComplete="organization" placeholder="Company name" className="contact-field" />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-200 mb-2">What can we help with?</span>
                    <select name="interest" defaultValue="" className="contact-field">
                      <option value="" disabled>Select a service</option>
                      <option>AI / LLM product development</option>
                      <option>Agentic AI and automation</option>
                      <option>Backend and data systems</option>
                      <option>Architecture or technical consulting</option>
                      <option>Something else</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="block text-sm font-medium text-slate-200 mb-2">A little about the project <span className="text-blue-400">*</span></span>
                  <textarea name="message" required minLength={15} rows={5} placeholder="What are you hoping to build or improve? What challenge are you trying to solve?" className="contact-field resize-y min-h-32" />
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-1">
                  <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-[1.02] shrink-0" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 25px rgba(59,130,246,0.2)' }}>
                    Submit <ArrowUpRight size={17} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24" style={{ background: '#0A0A14' }}>
        <div className="max-w-6xl mx-auto rounded-2xl px-7 py-9 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))', border: '1px solid rgba(59,130,246,0.2)' }}>
          <div><h2 className="text-2xl font-bold text-white mb-2">Prefer email?</h2><p className="text-slate-400">Reach us directly and we’ll get back to you.</p></div>
          <a href="mailto:hello@primixlabs.com" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>hello@primixlabs.com</a>
        </div>
      </section>
    </SiteLayout>
  )
}
