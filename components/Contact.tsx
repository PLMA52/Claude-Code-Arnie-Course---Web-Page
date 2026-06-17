import { CONSULTATION_MAILTO, CONTACT_EMAIL } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Data Strategy?
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Let&apos;s talk about how predictive analytics and AI can drive measurable outcomes for your organization.
        </p>
        <a
          href={CONSULTATION_MAILTO}
          className="inline-block bg-[#C9A84C] text-[#0A1628] font-bold px-12 py-5 rounded-lg hover:bg-[#b8943d] transition-colors text-lg"
        >
          Book a Consultation
        </a>
        <p className="text-gray-400 mt-8">
          Or reach us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C9A84C] hover:underline font-medium">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}
