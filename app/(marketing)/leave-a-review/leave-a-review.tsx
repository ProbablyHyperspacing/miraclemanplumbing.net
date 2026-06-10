'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star, MapPin, Loader2 } from 'lucide-react'

// Two Google Business review links. Mapping confirmed with the owner:
//   Prescott        -> CZYahYePoK4TEBM
//   Prescott Valley -> CTWFeuWa7dYLEBM
const LOCATIONS = [
  {
    key: 'prescott',
    label: 'Prescott',
    sublabel: 'Prescott / Chino Valley area',
    reviewUrl: 'https://g.page/r/CZYahYePoK4TEBM/review',
    lat: 34.5455,
    lng: -112.4604,
  },
  {
    key: 'prescott-valley',
    label: 'Prescott Valley',
    sublabel: 'Prescott Valley area',
    reviewUrl: 'https://g.page/r/CTWFeuWa7dYLEBM/review',
    lat: 34.596,
    lng: -112.4597,
  },
] as const

// Only auto-redirect if the device is genuinely in the service region. The two
// offices are ~9 miles apart, so a generous radius around them still safely
// distinguishes "is this person local" from "scanned from Phoenix / bad GPS."
const MAX_DISTANCE_MILES = 40
// Reject GPS fixes that are too imprecise to trust (e.g. coarse IP-based fixes).
const MAX_ACCURACY_METERS = 50000

function distanceMiles(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const R = 3958.8 // earth radius in miles
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

type DetectState = 'detecting' | 'choose'

export function LeaveAReview() {
  const [state, setState] = useState<DetectState>('detecting')

  useEffect(() => {
    // No geolocation support -> just show the buttons.
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setState('choose')
      return
    }

    // If GPS takes too long, stop waiting and show the buttons.
    let settled = false
    const fallback = setTimeout(() => {
      if (!settled) {
        settled = true
        setState('choose')
      }
    }, 6000)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (settled) return
        settled = true
        clearTimeout(fallback)

        const { latitude, longitude, accuracy } = pos.coords

        // Too imprecise to trust -> let them choose.
        if (accuracy && accuracy > MAX_ACCURACY_METERS) {
          setState('choose')
          return
        }

        // Find the nearest location and confirm it's actually within range.
        let nearest: (typeof LOCATIONS)[number] = LOCATIONS[0]
        let nearestDist = Infinity
        for (const loc of LOCATIONS) {
          const d = distanceMiles(latitude, longitude, loc.lat, loc.lng)
          if (d < nearestDist) {
            nearestDist = d
            nearest = loc
          }
        }

        if (nearestDist <= MAX_DISTANCE_MILES) {
          // Local: send them straight to the right review screen.
          window.location.href = nearest.reviewUrl
        } else {
          // Out of area / unreliable -> let them choose.
          setState('choose')
        }
      },
      () => {
        // Denied or errored -> show the buttons.
        if (settled) return
        settled = true
        clearTimeout(fallback)
        setState('choose')
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 }
    )

    return () => clearTimeout(fallback)
  }, [])

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

        {state === 'detecting' ? (
          <div className="py-10">
            <Loader2 className="w-8 h-8 text-[#EDB23A] animate-spin mx-auto mb-4" />
            <p className="text-white/80 text-lg">Finding your location…</p>
            <button
              onClick={() => setState('choose')}
              className="mt-4 text-white/60 underline text-sm hover:text-white"
            >
              Skip and choose manually
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  )
}
