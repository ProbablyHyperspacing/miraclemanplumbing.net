'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, MapPin, Loader2, Navigation } from 'lucide-react'

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

// If the fix lands far outside the service region, don't trust it to pick
// between two offices only ~9 miles apart — fall back to manual choice.
const MAX_DISTANCE_MILES = 60

function distanceMiles(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const R = 3958.8
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

type Status = 'idle' | 'locating' | 'error'

export function LeaveAReview() {
  const [status, setStatus] = useState<Status>('idle')

  // Triggered by a tap — required by iOS Safari for geolocation to work.
  const useMyLocation = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setStatus('error')
      return
    }

    setStatus('locating')

    // Hard guard so a hung GPS request can never freeze the UI.
    let settled = false
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true
        setStatus('error')
      }
    }, 8000)

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (settled) return
        settled = true
        clearTimeout(timer)

        const { latitude, longitude } = pos.coords
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
          window.location.href = nearest.reviewUrl
        } else {
          // Out of area — let them pick manually.
          setStatus('error')
        }
      },
      () => {
        // Denied, unavailable, or timed out — let them pick manually.
        if (settled) return
        settled = true
        clearTimeout(timer)
        setStatus('error')
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
    )
  }

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
        <p className="text-white/80 text-lg mb-8">
          We have two locations. Pick the one that served you so your review
          goes to the right place.
        </p>

        {/* Use my location (tap-triggered so it works on iOS) */}
        <button
          onClick={useMyLocation}
          disabled={status === 'locating'}
          className="w-full bg-white/10 hover:bg-white/20 disabled:opacity-70 border border-white/30 text-white rounded-xl px-6 py-4 mb-2 flex items-center justify-center gap-2 font-semibold transition-colors"
        >
          {status === 'locating' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Finding your location…
            </>
          ) : (
            <>
              <Navigation className="w-5 h-5" />
              Find the closest location for me
            </>
          )}
        </button>
        <p className="text-white/60 text-sm mb-6">
          Lets us match you to the nearest location automatically.
        </p>

        {status === 'error' && (
          <p className="text-white/70 text-sm mb-6 -mt-2">
            Couldn&apos;t detect your location — just pick your area below.
          </p>
        )}

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/50 text-sm uppercase tracking-wider">
            or pick your area
          </span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

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
          You&apos;ll be taken to Google to leave your review. It only takes a
          minute!
        </p>
      </div>
    </section>
  )
}
