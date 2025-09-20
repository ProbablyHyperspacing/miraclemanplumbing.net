'use client'

import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel'

const projects = [
  {
    id: 1,
    title: "Kitchen Faucet Installation",
    description: "Complete kitchen faucet replacement with modern fixtures",
    image: "/images/MMPsink.jpg.webp",
    category: "Faucet Installation"
  },
  {
    id: 2,
    title: "Water Heater Replacement",
    description: "High-efficiency water heater installation for residential home",
    image: "/images/MMPwaterheater.jpg.webp", 
    category: "Water Heater"
  },
  {
    id: 3,
    title: "Bathroom Toilet Repair",
    description: "Professional toilet repair and maintenance service",
    image: "/images/MMPtoilet.jpg.webp",
    category: "Toilet Repair"
  },
  {
    id: 4,
    title: "Pipe Leak Detection",
    description: "Advanced leak detection and repair using modern equipment",
    image: "/images/MMPleakrepair.jpg.webp",
    category: "Leak Detection"
  },
  {
    id: 5,
    title: "Drain Cleaning Service",
    description: "Professional drain cleaning with hydro jetting technology",
    image: "/images/MMPdraincleaning.jpg.webp",
    category: "Drain Cleaning"
  },
  {
    id: 6,
    title: "Garbage Disposal Installation",
    description: "New garbage disposal unit installation with warranty",
    image: "/images/MMPgarbagedisposal.jpg.webp",
    category: "Disposal Installation"
  }
]

export function RecentProjectsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    // Auto-rotate every 4 seconds
    const autoPlay = setInterval(() => {
      api.scrollNext()
    }, 4000)

    // Update current slide index
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      clearInterval(autoPlay)
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d588d] mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600">
            Take a look at our latest plumbing work in Prescott Valley
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
                <Card className="h-[400px] flex flex-col shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative h-[250px] overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  <CardContent className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-[#1d588d] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white border-gray-200 text-[#1d588d] hover:bg-gray-50" />
          <CarouselNext className="bg-white border-gray-200 text-[#1d588d] hover:bg-gray-50" />
        </Carousel>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-[#28b8e9]' : 'bg-gray-300'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-[#28b8e9] hover:bg-[#1fa3d1] text-white px-8 py-3 text-lg font-semibold"
          >
            <Link href="/gallery">
              View More Projects
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}