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

// ---------------------------------------------------------------------------
// Prescott location — real NAP for the dedicated Prescott listing.
// Keep this in sync with the Google Business Profile for this office.
// ---------------------------------------------------------------------------
const PRESCOTT = {
  name: 'Miracle Man Plumbing Inc. - Prescott',
  street: '430 N Mount Vernon Ave, Suite 16',
  city: 'Prescott',
  state: 'AZ',
  zip: '86301',
  phone: '(928) 216-5012',
  phoneHref: 'tel:+19282165012',
  // Coordinates of the Prescott office for the embedded map / schema.
  lat: 34.5455,
  lng: -112.4604,
}

export const metadata: Metadata = generatePageMetadata({
  title: 'Plumber in Prescott, AZ',
  description:
    'Licensed plumbers serving Prescott, AZ from our office at 430 N Mount Vernon Ave. Drain cleaning, water heaters, leak detection, repiping and 24/7 emergency service. Call (928) 216-5012.',
  path: '/prescott',
})

// Genuinely local, Prescott-specific service notes — written for this city,
// not swapped placeholders. These reference real local plumbing realities.
const prescottServices = [
  {
    title: 'Drain Cleaning & Hydro Jetting',
    blurb:
      'Tree roots from Prescott’s mature pines and junipers are a leading cause of recurring drain clogs and sewer backups, especially in older Mile-High Middle School and Mount Vernon district homes. We clear them with cabling or high-pressure hydro jetting.',
  },
  {
    title: 'Water Heater Repair & Installation',
    blurb:
      'At 5,400 feet, Prescott’s hard water builds sediment quickly inside tanks. We service, flush, and replace tank and tankless units, and size new heaters correctly for cooler incoming groundwater temperatures.',
  },
  {
    title: 'Leak Detection & Slab Leaks',
    blurb:
      'Many homes around Courthouse Plaza and the historic downtown core still run galvanized or cast-iron lines that corrode and leak. We use electronic leak detection to find slab and underground leaks without tearing up your whole floor.',
  },
  {
    title: 'Repiping & Pipe Repair',
    blurb:
      'Prescott’s older neighborhoods often have decades-old pipe that pinholes or restricts flow. We repipe in PEX or copper and handle freeze-damaged pipe after cold winter snaps in the high country.',
  },
  {
    title: 'Sewer Line Inspection & Repair',
    blurb:
      'Granite bedrock and shifting soils common in the Prescott area put stress on sewer lines. We run camera inspections to pinpoint breaks, bellies, and root intrusion before recommending a repair.',
  },
  {
    title: 'Water Treatment & Softeners',
    blurb:
      'Yavapai County water is hard and mineral-heavy. We install and maintain water softeners and filtration systems that protect fixtures, water heaters, and appliances throughout your Prescott home.',
  },
]

// Prescott-specific FAQs (distinct copy from the home page FAQ section).
const prescottFaqs = [
  {
    question: 'Do you really serve the City of Prescott, not just Prescott Valley?',
    answer:
      'Yes. We operate a Prescott office at 430 N Mount Vernon Ave, Suite 16, and our licensed plumbers work throughout Prescott, including downtown, the historic districts, Cliff Rose, Yavapai Hills, Timber Ridge, and the surrounding Yavapai County communities.',
  },
  {
    question: 'How fast can you get to my home in Prescott for an emergency?',
    answer:
      'For burst pipes, major leaks, and sewage backups we offer 24/7 emergency dispatch. Because we have a Prescott office, our team is local, not driving in from the Valley, so we can usually reach most Prescott addresses quickly. Call (928) 216-5012 and we’ll give you an honest arrival window.',
  },
  {
    question: 'Why does Prescott water cause so many plumbing problems?',
    answer:
      'Prescott sits above 5,400 feet with hard, mineral-rich groundwater. That hardness builds scale inside water heaters, faucets, and valves, shortening their lifespan. Combined with older galvanized and cast-iron pipe downtown and freeze risk in winter, it’s why we recommend annual water heater flushes and, for many homes, a water softener.',
  },
  {
    question: 'Are you licensed and insured to work in Arizona?',
    answer:
      'Absolutely. Miracle Man Plumbing Inc. is fully licensed and insured (ROC# 206195 and 232054) with work performed under a certified Master Plumber. We’ve served the greater Prescott area since 2005.',
  },
  {
    question: 'Do you give free estimates in Prescott?',
    answer:
      'Yes. We provide free, upfront estimates for plumbing projects in Prescott with transparent pricing before any work begins, so there are no surprises on the invoice.',
  },
]

