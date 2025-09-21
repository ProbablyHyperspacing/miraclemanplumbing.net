'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/MMPtemphero.jpg.webp"
          alt="Miracle Man Plumbing Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Buttons */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="whitespace-nowrap">Plumbing Services in</span>{' '}
                <span className="text-white">Prescott Valley AZ</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium">
                Specializing in Drain Cleaning, Hydro Jetting & Water Heaters
              </p>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-[#28b8e9] hover:bg-[#1fa3d1] text-white px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              
              <Button 
                size="lg" 
                asChild
                className="bg-[#28b8e9] hover:bg-[#1fa3d1] text-white px-8 py-4 text-lg font-semibold"
              >
                <Link href={`tel:${SITE_CONFIG.phone}`}>
                  {SITE_CONFIG.phoneDisplay}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-[#28b8e9]/20">
              <CardHeader className="bg-[#28b8e9]/5 rounded-t-lg">
                <CardTitle className="text-2xl text-center text-[#1d588d]">Get a Free Quote</CardTitle>
                <CardDescription className="text-center text-[#1d588d]/80">
                  Fill out the form below and we&apos;ll get back to you quickly!
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}