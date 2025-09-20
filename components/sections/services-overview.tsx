import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, HomeIcon, Building } from 'lucide-react'

const services = [
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions for your home and business. From simple repairs to complex installations, we handle it all with professional expertise.",
    href: "/services",
    icon: Wrench
  },
  {
    title: "Residential Plumbing", 
    description: "Specialized residential plumbing services including bathroom and kitchen upgrades, water heater installation, and emergency repairs.",
    href: "/services/residential",
    icon: HomeIcon
  },
  {
    title: "Commercial Plumbing",
    description: "Professional commercial plumbing services for businesses, restaurants, and commercial properties with 24/7 emergency support.",
    href: "/services/commercial",
    icon: Building
  }
]

export function ServicesOverview() {
  return (
    <section className="relative -mt-20 pt-10 pb-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-6 left-6 bg-[#28b8e9] rounded-full p-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#1d588d] text-left pt-16">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-gray-600 text-left leading-relaxed flex-1">
                  {service.description}
                </CardDescription>
                <div className="flex justify-start pt-2">
                  <Button 
                    asChild
                    className="bg-[#28b8e9] hover:bg-[#1fa3d1] text-white"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}