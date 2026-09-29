import { createFileRoute } from '@tanstack/react-router'
import { PageHero, SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/privacy')({ component: PrivacyPage })

const sections = [
  {
    title: '1. Who this policy covers',
    paragraphs: [
      'This Privacy Policy describes how Primix Labs handles personal information when you visit this website or contact us about our services. It covers this public website, not a client product or a separate service with its own privacy notice.',
    ],
  },
  {
    title: '2. Information you provide',
    paragraphs: [
      'If you contact us by email, phone, or WhatsApp, we may receive the contact details and message content you choose to provide, along with information needed to respond to your inquiry. Please do not send passwords, payment-card details, confidential business information, or sensitive personal information through general contact channels.',
      'This website does not currently provide an account registration or checkout flow. If that changes, we will update this policy to explain the relevant collection and use.',
    ],
  },
  {
    title: '3. Information collected by the website host',
    paragraphs: [
      'When a browser requests a page, the hosting and infrastructure providers may process technical information such as IP address, request time, browser and device details, requested URLs, and error or security logs. These records help deliver the site, diagnose failures, protect against abuse, and maintain service reliability.',
      'The exact technical data, retention, and processing location depend on the hosting configuration and provider. Please consult the applicable provider privacy information for details about its independent processing.',
    ],
  },
  {
    title: '4. How information is used',
    paragraphs: [
      'We use information you send to respond to inquiries, discuss potential work, communicate about a request, and protect our communications and systems. Technical logs may be used by our hosting provider and by us, where available, to operate, troubleshoot, and secure the website.',
      'Where applicable privacy laws require a legal basis, processing may be based on responding to your request, legitimate interests in operating and securing our website and business, consent where requested, or another basis permitted by law.',
    ],
  },
  {
    title: '5. Sharing and service providers',
    paragraphs: [
      'We do not sell personal information collected through this website. Information may be handled by service providers that support website hosting, communications, or security, and may be disclosed when required by law or when reasonably necessary to protect rights, safety, and the service.',
      'If you choose to use a third-party contact option such as WhatsApp, that provider processes information under its own terms and privacy policy. We do not control third-party services.',
    ],
  },
  {
    title: '6. Retention and international processing',
    paragraphs: [
      'We keep inquiry information only for as long as reasonably needed to respond, maintain relevant business records, resolve disputes, and meet legal obligations. Hosting logs are retained according to the relevant infrastructure configuration and provider practices.',
      'Our providers may process information in countries other than where you live. Where required, appropriate safeguards for international transfers should be applied by the responsible provider or organization.',
    ],
  },
  {
    title: '7. Your choices and rights',
    paragraphs: [
      'Depending on where you live, you may have rights to request access, correction, deletion, restriction, portability, or to object to certain processing. You may also be able to withdraw consent where processing relies on consent. To make a request, email hello@primixlabs.com and describe the request; we may need to verify your identity and applicable law may limit a request.',
      'You can choose not to provide information, though we may then be unable to respond to an inquiry. You may also manage cookies through your browser; see our Cookie Policy.',
    ],
  },
  {
    title: '8. Security, children, and changes',
    paragraphs: [
      'We use reasonable safeguards appropriate to the information and website context, but no website or transmission method can be guaranteed completely secure. This website is intended for a general business audience and is not designed to collect information from children.',
      'We may update this policy when our practices or legal requirements change. The date below records the current revision of this page. Questions or privacy requests can be sent to hello@primixlabs.com.',
    ],
  },
]

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal · Privacy Policy"
        title="Your information deserves care."
        description="This policy explains what information may be handled when you browse the Primix Labs website or contact our team, and the choices available to you."
      />
      <section className="px-6 py-16 sm:py-20" style={{ background: '#0A0A14' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 mb-8">Last updated: September 29, 2026</p>
          <div className="p-5 rounded-xl mb-6 text-sm text-slate-300 leading-relaxed" style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)' }}>
            This is a general website privacy notice. The final policy should be checked against the hosting, analytics, contact, and data-retention services actually enabled for the site and the laws that apply to its visitors.
          </div>
          <div className="space-y-4">
            {sections.map((section) => (
              <section key={section.title} className="p-6 sm:p-8 rounded-2xl" style={{ background: '#0F0F1A', border: '1px solid #1E1E3A' }}>
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-3">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-slate-400 leading-relaxed">{paragraph}</p>)}</div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
