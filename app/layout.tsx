import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProviders } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'

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
      </body>
    </html>
  )
}