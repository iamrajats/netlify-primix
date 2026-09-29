import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/terms')({ component: TermsPage })

const terms = [
  {
    title: '1. Using this website',
    paragraphs: [
      'By accessing or using the Primix Labs website, you agree to these Website Terms. If you do not agree, please do not use the website. You must use the site lawfully and must not interfere with its operation, security, or availability.',
      'You are responsible for ensuring that information you submit through the site is accurate and that you have the right to share it.',
    ],
  },
  {
    title: '2. Website content and services',
    paragraphs: [
      'The website describes Primix Labs and its software engineering, AI, and consulting capabilities. Website content is provided for general informational purposes and does not create a client relationship, project commitment, or service-level guarantee.',
      'Any professional services are subject to a separate written proposal, statement of work, or agreement. If those terms conflict with these website terms, the signed project agreement will govern that engagement.',
    ],
  },
  {
    title: '3. Intellectual property',
    paragraphs: [
      'Unless otherwise stated, the website’s text, visual design, branding, and original materials are owned by or licensed to Primix Labs. You may view and share links to public pages for personal or business reference, but may not republish, modify, or commercially exploit site materials without prior written permission.',
      'Ownership and permitted use of deliverables created for a client are determined by the applicable written project agreement.',
    ],
  },
  {
    title: '4. AI and informational content',
    paragraphs: [
      'Articles and other materials about artificial intelligence, software, and engineering are general information, not legal, financial, security, or other professional advice. Technologies and practices change quickly; independently assess what is appropriate for your circumstances.',
      'Unless a separate agreement says otherwise, do not send confidential, sensitive, or regulated information through general website contact channels.',
    ],
  },
  {
    title: '5. Third-party services and links',
    paragraphs: [
      'The website may link to third-party websites or services. Those resources are provided for convenience; Primix Labs does not control or endorse their content, availability, or privacy practices. Your use of them is subject to their own terms and policies.',
    ],
  },
  {
    title: '6. Disclaimers and limitation of liability',
    paragraphs: [
      'The website is provided on an “as available” basis. To the extent permitted by applicable law, Primix Labs disclaims warranties that the website will be uninterrupted, error-free, secure, or suitable for a particular purpose.',
      'To the extent permitted by applicable law, Primix Labs will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website. Nothing in these terms limits liability that cannot legally be limited.',
    ],
  },
  {
    title: '7. Changes and contact',
    paragraphs: [
      'We may update these terms as the website or our practices change. The “Last updated” date below indicates when this page was most recently revised. Continued use of the website after an update means you accept the revised terms, to the extent permitted by applicable law.',
      'Questions about these terms? Contact us at hello@primixlabs.com.',
    ],
  },
]

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal · Website Terms"
        title="Clear terms for using our site."
        description="These terms explain the basic rules for accessing and using the Primix Labs website. Project work is covered by a separate written agreement."
      />
      <section className="px-6 py-16 sm:py-20" style={{ background: '#0A0A14' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 mb-8">Last updated: September 29, 2026</p>
          <div className="space-y-4">
            {terms.map((section) => (
              <section key={section.title} className="p-6 sm:p-8 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-slate-400 leading-relaxed">{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link to="/faqs" className="inline-flex items-center gap-2 text-blue-300 hover:text-white">Visit the FAQs <ArrowRight size={15} /></Link>
            <a href="mailto:hello@primixlabs.com" className="inline-flex items-center gap-2 text-blue-300 hover:text-white">Ask us a question <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
