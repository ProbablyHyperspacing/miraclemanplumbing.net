import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQB9W7CH');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQB9W7CH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Toaster />
        <AnalyticsProviders />

        {/* Floating Contact Button */}
        <Link
          href="/contact"
          className="fixed bottom-6 right-6 bg-[#EDB23A] hover:bg-[#C08222] text-[#0B2545] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center space-x-2"
        >
          <span className="hidden md:inline">Inquire</span>
          <span className="md:hidden">Contact</span>
        </Link>
      </body>
    </html>
  )
}