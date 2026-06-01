import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  CheckCircle,
  ChevronRight,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE_CONFIG } from '@/lib/constants'

// ---------------------------------------------------------------------------
// Dewey-Humboldt is a SERVICE AREA covered from our Prescott Valley base, not
// a separate office. We intentionally do NOT publish a Dewey-Humboldt street
// address (it would be inaccurate and a Google listing-spam risk).
// ---------------------------------------------------------------------------
const PHONE = SITE_CONFIG.phone // (928) 830-3575
const PHONE_HREF = 'tel:+19288303575'

export const metadata: Metadata = generatePageMetadata({
  title: 'Plumber in Dewey-Humboldt, AZ',
  description:
    'Licensed plumbers serving Dewey-Humboldt, AZ. Water heaters, drain cleaning, well and septic plumbing, leak detection, repiping, and 24/7 emergency service. Call (928) 830-3575.',
  path: '/dewey-humboldt',
})

// Genuinely local, Dewey-Humboldt-specific service notes. The area is a small
// Highway 69 community east of Prescott Valley: a mix of older homes (some near
// the former Humboldt smelter), newer builds, and rural well/septic parcels.
const deweyServices = [
  {
    title: 'Drain Cleaning & Hydro Jetting',
    blurb:
      'From older homes near downtown Humboldt to newer Dewey subdivisions, blocked drains and slow lines are common calls. We cable and hydro jet to clear grease, roots, and buildup and get things flowing again.',
  },
  {
    title: 'Water Heater Repair & Installation',
    blurb:
      'Hard high-desert water builds sediment quickly in tanks. We flush, repair, and replace tank and tankless water heaters across Dewey-Humboldt and size new units for the area’s cooler incoming water temperatures.',
  },
  {
    title: 'Well & Septic-Area Plumbing',
    blurb:
      'Many parcels on the edges of Dewey-Humboldt run on private wells and septic. We handle pressure-tank and well plumbing connections and septic-safe drain cleaning that won’t harm your system.',
  },
  {
    title: 'Leak Detection & Slab Leaks',
    blurb:
      'Older homes in the area can develop hidden leaks in aging supply lines and under slabs. We use electronic leak detection to pinpoint the problem and repair it with minimal disruption to your floors and walls.',
  },
  {
    title: 'Repiping & Pipe Repair',
    blurb:
      'Some of the area’s older housing stock still runs dated or freeze-prone pipe. We repipe in PEX or copper and handle burst and freeze-damaged lines after the cold snaps that hit the high country each winter.',
  },
  {
    title: '24/7 Emergency Plumbing',
    blurb:
      'Burst pipes, water heater failures, and sewer backups don’t keep business hours. Our team responds around the clock throughout Dewey-Humboldt and the Highway 69 corridor.',
  },
]

const deweyFaqs = [
  {
    question: 'Do you really cover Dewey-Humboldt?',
    answer:
      'Yes. Dewey-Humboldt is one of our regular service areas. Our licensed plumbers cover the whole community, from the Highway 69 corridor and downtown Humboldt to the Dewey subdivisions and the rural parcels around them, dispatched from our nearby Prescott Valley base.',
  },
  {
    question: 'Can you handle homes on a well and septic out here?',
    answer:
      'Yes. Plenty of Dewey-Humboldt properties are on private wells and septic systems. We service the plumbing side of well and pressure-tank setups and do septic-safe drain cleaning that clears clogs without the harsh chemicals that damage a septic system.',
  },
  {
    question: 'How fast can you respond to an emergency in Dewey-Humboldt?',
    answer:
      'We offer 24/7 emergency dispatch for burst pipes, major leaks, and sewage backups. Because we’re based nearby in Prescott Valley, we can usually reach Dewey-Humboldt addresses quickly. Call (928) 830-3575 and we’ll give you an honest arrival window.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Miracle Man Plumbing Inc. is fully licensed and insured (ROC# 206195 and 232054), with all work performed under a certified Master Plumber. We’ve served the greater Prescott area, including Dewey-Humboldt, since 2005.',
  },
  {
    question: 'Do you give free estimates in Dewey-Humboldt?',
    answer:
      'Yes. We provide free, upfront estimates with transparent pricing before any work begins, so there are no surprises on the final invoice.',
  },
]

// Real Google reviews (same verified reviews used across the site).
const reviews = [
  {
    name: 'Calli Murray',
    text: 'Caleb and Neil did an excellent job fixing our toilet! They arrived promptly, were polite and respectful, and even put on shoe covers before entering the house. They quickly diagnosed the problem, repaired it efficiently, and left everything spotless. Highly recommend them!',
  },
  {
    name: 'Alexis Rounds',
    text: 'Hands down the best plumbing experience we’ve ever had. Neil replaced all three of our toilets quickly and with great attention to detail. Extremely knowledgeable, thorough, and clearly committed to quality — no shortcuts taken. We’ll definitely be using Miracle Man Plumbing again.',
  },
  {
    name: 'Anthony Veneziano',
    text: 'Michael and Caleb lived up to the name of the business, they worked a miracle for us and fully replaced our water heater on a same day call! They were excellent at communicating with us the issue at hand, all the while being fast and efficient. Would highly recommend them to anyone 5 stars.',
  },
  {
    name: 'Ron Walker',
    text: 'Caleb showed up to help on a very challenging Saturday afternoon, even though I didn’t have an appointment. A pipe in the wall had failed and the house was flooded. He immediately set about fixing the issue and his work was top notch and fast. I would highly recommend Caleb with Miracle Man Plumbing.',
  },
]

