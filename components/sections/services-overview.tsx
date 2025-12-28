import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, HomeIcon, Building } from 'lucide-react'

const services = [
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions for your home and business. From simple repairs to complex installations, we handle it all with professional expertise.",
    href: "/plumbing-services",
    icon: Wrench
  },
  {
    title: "Residential Plumbing",
    description: "Specialized residential plumbing services including bathroom and kitchen upgrades, water heater installation, and emergency repairs.",
    href: "/residential-plumbing",
    icon: HomeIcon
  },
  {
    title: "Commercial Plumbing",
    description: "Professional commercial plumbing services for businesses, restaurants, and commercial properties with 24/7 emergency support.",
    href: "/commercial-plumbing",
    icon: Building
  }
]

export function ServicesOverview() {
  return (
    <section className="relative py-8 lg:pt-10 lg:pb-20 lg:-mt-20 bg-white lg:bg-transparent">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Mobile Title */}
        <h2 className="lg:hidden text-2xl font-bold text-[#0B2545] text-center mb-6">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href} className="block">
              <Card
                className="bg-[#0B2545] shadow-lg lg:shadow-xl hover:shadow-2xl transition-all duration-300 lg:transform lg:hover:-translate-y-2 flex flex-col h-full border-2 border-[#95C4E2] cursor-pointer"
              >
                <CardHeader className="pb-2 lg:pb-4 relative">
                  <div className="absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#EDB23A] rounded-full p-2 lg:p-3">
                    <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#0B2545]" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl font-bold text-white text-left pt-12 lg:pt-16">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 lg:space-y-4 flex-1 flex flex-col pt-0">
                  <CardDescription className="text-gray-300 text-left leading-relaxed flex-1 text-sm lg:text-base">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-start pt-2">
                    <span className="bg-[#EDB23A] text-[#0B2545] font-semibold px-4 py-2 rounded-md text-sm">
                      Learn More
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}