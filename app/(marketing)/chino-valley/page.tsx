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
// Chino Valley is a SERVICE AREA covered from our Prescott Valley base, not a
// separate office. We intentionally do NOT publish a Chino Valley street
// address (doing so would be inaccurate and a Google listing-spam risk).
// ---------------------------------------------------------------------------
const PHONE = SITE_CONFIG.phone // (928) 830-3575
const PHONE_HREF = 'tel:+19288303575'

export const metadata: Metadata = generatePageMetadata({
  title: 'Plumber in Chino Valley, AZ',
  description:
    'Licensed plumbers serving Chino Valley, AZ. Well and septic systems, water heaters, drain cleaning, leak detection, and 24/7 emergency service from Miracle Man Plumbing. Call (928) 830-3575.',
  path: '/chino-valley',
})

// Genuinely local, Chino-Valley-specific service notes. Chino Valley's defining
// plumbing reality is rural property on private wells and septic systems.
const chinoServices = [
  {
    title: 'Well Water & Pressure Systems',
    blurb:
      'Most Chino Valley properties run on private wells. We service and replace pressure tanks, well pumps’ plumbing connections, and pressure regulators, and we sort out the low-pressure and air-in-the-lines problems that come with rural well systems.',
  },
  {
    title: 'Septic-Friendly Plumbing & Drain Cleaning',
    blurb:
      'With septic instead of city sewer across most of the valley, what goes down the drain matters. We clear clogs, cable and hydro jet lines, and diagnose slow drains and backups without the harsh chemicals that damage a septic system.',
  },
  {
    title: 'Water Treatment & Softeners',
    blurb:
      'Chino Valley well water is hard and often heavy with iron and minerals. We install and maintain softeners, filtration, and iron/sediment systems so your fixtures, water heater, and appliances last longer and your water actually tastes right.',
  },
  {
    title: 'Water Heater Repair & Installation',
    blurb:
      'Hard well water builds sediment in tanks fast. We flush, repair, and replace tank and tankless water heaters, and size new units for the cooler incoming water temperatures common in the high-desert valley.',
  },
  {
    title: 'Leak Detection & Repiping',
    blurb:
      'On large rural lots, a leak between the well, the house, and outbuildings can run up a huge bill before you notice. We use electronic leak detection to find buried and slab leaks and repipe in PEX or copper when lines fail.',
  },
  {
    title: '24/7 Emergency Plumbing',
    blurb:
      'A failed well pump line, a burst pipe after a cold snap, or a septic backup can’t wait. Our team responds around the clock throughout Chino Valley and the surrounding Highway 89 corridor.',
  },
]

const chinoFaqs = [
  {
    question: 'Do you work on well and septic systems in Chino Valley?',
    answer:
      'Yes. Most of Chino Valley runs on private wells and septic rather than city utilities, so it’s a big part of what we do here. We handle pressure tanks, the plumbing side of well systems, septic-safe drain cleaning, and the line repairs that come with rural properties. (We focus on the plumbing connections; full well-pump and septic-tank pumping work we’ll coordinate or refer as needed.)',
  },
  {
    question: 'Do you actually come out to Chino Valley?',
    answer:
      'We do. Chino Valley is one of our core service areas. Our licensed plumbers cover the whole valley, from the Highway 89 corridor and downtown to the rural lots out toward Paulden and Williamson Valley, dispatched from our nearby Prescott Valley base.',
  },
  {
    question: 'My well water is hard and stains everything. Can you help?',
    answer:
      'Yes. Iron, hardness, and sediment are common in Chino Valley well water and they stain fixtures, scale up water heaters, and wear out appliances. We can test your situation and install the right softener and filtration setup so your water is cleaner and your plumbing lasts longer.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Miracle Man Plumbing Inc. is fully licensed and insured (ROC# 206195 and 232054), with work performed under a certified Master Plumber. We’ve served the greater Prescott area, including Chino Valley, since 2005.',
  },
  {
    question: 'Do you offer free estimates in Chino Valley?',
    answer:
      'Yes. We provide free, upfront estimates with transparent pricing before any work begins, so you know the cost before we start.',
  },
]