// LocalBusiness + FAQ structured data. Service-area page: real Prescott Valley
// address, Dewey-Humboldt under areaServed, no fabricated street address.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Plumber',
      '@id': 'https://miraclemanplumbing.com/dewey-humboldt#business',
      name: 'Miracle Man Plumbing Inc.',
      image: 'https://miraclemanplumbing.com/MiracleMan_Logo_Colour.png',
      url: 'https://miraclemanplumbing.com/dewey-humboldt',
      telephone: PHONE,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Prescott Valley',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Dewey-Humboldt, AZ' },
        { '@type': 'City', name: 'Prescott Valley, AZ' },
        { '@type': 'City', name: 'Prescott, AZ' },
        { '@type': 'City', name: 'Mayer, AZ' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '435',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: deweyFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function DeweyHumboldtPage() {
  return (
    <div>
      <Script
        id="dewey-humboldt-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Miracle-Man-Site-Header-Background.jpg"
            alt="Miracle Man Plumbing serving Dewey-Humboldt, Arizona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-16 py-16">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#EDB23A] mb-4">
              <MapPin className="w-4 h-4" />
              Serving Dewey-Humboldt, Arizona
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight nav-font text-[#95C4E2]" style={{ WebkitTextStroke: '1px black', textShadow: '-2px 3px 0px black' }}>
              Trusted Plumbers in Dewey-Humboldt, AZ
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mt-6 leading-relaxed">
              Drain cleaning, water heaters, leak detection, repiping, well and
              septic plumbing, and 24/7 emergency service for Dewey-Humboldt
              homes. Licensed, insured, and local since 2005.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={PHONE_HREF}
                className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE}
              </a>
              <button
                type="button"
                className="se-booking-show border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#0B2545] transition-colors inline-flex items-center justify-center"
              >
                Schedule Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#0B2545] py-6">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6 text-[#EDB23A] mb-1" />
              <p className="font-bold text-sm">4.9 Star Rated</p>
              <p className="text-xs text-white/70">435+ Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-6 h-6 text-[#EDB23A] mb-1" />
              <p className="font-bold text-sm">Licensed &amp; Insured</p>
              <p className="text-xs text-white/70">ROC# 206195 &amp; 232054</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-6 h-6 text-[#EDB23A] mb-1" />
              <p className="font-bold text-sm">Local Since 2005</p>
              <p className="text-xs text-white/70">Master Plumber</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-[#EDB23A] mb-1" />
              <p className="font-bold text-sm">24/7 Service</p>
              <p className="text-xs text-white/70">Emergency Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + local context */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 nav-font">
                Plumbing for the Dewey-Humboldt Community
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Dewey-Humboldt is a small high-country community strung along
                  Highway 69 just east of Prescott Valley, with a real mix of
                  housing: older homes around historic Humboldt, newer builds in
                  Dewey, and rural parcels on private wells and septic out
                  toward the edges. Each of those calls for a different plumbing
                  approach.
                </p>
                <p>
                  Miracle Man Plumbing Inc. has served this corridor since 2005.
                  Whether it&apos;s a quick drain clear, an emergency water
                  heater swap, a hidden slab leak in an older home, or well and
                  septic-area plumbing on a rural lot, we show up with honest,
                  upfront pricing and a certified Master Plumber behind every
                  job.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-[#0B2545] hover:bg-[#091B36] text-white px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-[#0B2545] text-[#0B2545] px-6 py-3 rounded-md font-semibold hover:bg-[#0B2545] hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  Request a Free Estimate
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/dewey.jpeg"
                alt="Dewey-Humboldt, Arizona high-country landscape served by Miracle Man Plumbing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services with local detail */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-4 nav-font">
              Our Plumbing Services in Dewey-Humboldt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Residential and commercial plumbing for older homes, new builds,
              and rural properties alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deweyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#EDB23A] hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.blurb}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/plumbing-services"
              className="inline-flex items-center gap-1 text-[#0B2545] font-semibold hover:text-[#EDB23A] transition-colors"
            >
              See all plumbing services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-2 nav-font">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-[#0B2545]">4.9</span>
              <span className="text-sm text-gray-500">from 435 Google reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="font-bold text-[#0B2545]">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1 text-[#0B2545] font-semibold hover:text-[#EDB23A] transition-colors"
            >
              Read more reviews
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-4 nav-font">
              Dewey-Humboldt Plumbing FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {deweyFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 nav-font">
                Serving Dewey-Humboldt &amp; Nearby
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We&apos;re a Prescott-area company dispatched from our nearby
                Prescott Valley base, covering Dewey-Humboldt and the
                surrounding Highway 69 communities. There&apos;s no separate
                storefront to visit, we come to you.
              </p>
              <div className="space-y-5 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#EDB23A] flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    Dewey-Humboldt, Prescott Valley, Mayer &amp; Prescott, AZ
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#EDB23A] flex-shrink-0" />
                  <a
                    href={PHONE_HREF}
                    className="text-lg font-semibold text-[#0B2545] hover:text-[#EDB23A] transition-colors"
                  >
                    {PHONE}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#EDB23A] flex-shrink-0" />
                  <span className="text-lg">
                    7 Days a Week, 8AM&ndash;6PM &middot; 24/7 Emergency Service
                  </span>
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={PHONE_HREF}
                  className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE}
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=Dewey-Humboldt,+AZ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dewey-Humboldt, AZ service area"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#0B2545]">
        <div className="container mx-auto px-6 lg:px-16 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 nav-font">
            Need a Plumber in Dewey-Humboldt?
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
            Call us for fast, honest service and a free estimate. We&apos;re
            local, licensed, and available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#0B2545] transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
