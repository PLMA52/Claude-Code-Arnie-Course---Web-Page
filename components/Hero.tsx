import Link from 'next/link'
import { CONSULTATION_MAILTO, TAGLINE } from '@/lib/constants'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-medium mb-2">
              Trusted by Fortune 500 Enterprises
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {TAGLINE}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Predictive Analytics and AI Consulting for Fortune 500 companies — from workforce intelligence to enterprise data strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={CONSULTATION_MAILTO}
                className="inline-block bg-[#C9A84C] text-[#0A1628] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8943d] transition-colors text-center"
              >
                Book a Consultation
              </a>
              <Link
                href="#services"
                className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] font-semibold px-8 py-4 rounded-lg hover:bg-[#C9A84C] hover:text-[#0A1628] transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/michel.jpg"
                alt="Michel Plante — Collier Analytics"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