// Real Google reviews (same verified reviews used across the site).
const reviews = [
  {
    name: 'Anthony Veneziano',
    text: 'Michael and Caleb lived up to the name of the business, they worked a miracle for us and fully replaced our water heater on a same day call! They were excellent at communicating with us the issue at hand, all the while being fast and efficient. Would highly recommend them to anyone 5 stars.',
  },
  {
    name: 'Ron Walker',
    text: 'Caleb showed up to help on a very challenging Saturday afternoon, even though I didn’t have an appointment. A pipe in the wall had failed and the house was flooded. He immediately set about fixing the issue and suggested a company that could assist with drying the house out. Caleb’s work was top notch and fast. I would highly recommend Caleb with Miracle Man Plumbing.',
  },
  {
    name: 'Edmund Antone',
    text: 'I’ve used Miracle Man Plumbing twice now and both times they did an efficient, quality job. Caleb is very knowledgeable and went above and beyond, checking my shutoff valves and water pressure and giving honest, reasonable recommendations. I always look for contractors I can trust and I won’t hesitate to use them again.',
  },
  {
    name: 'Brittany Adams',
    text: 'Miracle Man came to install my kitchen faucet and a garbage disposal. The young man did a fantastic job! Very nice and friendly. I would use them again next time I need plumbing work! 10/10.',
  },
]

// LocalBusiness + FAQ structured data. Note: this is a SERVICE-AREA page, so
// the business uses its real Prescott Valley address and lists Chino Valley
// under areaServed — no fabricated Chino Valley street address.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Plumber',
      '@id': 'https://miraclemanplumbing.com/chino-valley#business',
      name: 'Miracle Man Plumbing Inc.',
      image: 'https://miraclemanplumbing.com/MiracleMan_Logo_Colour.png',
      url: 'https://miraclemanplumbing.com/chino-valley',
      telephone: PHONE,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Prescott Valley',
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Chino Valley, AZ' },
        { '@type': 'City', name: 'Paulden, AZ' },
        { '@type': 'City', name: 'Prescott, AZ' },
        { '@type': 'City', name: 'Prescott Valley, AZ' },
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
      mainEntity: chinoFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function ChinoValleyPage() {
  return (
    <div>
      <Script
        id="chino-valley-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Miracle-Man-Site-Header-Background.jpg"
            alt="Miracle Man Plumbing serving Chino Valley, Arizona"
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
              Serving Chino Valley, Arizona
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight nav-font text-[#95C4E2]" style={{ WebkitTextStroke: '1px black', textShadow: '-2px 3px 0px black' }}>
              Trusted Plumbers in Chino Valley, AZ
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mt-6 leading-relaxed">
              Well and septic systems, water treatment, water heaters, drain
              cleaning, and 24/7 emergency plumbing for Chino Valley homes and
              ranches. Licensed, insured, and local since 2005.
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
                Plumbing for Chino Valley&apos;s Rural Way of Life
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Chino Valley plumbing isn&apos;t city plumbing. Out here, most
                  homes sit on acreage with a private well and a septic system
                  instead of municipal water and sewer, and that changes
                  everything, from the pressure tank in your garage to what you
                  can safely send down a drain.
                </p>
                <p>
                  Miracle Man Plumbing Inc. has worked these rural properties
                  along the Highway 89 corridor since 2005. We handle the well
                  and pressure-system connections, septic-safe drain cleaning,
                  iron and hardness water treatment, water heaters, and the leak
                  and repipe work that long runs across big lots tend to need,
                  all with honest, upfront pricing and a certified Master Plumber
                  behind the work.
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
                src="/images/chino.jpeg"
                alt="Chino Valley, Arizona rural landscape served by Miracle Man Plumbing"
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
              Our Plumbing Services in Chino Valley
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Residential and commercial plumbing built for well, septic, and
              rural property realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chinoServices.map((service, index) => (
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
              Chino Valley Plumbing FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {chinoFaqs.map((faq, index) => (
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
                Serving Chino Valley &amp; Nearby
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We&apos;re a Prescott-area company dispatched from our nearby
                Prescott Valley base, covering Chino Valley and the surrounding
                communities. There&apos;s no separate storefront to visit, we
                come to you.
              </p>
              <div className="space-y-5 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#EDB23A] flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    Chino Valley, Paulden, Prescott &amp; Prescott Valley, AZ
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
                src="https://www.google.com/maps?q=Chino+Valley,+AZ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chino Valley, AZ service area"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#0B2545]">
        <div className="container mx-auto px-6 lg:px-16 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 nav-font">
            Need a Plumber in Chino Valley?
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
