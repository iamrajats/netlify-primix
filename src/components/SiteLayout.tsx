import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import type { ReactNode } from 'react'

const navigation = [
  { label: 'Home', to: '/' as const },
  { label: 'Services', to: '/services' as const },
  { label: 'Solutions', to: '/solutions' as const },
  { label: 'About', to: '/about' as const },
  { label: 'Blog', to: '/blog' as const },
  { label: 'Contact', to: '/contact' as const },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(5,5,8,0.92)', WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(30,30,58,0.8)' }}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" aria-label="Primix Labs home" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/primix-wordmark.png"
            alt="Primix Labs"
            className="primix-logo"
            style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block' }}
            draggable={false}
          />
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-7">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeProps={{ className: 'text-white' }}
              inactiveProps={{ className: 'text-slate-400' }}
              className="text-sm font-medium hover:text-white transition-colors"
              activeOptions={{ exact: item.to === '/' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg inline-flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
          >
            Book a Consultation <ArrowRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-2" style={{ background: 'rgba(5,5,8,0.98)' }}>
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-3 rounded-lg text-sm font-semibold text-white text-center mt-2"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer style={{ background: '#030305', borderTop: '1px solid #1E1E3A' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <Link to="/" aria-label="Primix Labs home">
            <img
              src="/logo-transparent.png"
              alt="Primix Labs"
              className="primix-logo"
              style={{ maxWidth: 300, width: '100%', height: 'auto', display: 'block' }}
              draggable={false}
            />
          </Link>
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-white font-semibold text-sm mb-4">Explore</p>
              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link key={item.label} to={item.to} className="text-slate-500 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Information</p>
              <div className="flex flex-col gap-3">
                <Link to="/faqs" className="text-slate-500 hover:text-white text-sm transition-colors">FAQs</Link>
                <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Website Terms</Link>
                <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="/cookies" className="text-slate-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@primixlabs.com" className="text-slate-500 hover:text-white text-sm transition-colors">hello@primixlabs.com</a>
                <a href="tel:+918766220922" className="text-slate-500 hover:text-white text-sm transition-colors">+91 8766220922</a>
                <a href="https://wa.me/918766220922" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors">WhatsApp</a>
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

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: '#050508', minHeight: '100vh' }}>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden grid-bg px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden="true"
        className="absolute glow-bg pointer-events-none"
        style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] mb-5">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">{title}</h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
