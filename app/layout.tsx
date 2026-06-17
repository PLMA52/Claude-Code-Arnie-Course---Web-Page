import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Collier Analytics — Enterprise AI & Predictive Analytics',
  description:
    'Predictive Analytics and AI Consulting for Fortune 500 companies. Workforce intelligence, data strategy, and machine learning solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
