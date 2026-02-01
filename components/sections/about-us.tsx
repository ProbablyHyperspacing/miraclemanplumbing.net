import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Award, Users } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    text: "Licensed & Certified Master Plumber"
  },
  {
    icon: Clock,
    text: "Available 24/7 Emergency Service"
  },
  {
    icon: CheckCircle,
    text: "Serving Prescott Valley Since 2005"
  },
  {
    icon: Users,
    text: "Locally Owned & Operated"
  }
]

export function AboutUs() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0B2545] mb-2 lg:mb-4 nav-font">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 lg:space-y-8 order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
                <Badge variant="outline" className="text-[#EDB23A] border-[#EDB23A] bg-[#EDB23A]/10 px-3 py-1 text-xs font-semibold">
                  EST. 2005
                </Badge>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-lg mb-4 lg:mb-6 text-center lg:text-left">
                <span className="font-semibold text-[#0B2545]">Miracle Man Plumbing Inc.</span>, proudly owned and operated by Caleb, has been delivering trusted residential and commercial plumbing services in Prescott Valley, Arizona since 2005.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-lg mb-4 lg:mb-6 text-center lg:text-left">
                As a licensed and certified Master Plumber, Caleb leads with experience, integrity, and a commitment to quality workmanship. From drain cleaning and hydro jetting to water heater repair and installation, we handle it all—day or night.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm lg:text-lg text-center lg:text-left">
                Locally owned and available 24/7, we offer honest, fair pricing and dependable service you can count on.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/MMPteam.JPG"
                alt="Miracle Man Plumbing Team"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl object-cover h-[220px] lg:h-[400px] w-auto"
                priority
              />
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 bg-[#EDB23A] rounded-full opacity-20 -z-10"></div>
              <div className="hidden lg:block absolute -top-6 -right-6 w-16 h-16 bg-[#0B2545] rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Highlights Grid - Below content */}
        <div className="mt-8 lg:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 p-3 lg:p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center lg:text-left">
                <div className="bg-[#EDB23A] rounded-full p-2 lg:p-3 flex-shrink-0">
                  <highlight.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-xs lg:text-sm leading-tight">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}