"use client"

import { motion } from 'framer-motion'
import { INITIAL_CONSULTATION_MAILTO, STOCK_VIDEO_URL } from '@/lib/constants'

export default function GrowthVideo() {
  return (
    <section id="growth" className="bg-[#0D1F3C] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Cost of Guessing Is Too High
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fortune 500 companies that invest in predictive analytics outperform their peers.
            We help you become one of them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-12"
        >
          <video
            src={STOCK_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/50 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={INITIAL_CONSULTATION_MAILTO}
            className="inline-block bg-[#C9A84C] text-[#0A1628] font-semibold px-10 py-4 rounded-lg hover:bg-[#b8943d] transition-colors text-lg"
          >
            Schedule Your Initial Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
