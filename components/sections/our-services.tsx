import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: "Drain Cleaning",
    description: "Our sophisticated drain cleaning solutions use modern technology to remove accumulation, grease, and invasive roots. We restore flow, stop obstructions, and safeguard your pipes from damage, providing clean, clear drainage with dependable, long-lasting outcomes.",
    image: "/images/MMPdraincleaning.jpg.webp",
    href: "/drain-cleaning"
  },
  {
    title: "Water Heater Repair & Installation",
    description: "Our tailored water heater solutions restore reliable hot water with energy-efficient operation. Our professional solutions enhance performance, dependability, and daily comfort, customized to your particular property and needs, whether replacing an old unit or fixing a fault.",
    image: "/images/MMPwaterheater.jpg.webp",
    href: "/water-heater-services"
  },
  {
    title: "Hydro Jetting",
    description: "Hydro jetting clears pipelines using high-pressure water jets that safely remove tenacious blockages, grease accumulation, and roots. With accuracy and ecologically friendly technology, our non-invasive, eco-friendly approach restores complete pipe performance, prolongs system life, and reduces future issues.",
    image: "/images/MMPhydrojetting.jpg.webp",
    href: "/hydro-jetting"
  },
  {
    title: "Toilet Repair & Replacement",
    description: "We provide dependable toilet repair and replacement services to handle clogs, leaks, or worn parts. Our products increase water efficiency, function, and comfort, improving the operation of your bathroom and lowering waste. Expert-level precision helps prevent future plumbing problems.",
    image: "/images/MMPtoilet.jpg.webp",
    href: "/toilet-repair-replacement"
  },
  {
    title: "Faucet & Fixture Repair",
    description: "Carefully carried out, our faucet and fixture repair services remove leaks, restore smooth performance, and enhance attractiveness. Whether in kitchens or bathrooms, we tackle inefficiencies, cut water waste, and ensure everything runs well and matches your design choices.",
    image: "/images/MMPsink.jpg.webp",
    href: "/faucet-fixture-repair"
  },
  {
    title: "Leak Detection & Repair",
    description: "Using modern technology, we find visible and concealed leaks with unrivaled accuracy. Our quick, minimally invasive repair technique avoids expensive damage, saves water, and restores the integrity of your plumbing system for dependable, trouble-free operation.",
    image: "/images/MMPleakrepair.jpg.webp",
    href: "/leak-detection-repair"
  },
  {
    title: "Garbage Disposal Repair & Replacement",
    description: "Our skilled team fixes or replaces garbage disposals to restore complete kitchen use. Whether your blades are stuck or your units are worn out, our staff provides smooth performance, safe operation, and convenience, guaranteeing your kitchen functions effectively.",
    image: "/images/MMPgarbagedisposal.jpg.webp",
    href: "/garbage-disposal-repair"
  },
  {
    title: "Sewer Line Inspection & Repair",
    description: "Our sewer line services start with high-definition video inspections to find damage or obstructions. Our concentrated repairs restore appropriate operation, stop future failures, and safeguard your home from expensive backups or health concerns connected to sewer system problems.",
    image: "/images/MMPsewerline.jpg.webp",
    href: "/sewer-line-inspection-repair"
  },
  {
    title: "Pipe Repair & Repiping",
    description: "We use strong materials and professional skills to perform exact pipe repairs and complete repiping tasks. Whether rebuilding old pipes or handling a burst, our work improves system reliability, lowers leaks, and maintains the best water pressure.",
    image: "/images/MMPpiperepair.jpg.webp",
    href: "/pipe-repair-repiping"
  },
  {
    title: "Water Filtration System Installation",
    description: "Our installation of cutting-edge water filtration systems enhances taste, clarity, and health while removing impurities. Our filtration systems are tailored to your needs and offer cleaner, safer water for consumption and use, helping with well-being, sustainability, and peace of mind.",
    image: "/images/MMPwaterfilter.jpg.webp",
    href: "/water-filtration-installation"
  },
  {
    title: "Water Softener Installation & Maintenance",
    description: "Our water softener solutions improve appliance performance, minimize hard water impacts, and extend the plumbing system's life. Our knowledgeable installation and maintenance guarantee that your system performs effectively, providing soft, clean water.",
    image: "/images/MMPwatersoftener.jpg.webp",
    href: "/water-softener-installation"
  },
  {
    title: "Emergency Plumbing Services",
    description: "Our emergency plumbing services swiftly restore control and performance and address pressing problems. From broken pipes to unexpected backups, our reliable workmanship, which you can rely on whenever needed, provides professional analysis and quick remedies.",
    image: "/images/MMPemergency.jpg.webp",
    href: "/emergency-plumbing"
  },
  {
    title: "Shower & Tub Plumbing Services",
    description: "Our skilled plumbing services for showers and tubs include repairs, replacements, and new installations. Whether you have leaks, clogs, or water pressure concerns, we guarantee adequate drainage and performance for your space and bathing comfort needs.",
    image: "/images/MMPshower.jpg.webp",
    href: "/shower-tub-plumbing"
  },
  {
    title: "Main Water Line Services",
    description: "Our skilled primary water line services include inspections, repairs, and replacements. We guarantee safe, dependable water distribution using high-quality materials and skilled techniques, safeguarding your property's infrastructure from harm and guaranteeing compliance with local plumbing rules.",
    image: "/images/MMPmainwaterline.jpeg.webp",
    href: "/main-water-line-services"
  }
]

export function OurServices() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-xl lg:text-4xl font-bold text-[#0B2545] mb-2 lg:mb-4 px-2 nav-font">
            Miracle Man Plumbing Specializes in Drain Cleaning, Hydro Jetting & Water Heaters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={service.title} className="overflow-hidden shadow-lg lg:shadow-xl h-full flex flex-col bg-white border-none">
              {/* Image */}
              <div className="relative h-[180px] lg:h-[280px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-4 lg:p-6 flex-1">
                <div>
                  <CardHeader className="p-0 mb-2 lg:mb-4">
                    <CardTitle className="text-lg lg:text-2xl font-bold text-[#0B2545] mb-2 lg:mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 lg:space-y-4">
                    <CardDescription className="text-gray-700 text-xs lg:text-sm leading-relaxed line-clamp-3 lg:line-clamp-none">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>
                <div className="pt-3 lg:pt-4">
                  <Button
                    asChild
                    size="default"
                    className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg font-semibold w-full lg:w-auto"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}