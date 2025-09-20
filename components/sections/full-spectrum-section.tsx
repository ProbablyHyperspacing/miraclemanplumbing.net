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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Main Content Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d588d] mb-6">
            POWER YOUR PROPERTY WITH OUR FULL-SPECTRUM PLUMBING SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Miracle Man Plumbing Inc. offers plumbing services that change things by combining knowledge,
            dependability, and responsiveness. Prescott Valley, Arizona, people and companies have come to trust us
            because of our dedication to quality and our capacity to fit the particular requirements of every customer.
            Backed by years of hands-on experience and available around the clock, we are ready to be your trusted
            plumbing partner for today, tomorrow, and many years to come.
          </p>
        </div>

        {/* Credentials Banner */}
        <div className="bg-gradient-to-r from-[#1d588d] to-[#28b8e9] rounded-2xl p-8 mb-16 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              <div>
                <h3 className="text-xl font-bold">LICENSED / BONDED / INSURED</h3>
                <p className="text-sm opacity-90">ROC#&apos;S 206195 & 232054</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white opacity-30 hidden md:block"></div>
            <div className="flex items-center">
              <Star className="w-8 h-8 mr-3" />
              <div>
                <h3 className="text-xl font-bold">FREE ESTIMATES</h3>
                <p className="text-sm opacity-90">No Hidden Fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Service Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-[#1d588d] mb-8 text-center">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#28b8e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phone</p>
                  <a href="tel:928-830-3575" className="text-2xl font-bold text-[#28b8e9] hover:text-[#1d588d] transition-colors">
                    928-830-3575
                  </a>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#28b8e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Location</p>
                  <p className="text-gray-600 leading-relaxed">3501 N Dale Dr<br />Prescott Valley, Arizona 86314</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#28b8e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Hours of Service</p>
                  <p className="text-xl font-bold text-[#28b8e9]">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-3xl font-bold text-[#1d588d] mb-8 text-center">
              SERVICE AREAS
            </h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#28b8e9] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-[#28b8e9] text-[#28b8e9] hover:bg-[#28b8e9] hover:text-white font-bold"
                >
                  View More Areas
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d588d]">
            Ready for Expert Plumbing Service?
          </h3>
          <p className="text-xl mb-8 text-gray-600">
            Contact Miracle Man Plumbing today for reliable, professional plumbing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#1d588d] text-white hover:bg-[#28b8e9] font-bold text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 928-830-3575
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1d588d] text-[#1d588d] hover:bg-[#1d588d] hover:text-white font-bold text-lg px-8 py-4"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}