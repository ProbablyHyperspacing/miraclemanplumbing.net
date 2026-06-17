import { Metadata } from 'next'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | Miracle Man Plumbing - Prescott Valley, AZ',
  description: 'Contact Miracle Man Plumbing for professional plumbing services in Prescott Valley, AZ. 24/7 emergency service available.',
}

export default function ContactPage() {
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
              CONTACT US
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Professional Plumbing Services in Prescott Valley, AZ
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              Schedule Your Service
            </h2>
            <p className="text-xl text-gray-600">
              Book an appointment online, fast and easy.
            </p>
          </div>

          {/* ServiceTitan Scheduler Embed */}
          <div className="max-w-3xl mx-auto" id="servicetitan-scheduler">
            <div className="se-booking-show" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - General Inquiry Form */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Have a question or need more info? Reach out and we&apos;ll get back to you.
                </p>
              </div>

              <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
                <ContactForm />
              </div>
            </div>

            {/* Right side - Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a href="tel:+19288303575" className="flex items-center hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors">
                    <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B2545]">Phone</h4>
                      <p className="text-[#EDB23A] font-semibold">(928) 830-3575</p>
                      <p className="text-sm text-gray-500">24/7 Emergency Service</p>
                    </div>
                  </a>

                  <a href="#contact-form" className="flex items-center hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors">
                    <div className="bg-[#0B2545] rounded-lg p-3 mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B2545]">Email</h4>
                      <p className="text-[#EDB23A] font-semibold">Send us a message</p>
                    </div>
                  </a>

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
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B2545]">Hours</h4>
                      <p className="text-gray-600">7 Days a Week: 8AM-6PM</p>
                      <p className="text-gray-600">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px]">
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
