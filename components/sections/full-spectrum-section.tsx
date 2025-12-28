'use client'

import { Phone, MapPin, Clock, Award, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serviceAreas = [
  "Prescott Valley, AZ",
  "Prescott, AZ",
  "Chino Valley, AZ",
  "Dewey-Humboldt, AZ",
  "Miller Valley, AZ",
  "Oak Knoll Village, AZ",
  "Fort Whipple, AZ",
  "Whipple, AZ",
  "Granite Siding, AZ"
]

export function FullSpectrumSection() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Main Content Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-xl lg:text-4xl font-bold text-[#0B2545] mb-4 lg:mb-6 px-2 nav-font">
            POWER YOUR PROPERTY WITH OUR FULL-SPECTRUM PLUMBING SERVICES
          </h2>
          <p className="text-sm lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Miracle Man Plumbing Inc. offers plumbing services that change things by combining knowledge,
            dependability, and responsiveness. Prescott Valley, Arizona, people and companies have come to trust us
            because of our dedication to quality and our capacity to fit the particular requirements of every customer.
            Backed by years of hands-on experience and available around the clock, we are ready to be your trusted
            plumbing partner for today, tomorrow, and many years to come.
          </p>
        </div>

        {/* Credentials Banner */}
        <div className="bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-xl lg:rounded-2xl p-4 lg:p-8 mb-8 lg:mb-16 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="flex items-center">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3" />
              <div className="text-left">
                <h3 className="text-sm lg:text-xl font-bold">LICENSED / BONDED / INSURED</h3>
                <p className="text-xs lg:text-sm opacity-90">ROC#&apos;S 206195 & 232054</p>
              </div>
            </div>
            <div className="w-px h-8 lg:h-12 bg-white opacity-30 hidden md:block"></div>
            <div className="flex items-center">
              <Star className="w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3" />
              <div className="text-left">
                <h3 className="text-sm lg:text-xl font-bold">FREE ESTIMATES</h3>
                <p className="text-xs lg:text-sm opacity-90">No Hidden Fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Service Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl lg:text-3xl font-bold text-[#0B2545] mb-4 lg:mb-8 text-center">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center p-4 lg:p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#EDB23A] rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Phone</p>
                  <a href="tel:928-830-3575" className="text-lg lg:text-2xl font-bold text-[#EDB23A] hover:text-[#C08222] transition-colors">
                    928-830-3575
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 lg:p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#EDB23A] rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Location</p>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">3501 N Dale Dr<br />Prescott Valley, Arizona 86314</p>
                </div>
              </div>

              <div className="flex items-center p-4 lg:p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#EDB23A] rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Hours of Service</p>
                  <p className="text-lg lg:text-xl font-bold text-[#EDB23A]">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl lg:text-3xl font-bold text-[#0B2545] mb-4 lg:mb-8 text-center">
              SERVICE AREAS
            </h3>
            <div className="bg-gray-50 rounded-xl p-4 lg:p-6">
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#EDB23A] rounded-full mr-2 lg:mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-xs lg:text-base">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 lg:mt-6 text-center">
                <Button
                  className="bg-[#0B2545] text-white hover:bg-[#C08222] font-bold text-sm lg:text-base"
                >
                  View More Areas
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-6 lg:p-12 bg-[#EDB23A] rounded-xl lg:rounded-2xl">
          <h3 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4 text-[#0B2545]">
            Ready for Expert Plumbing Service?
          </h3>
          <p className="text-sm lg:text-xl mb-4 lg:mb-8 text-[#0B2545]">
            Contact Miracle Man Plumbing today for reliable, professional plumbing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button
              size="default"
              asChild
              className="bg-[#0B2545] text-white hover:bg-[#C08222] font-bold text-sm lg:text-lg px-4 lg:px-8 py-2 lg:py-4"
            >
              <a href="tel:928-830-3575" className="flex items-center justify-center">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Call Now: 928-830-3575
              </a>
            </Button>
            <Button
              size="default"
              asChild
              className="bg-white text-[#0B2545] hover:bg-[#C08222] hover:text-white font-bold text-sm lg:text-lg px-4 lg:px-8 py-2 lg:py-4"
            >
              <a href="/contact">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}