'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone } from 'lucide-react'

const serviceHighlights = [
  "24/7 Emergency Service",
  "Licensed & Insured",
  "Free Estimates",
  "Satisfaction Guaranteed",
  "Local & Trusted"
]

export function HeroSection() {
  return (
    <>
      {/* Mobile Hero */}
      <section className="lg:hidden relative">
        {/* Background Image */}
        <div className="relative min-h-[60vh]">
          <Image
            src="/Miracle-Man-Site-Header-Background.jpg"
            alt="Miracle Man Plumbing Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 py-12 text-center">
            <h1 className="text-2xl font-bold text-white leading-tight mb-6 nav-font px-2">
              Miracle Man Plumbing Specializes in Drain Cleaning, Hydro Jetting & Water Heaters
            </h1>

            <p className="text-white/90 mb-6">Our Expert Services Include:</p>

            {/* Service Highlights */}
            <ul className="space-y-3 mb-8">
              {serviceHighlights.map((item, index) => (
                <li key={index} className="flex items-center justify-center text-white">
                  <span className="w-2 h-2 bg-[#EDB23A] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              size="lg"
              asChild
              className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg"
            >
              <Link href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: {SITE_CONFIG.phoneDisplay}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Desktop Hero */}
      <section className="hidden lg:block relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Miracle-Man-Site-Header-Background.jpg"
            alt="Miracle Man Plumbing Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 lg:px-16 py-16">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Text and Buttons */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight nav-font">
                  Miracle Man Plumbing Specializes in Drain Cleaning, Hydro Jetting & Water Heaters
                </h1>
              </div>

              {/* BBB Image */}
              <div className="flex justify-start">
                <Image
                  src="/images/BBB.png.webp"
                  alt="Better Business Bureau Accredited"
                  width={150}
                  height={75}
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href={`tel:${SITE_CONFIG.phone}`}>
                    {SITE_CONFIG.phoneDisplay}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex justify-end">
              <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-[#EDB23A]/20">
                <CardHeader className="bg-[#EDB23A]/5 rounded-t-lg py-4">
                  <CardTitle className="text-2xl text-center text-[#0B2545]">Get a Free Quote</CardTitle>
                  <CardDescription className="text-center text-[#0B2545]/80 text-sm">
                    Fill out the form below and we&apos;ll get back to you quickly!
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 pb-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}