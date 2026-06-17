import { BRAND_NAME, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#060E1B]/80 backdrop-blur-sm border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p className="text-white font-bold text-lg">{BRAND_NAME}</p>
        <p className="text-gray-500 text-sm">Turning Data Into Decisions.</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block text-[#C9A84C] text-sm hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="text-gray-600 text-xs pt-2">
          &copy; 2026 {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
