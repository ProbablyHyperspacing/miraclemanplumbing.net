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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d588d] mb-4">
            About Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-[#28b8e9] border-[#28b8e9] bg-[#28b8e9]/10 px-3 py-1 text-xs font-semibold">
                  EST. 2005
                </Badge>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                <span className="font-semibold text-[#1d588d]">Miracle Man Plumbing Inc.</span>, proudly owned and operated by Caleb, has been delivering trusted residential and commercial plumbing services in Prescott Valley, Arizona since 2005.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                As a licensed and certified Master Plumber, Caleb leads with experience, integrity, and a commitment to quality workmanship. From drain cleaning and hydro jetting to water heater repair and installation, we handle it all—day or night.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Locally owned and available 24/7, we offer honest, fair pricing and dependable service you can count on.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/MMPteam.jpg.webp"
                alt="Miracle Man Plumbing Team"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl object-cover h-[400px] w-auto"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#28b8e9] rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#1d588d] rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Highlights Grid - Below content */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-[#28b8e9] rounded-full p-3 flex-shrink-0">
                  <highlight.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm leading-tight">
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