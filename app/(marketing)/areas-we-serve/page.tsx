import { MapPin, Phone, Clock, Award } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Areas We Serve | Miracle Man Plumbing - Prescott Valley & Surrounding Areas',
  description: 'Professional plumbing services throughout Prescott Valley, Prescott, Chino Valley, and surrounding communities in Arizona. Fast, reliable service.',
}

const serviceAreas = [
  'Prescott Valley, AZ',
  'Prescott, AZ',
  'Chino Valley, AZ',
  'Dewey-Humboldt, AZ',
  'Miller Valley, AZ',
  'Oak Knoll Village, AZ',
  'Fort Whipple, AZ',
  'Whipple, AZ',
  'Granite Siding, AZ',
  'Tutt, AZ',
  'Blue Hills Farms, AZ',
  'Granite Dells, AZ',
  'Yavapai Hills, AZ',
  'P and E Junction, AZ',
  'Entro, AZ',
  'Diamond Valley, AZ',
  'Castle Canyon Mesa, AZ',
  'Juniper Heights, AZ',
  'Highland Pines, AZ',
  'Iron Springs, AZ'
]

export default function AreasWeServePage() {
  return (
    <div>
      {/* Hero Section */}
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
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#EDB23A]/20 rounded-full blur-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold leading-tight text-white">
              SERVICE AREA
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Where We Serve
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miracle Man Plumbing proudly serves Prescott Valley and the surrounding communities with professional, reliable plumbing services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {serviceAreas.map((area, index) => {
                  // Check if this area has a dedicated page
                  const hasPage = area === 'Prescott, AZ' || area === 'Chino Valley, AZ' || area === 'Dewey-Humboldt, AZ'
                  const getLink = (area: string) => {
                    if (area === 'Prescott, AZ') return '/prescott'
                    if (area === 'Chino Valley, AZ') return '/chino-valley'
                    if (area === 'Dewey-Humboldt, AZ') return '/dewey-humboldt'
                    return null
                  }

                  const content = (
                    <div className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="bg-[#EDB23A] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className={`font-medium text-lg ${hasPage ? 'text-[#0B2545] hover:text-[#EDB23A] transition-colors' : 'text-[#0B2545]'}`}>
                        {area}
                      </span>
                    </div>
                  )

                  return hasPage ? (
                    <a key={index} href={getLink(area)!} className="block hover:bg-gray-50 rounded-lg transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 italic">
                  Professional plumbing services available in all listed communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center bg-gray-50 rounded-2xl shadow-xl p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#EDB23A] rounded-full w-16 h-16 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Need Plumbing Service in Your Area?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see your location listed? Give us a call! We may still be able to serve your area or can recommend a trusted local plumber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19288303575"
                className="bg-[#0B2545] hover:bg-[#091B36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (928) 830-3575
              </a>
              <a
                href="/contact"
                className="border-2 border-[#0B2545] text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0B2545] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Contact Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
                  Contact Information
                </h2>
                <p className="text-xl text-gray-600">
                  Serving Prescott Valley and surrounding communities
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2545]">Service Area</h4>
                    <p className="text-gray-600">Prescott Valley, AZ & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2545]">Phone</h4>
                    <p className="text-gray-600">(928) 830-3575</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2545]">Hours</h4>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2545]">Coverage</h4>
                    <p className="text-gray-600">20+ communities served</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52668.24429313935!2d-112.355577!3d34.610587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d48b8a92b31dd%3A0x4b8b8b8b8b8b8b8b!2sPrescott%20Valley%2C%20AZ!5e0!3m2!1sen!2sus!4v1642684937000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Miracle Man Plumbing Service Area"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}