'use client'

import Image from 'next/image'
import { Star, MapPin } from 'lucide-react'

// Two Google Business review links. Mapping confirmed with the owner:
//   Prescott        -> CZYahYePoK4TEBM
//   Prescott Valley -> CTWFeuWa7dYLEBM
const LOCATIONS = [
  {
    key: 'prescott',
    label: 'Prescott',
    sublabel: 'Prescott / Chino Valley area',
    reviewUrl: 'https://g.page/r/CZYahYePoK4TEBM/review',
  },
  {
    key: 'prescott-valley',
    label: 'Prescott Valley',
    sublabel: 'Prescott Valley area',
    reviewUrl: 'https://g.page/r/CTWFeuWa7dYLEBM/review',
  },
] as const

export function LeaveAReview() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0B2545] to-[#091B36] px-6 py-16">
      <div className="w-full max-w-xl text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/MiracleMan_Logo_Colour.png"
            alt="Miracle Man Plumbing"
            width={220}
            height={110}
            className="h-auto w-44 object-contain"
            priority
          />
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-[#EDB23A] text-[#EDB23A]" />
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 nav-font">
          Leave Us a Review!
        </h1>
        <p className="text-white/80 text-lg mb-2">
          Thanks for choosing Miracle Man Plumbing.
        </p>
        <p className="text-white/80 text-lg mb-10">
          Which side of town are you on?
        </p>

        <div className="flex flex-col gap-5">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.key}
              href={loc.reviewUrl}
              className="group bg-[#EDB23A] hover:bg-[#C08222] text-[#0B2545] rounded-2xl px-8 py-7 shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <MapPin className="w-7 h-7 flex-shrink-0" />
              <span className="text-left">
                <span className="block text-2xl font-extrabold leading-tight">
                  {loc.label}
                </span>
                <span className="block text-sm font-medium text-[#0B2545]/80">
                  {loc.sublabel}
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="text-white/50 text-sm mt-8">
          Tap your location to leave a Google review. It only takes a minute!
        </p>
      </div>
    </section>
  )
}
