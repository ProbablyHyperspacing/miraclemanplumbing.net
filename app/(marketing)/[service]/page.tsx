import Image from 'next/image'
import {
  Wrench, Settings, Shield, Clock, Gauge, Home, Building2, CheckCircle,
  TrendingUp, AlertCircle, AlertTriangle, Award, Building, Camera,
  Droplet, Filter, Leaf, Plus, RefreshCw, Search, Sparkles, Target,
  Thermometer, Zap
} from 'lucide-react'
import serviceDataFile from '@/lib/service-pages-data.json'
import { notFound } from 'next/navigation'

const iconMap = {
  Wrench,
  Settings,
  Shield,
  Clock,
  Gauge,
  Home,
  Building2,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  AlertTriangle,
  Award,
  Building,
  Camera,
  Droplet,
  Filter,
  Leaf,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  Thermometer,
  Zap
}

type ServicePageData = {
  slug: string
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
  }
  comprehensiveSolutions: {
    title: string
    description?: string
    items: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  infrastructureSection: {
    title: string
    paragraphs: string[]
    image: {
      src: string
      alt: string
    }
    ctas: {
      primary: {
        text: string
        href: string
      }
      secondary: {
        text: string
        href: string
      }
    }
  }
  servicesInclude: {
    title: string
    services: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    reviews: Array<{
      text: string
      author: string
      rating: number
    }>
  }
  contact: {
    title: string
    subtitle: string
    mapTitle: string
    locationInfo: {
      address: string
      phone: string
      hours: string
    }
    mapEmbedUrl: string
  }
}

// Generate static params for all services in the JSON
export async function generateStaticParams() {
  const services = Object.keys(serviceDataFile)
  return services.map((service) => ({
    service: service
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const data = serviceDataFile[service as keyof typeof serviceDataFile] as ServicePageData

  if (!data) {
    return {
      title: 'Service Not Found | Miracle Man Plumbing',
      description: 'The requested service page could not be found.'
    }
  }

  return {
    title: data.seo.title,
    description: data.seo.description
  }
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const data = serviceDataFile[service as keyof typeof serviceDataFile] as ServicePageData

  // Return 404 if service not found
  if (!data) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section - Gradient Background */}
      <section className="relative h-[35vh] flex items-center bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#EDB23A]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Miracle-Man-Site-Header-Background.jpg')"
          }}
        ></div>

        {/* Dark Tint for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric shapes for visual interest */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#EDB23A]/20 rounded-full blur-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold leading-tight text-white">
              {data.hero.title}
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              {data.comprehensiveSolutions.title}
            </h2>
            {data.comprehensiveSolutions.description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.comprehensiveSolutions.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {data.comprehensiveSolutions.items.slice(0, 2).map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#EDB23A] rounded-lg p-3 mt-1 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {data.comprehensiveSolutions.items.slice(2, 4).map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <div key={index + 2} className="flex items-start gap-4">
                    <div className="bg-[#EDB23A] rounded-lg p-3 mt-1 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B2545] mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ensure Reliable Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-6">
                  {data.infrastructureSection.title}
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                  {data.infrastructureSection.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={data.infrastructureSection.ctas.primary.href}
                    className="bg-[#0B2545] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#091B36] transition-colors shadow-lg text-center"
                  >
                    {data.infrastructureSection.ctas.primary.text}
                  </a>
                  <a
                    href={data.infrastructureSection.ctas.secondary.href}
                    className="border-2 border-[#0B2545] text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0B2545] hover:text-white transition-colors text-center"
                  >
                    {data.infrastructureSection.ctas.secondary.text}
                  </a>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src={data.infrastructureSection.image.src}
                    alt={data.infrastructureSection.image.alt}
                    width={500}
                    height={500}
                    className="rounded-xl shadow-2xl object-cover w-[500px] h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Include Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              {data.servicesInclude.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.servicesInclude.services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#EDB23A] p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#0B2545] rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B2545]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              {data.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.testimonials.reviews.map((review, index) => (
              <div key={index} className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <svg className="w-8 h-8 text-[#EDB23A] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-[#0B2545] font-bold text-lg">
                  — {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Contact Form */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
                  {data.contact.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {data.contact.subtitle}
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="drain-cleaning">Drain Cleaning</option>
                    <option value="backflow">Backflow Prevention & Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors resize-vertical bg-white text-[#0B2545]"
                    placeholder="Please describe your plumbing needs or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B2545] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#091B36] transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Map */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-4">
                  {data.contact.mapTitle}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {data.contact.locationInfo.address}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {data.contact.locationInfo.phone}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {data.contact.locationInfo.hours}
                  </p>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[450px]">
                <iframe
                  src={data.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Miracle Man Plumbing Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}