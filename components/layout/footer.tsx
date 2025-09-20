import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1d588d] text-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/Miracle-Man-Plumbing-Prescott-Logo-Border.png"
                alt="Miracle Man Plumbing Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Professional plumbing services you can trust. Serving Prescott Valley and surrounding areas since 2005.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#28b8e9] mr-3" />
                <a href="tel:928-830-3575" className="text-white hover:text-[#28b8e9] transition-colors font-semibold">
                  928-830-3575
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-[#28b8e9] mr-3" />
                <span className="text-[#28b8e9] font-semibold">Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Emergency Plumbing</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Water Heater Services</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Drain Cleaning</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Pipe Repair & Installation</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Leak Detection</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-[#28b8e9] transition-colors">Hydro Jetting</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Service Areas</h4>
            <ul className="space-y-3">
              <li className="text-gray-200">Prescott Valley, AZ</li>
              <li className="text-gray-200">Prescott, AZ</li>
              <li className="text-gray-200">Chino Valley, AZ</li>
              <li className="text-gray-200">Dewey-Humboldt, AZ</li>
              <li className="text-gray-200">Miller Valley, AZ</li>
              <li><Link href="/service-areas" className="text-[#28b8e9] hover:text-white transition-colors">View All Areas</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact & Follow</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#28b8e9] mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-200">
                  <p>3501 N Dale Dr</p>
                  <p>Prescott Valley, AZ 86314</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#28b8e9] mr-3" />
                <a href="mailto:info@miraclemanplumbing.net" className="text-gray-200 hover:text-[#28b8e9] transition-colors">
                  info@miraclemanplumbing.net
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white font-semibold mb-3">Follow Us</p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/miraclemanplumbing" className="w-10 h-10 bg-[#28b8e9] rounded-full flex items-center justify-center hover:bg-white hover:text-[#1d588d] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/miraclemanplumbing" className="w-10 h-10 bg-[#28b8e9] rounded-full flex items-center justify-center hover:bg-white hover:text-[#1d588d] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#28b8e9]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-200 text-sm">
              <p>&copy; 2024 Miracle Man Plumbing. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <span>Licensed • Bonded • Insured</span>
              <span className="hidden md:inline">•</span>
              <span>ROC#&apos;S 206195 & 232054</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}