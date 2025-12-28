import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="container mx-auto px-4 lg:px-16 py-10 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
              <Image
                src="/MiracleMan_Logo_Colour.png"
                alt="Miracle Man Plumbing Logo"
                width={240}
                height={100}
                className="h-16 lg:h-20 w-auto"
              />
            </div>
            <p className="text-white mb-4 lg:mb-6 leading-relaxed text-xs lg:text-base">
              Professional plumbing services you can trust. Serving Prescott Valley and surrounding areas since 2005.
            </p>
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#EDB23A] mr-2 lg:mr-3" />
                <a href="tel:928-830-3575" className="text-white hover:text-[#EDB23A] transition-colors font-semibold text-sm lg:text-base">
                  928-830-3575
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-[#EDB23A] mr-2 lg:mr-3" />
                <span className="text-[#EDB23A] font-semibold text-sm lg:text-base">Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm lg:text-lg mb-3 lg:mb-6 text-[#EDB23A]">Our Services</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><Link href="/emergency-plumbing" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Emergency Plumbing</Link></li>
              <li><Link href="/water-heater-services" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Water Heater Services</Link></li>
              <li><Link href="/drain-cleaning" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Drain Cleaning</Link></li>
              <li><Link href="/pipe-repair-repiping" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Pipe Repair</Link></li>
              <li><Link href="/leak-detection-repair" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Leak Detection</Link></li>
              <li><Link href="/hydro-jetting" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Hydro Jetting</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-sm lg:text-lg mb-3 lg:mb-6 text-[#EDB23A]">Service Areas</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li className="text-gray-200 text-xs lg:text-base">Prescott Valley, AZ</li>
              <li><Link href="/prescott" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Prescott, AZ</Link></li>
              <li><Link href="/chino-valley" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Chino Valley, AZ</Link></li>
              <li><Link href="/dewey-humboldt" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base">Dewey-Humboldt, AZ</Link></li>
              <li className="text-gray-200 text-xs lg:text-base">Miller Valley, AZ</li>
              <li><Link href="/areas-we-serve" className="text-[#EDB23A] hover:text-white transition-colors text-xs lg:text-base">View All Areas</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
            <h4 className="font-bold text-sm lg:text-lg mb-3 lg:mb-6 text-[#EDB23A] text-center lg:text-left">Contact & Follow</h4>
            <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
              <div className="flex items-start justify-center lg:justify-start">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#EDB23A] mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-200 text-xs lg:text-base">
                  <p>3501 N Dale Dr</p>
                  <p>Prescott Valley, AZ 86314</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#EDB23A] mr-2 lg:mr-3" />
                <a href="mailto:info@miraclemanplumbing.net" className="text-gray-200 hover:text-[#EDB23A] transition-colors text-xs lg:text-base break-all">
                  info@miraclemanplumbing.net
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-left">
              <p className="text-white font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Follow Us</p>
              <div className="flex space-x-3 lg:space-x-4 justify-center lg:justify-start">
                <a href="https://facebook.com/miraclemanplumbing" className="w-8 h-8 lg:w-10 lg:h-10 bg-[#EDB23A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B2545] transition-colors">
                  <Facebook className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
                <a href="https://instagram.com/miraclemanplumbing" className="w-8 h-8 lg:w-10 lg:h-10 bg-[#EDB23A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B2545] transition-colors">
                  <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#EDB23A]/30 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col items-center space-y-2 lg:flex-row lg:justify-between lg:space-y-0">
            <div className="text-gray-200 text-xs lg:text-sm text-center">
              <p>&copy; 2024 Miracle Man Plumbing. All rights reserved.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 text-xs lg:text-sm text-gray-200 text-center">
              <span>Licensed • Bonded • Insured</span>
              <span>ROC#&apos;S 206195 & 232054</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}