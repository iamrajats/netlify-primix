import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/cookies')({ component: CookiePolicyPage })

const sections = [
  {
    title: 'What cookies are',
    paragraphs: [
      'Cookies are small files stored by a website or service in your browser. Similar technologies, such as local storage or request identifiers, can also remember preferences or support delivery and security.',
    ],
  },
  {
    title: 'How this website may use them',
    paragraphs: [
      'The site is designed primarily as a public information website. The website itself does not currently require an account or shopping cart. Our hosting provider or infrastructure may use strictly necessary technologies to deliver pages, route requests, protect the service, or support platform functionality.',
      'If optional analytics, embedded media, or other third-party features are enabled in the future, they may use additional technologies. This page should be updated to describe those tools and obtain consent where required before they are activated.',
    ],
  },
  {
    title: 'Third-party links',
    paragraphs: [
      'Links to services such as WhatsApp or other external websites take you away from this site. Those services may use their own cookies and tracking technologies under their own policies. Primix Labs does not control how those providers operate.',
    ],
  },
  {
    title: 'Managing your preferences',
    paragraphs: [
      'Most browsers let you view, delete, block, or limit cookies in their privacy or security settings. Blocking all cookies may affect features or platform functions, and browser controls may not provide the same choices as a consent tool where local law requires one.',
      'For more information about personal information and privacy choices, read our Privacy Policy or email hello@primixlabs.com.',
    ],
  },
  {
    title: 'Updates to this policy',
    paragraphs: [
      'We may revise this policy when the website or its technologies change. The date below indicates when this page was last updated.',
    ],
  },
]

function CookiePolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal · Cookie Policy"
        title="A straightforward note about cookies."
        description="Learn how cookies and similar technologies may be used to deliver and protect this website, and how to manage them in your browser."
      />
      <section className="px-6 py-16 sm:py-20" style={{ background: '#0A0A14' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 mb-8">Last updated: September 29, 2026</p>
          <p className="text-slate-400 leading-relaxed mb-6">This notice describes the site’s current intended use of cookies. Hosting and third-party configurations can change; review the live services and applicable consent requirements before publishing this policy as final.</p>
          <div className="space-y-4">
            {sections.map((section) => (
              <section key={section.title} className="p-6 sm:p-8 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-3">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-slate-400 leading-relaxed">{paragraph}</p>)}</div>
              </section>
            ))}
          </div>
          <Link to="/privacy" className="mt-8 inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm">Read our Privacy Policy <ArrowRight size={15} /></Link>
        </div>
      </section>
    </SiteLayout>
  )
}
