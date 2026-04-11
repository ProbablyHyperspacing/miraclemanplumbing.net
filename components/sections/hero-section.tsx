'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookNowButton } from '@/components/ui/book-now-button'
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
            <h1 className="text-3xl font-bold text-[#95C4E2] leading-tight mb-6 nav-font px-2" style={{ WebkitTextStroke: '1px black', textShadow: '-2px 3px 0px black' }}>
              Miracle Man Plumbing Specializes in Drain Cleaning<span className="font-sans">,</span> Water Filtration & Water Heaters
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
      <section className="hidden lg:flex relative min-h-[70vh] items-center">
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
          <div className="grid grid-cols-[3fr_2fr] gap-12 items-center">
            {/* Left Side - Text and Buttons */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight nav-font text-[#95C4E2]" style={{ WebkitTextStroke: '1px black', textShadow: '-2px 3px 0px black' }}>
                  Miracle Man Plumbing Specializes in Drain Cleaning<span className="font-sans">,</span> Water Filtration & Water Heaters
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
                <BookNowButton className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 text-lg font-semibold rounded-md h-14">
                  Book Now
                </BookNowButton>

                <Button
                  asChild
                  className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 text-lg font-semibold rounded-md h-14"
                >
                  <Link href={`tel:${SITE_CONFIG.phone}`}>
                    {SITE_CONFIG.phoneDisplay}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Book & Contact Card */}
            <div className="flex justify-end">
              <div className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg border border-[#EDB23A]/20 overflow-hidden">
                <div className="bg-[#0B2545] py-5 px-6">
                  <h2 className="text-2xl text-center text-white font-bold">Ready to Get Started?</h2>
                  <p className="text-center text-white/80 text-sm mt-1">
                    Schedule your service in just a few clicks
                  </p>
                </div>
                <div className="p-6 space-y-5">
                  <button
                    className="se-booking-show w-full bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                    type="button"
                  >
                    Schedule Online Now
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">or</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-[#0B2545] rounded-full p-2">
                        <Phone className="w-4 h-4 text-[#EDB23A]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call or Text 24/7</p>
                        <p className="font-bold text-[#0B2545]">{SITE_CONFIG.phoneDisplay}</p>
                      </div>
                    </Link>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Send a Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}