// Real Google reviews (same verified reviews used across the site).
const reviews = [
  {
    name: 'Ron Walker',
    text: 'Caleb showed up to help on a very challenging Saturday afternoon, even though I didn’t have an appointment. A pipe in the wall had failed and the house was flooded. He immediately set about fixing the issue and suggested a company that could assist with drying the house out. Caleb’s work was top notch and fast. I would highly recommend Caleb with Miracle Man Plumbing for your plumbing needs.',
  },
  {
    name: 'Anthony Veneziano',
    text: 'Michael and Caleb lived up to the name of the business, they worked a miracle for us and fully replaced our water heater on a same day call! They were excellent at communicating with us the issue at hand, all the while being fast and efficient. Would highly recommend them to anyone 5 stars.',
  },
  {
    name: 'Alexis Rounds',
    text: 'Hands down the best plumbing experience we’ve ever had. Neil replaced all three of our toilets quickly and with great attention to detail. Extremely knowledgeable, thorough, and clearly committed to quality — no shortcuts taken. We’ll definitely be using Miracle Man Plumbing again.',
  },
  {
    name: 'Calli Murray',
    text: 'Caleb and Neil did an excellent job fixing our toilet! They arrived promptly, were polite and respectful, and even put on shoe covers before entering the house. They quickly diagnosed the problem, repaired it efficiently, and left everything spotless. Highly recommend them!',
  },
]

// LocalBusiness + FAQ structured data scoped to the Prescott office. This
// helps Google understand this is a real local entity, not a doorway page.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Plumber',
      '@id': 'https://miraclemanplumbing.com/prescott#business',
      name: PRESCOTT.name,
      image: 'https://miraclemanplumbing.com/MiracleMan_Logo_Colour.png',
      url: 'https://miraclemanplumbing.com/prescott',
      telephone: PRESCOTT.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: PRESCOTT.street,
        addressLocality: PRESCOTT.city,
        addressRegion: PRESCOTT.state,
        postalCode: PRESCOTT.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: PRESCOTT.lat,
        longitude: PRESCOTT.lng,
      },
      areaServed: [
        { '@type': 'City', name: 'Prescott, AZ' },
        { '@type': 'City', name: 'Prescott Valley, AZ' },
        { '@type': 'City', name: 'Chino Valley, AZ' },
        { '@type': 'City', name: 'Dewey-Humboldt, AZ' },
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
      mainEntity: prescottFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function PrescottPage() {
  return (
    <div>
      <Script
        id="prescott-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Miracle-Man-Site-Header-Background.jpg"
            alt="Miracle Man Plumbing serving Prescott, Arizona"
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
              Prescott, Arizona
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight nav-font text-[#95C4E2]" style={{ WebkitTextStroke: '1px black', textShadow: '-2px 3px 0px black' }}>
              Trusted Plumbers in Prescott, AZ
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mt-6 leading-relaxed">
              Drain cleaning, water heaters, leak detection, repiping, and 24/7
              emergency service from our Prescott office on Mount Vernon Ave.
              Licensed, insured, and serving the high country since 2005.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={PRESCOTT.phoneHref}
                className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {PRESCOTT.phone}
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
                Plumbing Built for Prescott&apos;s High Country
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Prescott isn&apos;t the desert valley floor, and its plumbing
                  doesn&apos;t behave like it either. At over 5,400 feet, homes
                  here deal with hard mineral water, real winter freeze risk, and
                  a mix of brand-new construction in Yavapai Hills alongside
                  century-old houses near Courthouse Plaza and Whiskey Row that
                  still run original galvanized and cast-iron pipe.
                </p>
                <p>
                  Miracle Man Plumbing Inc. has worked on both ends of that
                  spectrum since 2005. From our Prescott office on Mount Vernon
                  Ave we handle everything from a quick faucet repair to a full
                  repipe, sewer camera inspection, or an emergency water heater
                  replacement, with honest, upfront pricing and a certified
                  Master Plumber standing behind the work.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={PRESCOTT.phoneHref}
                  className="bg-[#0B2545] hover:bg-[#091B36] text-white px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {PRESCOTT.phone}
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
                src="/images/prescott.jpeg"
                alt="Prescott, Arizona high-country landscape served by Miracle Man Plumbing"
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
              Our Plumbing Services in Prescott
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Residential and commercial plumbing, tuned to the realities of
              living and working in Prescott.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prescottServices.map((service, index) => (
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
              What Prescott Customers Say
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
              Prescott Plumbing FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {prescottFaqs.map((faq, index) => (
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

      {/* Location / NAP + map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 nav-font">
                Visit Our Prescott Office
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#EDB23A] flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    {PRESCOTT.street}
                    <br />
                    {PRESCOTT.city}, {PRESCOTT.state} {PRESCOTT.zip}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#EDB23A] flex-shrink-0" />
                  <a
                    href={PRESCOTT.phoneHref}
                    className="text-lg font-semibold text-[#0B2545] hover:text-[#EDB23A] transition-colors"
                  >
                    {PRESCOTT.phone}
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
                  href={PRESCOTT.phoneHref}
                  className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {PRESCOTT.phone}
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[450px]">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${PRESCOTT.street}, ${PRESCOTT.city}, ${PRESCOTT.state} ${PRESCOTT.zip}`
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Miracle Man Plumbing Prescott office location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#0B2545]">
        <div className="container mx-auto px-6 lg:px-16 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 nav-font">
            Need a Plumber in Prescott Today?
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
            Call our Prescott team for fast, honest service and a free estimate.
            We&apos;re local, licensed, and available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PRESCOTT.phoneHref}
              className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {PRESCOTT.phone}
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
