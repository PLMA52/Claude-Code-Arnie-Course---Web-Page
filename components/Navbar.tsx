import Link from 'next/link'
import { CONSULTATION_MAILTO, BRAND_NAME } from '@/lib/constants'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-bold text-xl tracking-tight">{BRAND_NAME}</span>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          <a
            href={CONSULTATION_MAILTO}
            className="bg-[#C9A84C] text-[#0A1628] font-semibold px-5 py-2 rounded-lg hover:bg-[#b8943d] transition-colors text-sm whitespace-nowrap"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
