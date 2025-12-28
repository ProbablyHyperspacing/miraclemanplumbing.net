import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProviders } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Miracle Man Plumbing - Professional Plumbing Services',
  description: 'Professional plumbing services you can trust. Emergency repairs, installations, and maintenance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Toaster />
        <AnalyticsProviders />

        {/* Floating Inquire Button */}
        <Link
          href="/contact"
          className="fixed bottom-6 right-6 bg-[#EDB23A] hover:bg-[#C08222] text-[#0B2545] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center space-x-2"
        >
          <span>Inquire</span>
        </Link>
      </body>
    </html>
  )
}