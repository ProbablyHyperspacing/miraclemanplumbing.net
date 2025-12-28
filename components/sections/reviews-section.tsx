'use client'

import { useState } from 'react'
import { Star, X, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const reviews = [
  {
    name: "Anthony Veneziano",
    rating: 5,
    timeAgo: "2 days ago",
    badge: "Same Day Service",
    isNew: true,
    review: "Michael and Caleb lived up to the name of the business, they worked a miracle for us and fully replaced our water heater on a same day call! They were excellent at communicating with us the issue at hand, all the while being fast and efficient. Would highly recommend them to anyone 5 ⭐️'s"
  },
  {
    name: "Brittany Adams",
    rating: 5,
    timeAgo: "a month ago",
    review: "Miracle Man came to install my kitchen faucet and a garbage disposal. The young man did a fantastic job! Very nice and friendly. I would use them again next time I need plumbing work! 10/10"
  },
  {
    name: "Ron Walker",
    rating: 5,
    timeAgo: "a month ago",
    badge: "Emergency Response",
    review: "Caleb showed up to help on a very challenging Saturday afternoon, even though I didn't have an appointment. He came up with a positive attitude and compassion for a very stressful situation. A pipe in the wall had failed and the house was flooded. He immediately set about fixing the issue and suggested a company that could assist with drying the house out. Caleb's work was top notch and fast. I would highly recommend Caleb with Miracle Man Plumbing for your plumbing needs."
  },
  {
    name: "Alexis Rounds",
    rating: 5,
    timeAgo: "2 weeks ago",
    review: "Hands down the best plumbing experience we've ever had. Neil replaced all three of our toilets quickly and with great attention to detail. Extremely knowledgeable, thorough, and clearly committed to quality—no shortcuts taken. We'll definitely be using Miracle Man Plumbing again."
  },
  {
    name: "RJ Johnson",
    rating: 5,
    timeAgo: "3 months ago",
    badge: "Great Value",
    review: "After getting a couple of quotes to have my water heater replaced, I decided to go with Miracle Man Plumbing.. not only did Caleb explain exactly what needed to be replaced? He told me exactly how long it would take. They were not only on time but they were early to do the job. He called me 10 minutes before arriving, which I appreciated. The best of all is that for the same thing that the other companies we're Charging me for miracle man charge me half the price. I will Recommend his business anyway I can."
  },
  {
    name: "Edmund Antone",
    rating: 5,
    timeAgo: "a month ago",
    review: "I previously used Miracle Man Plumbing to replace my water heater and they did an efficient and quality job. Since I had such a great experience with them previously, I contacted them again to replace a toilet in my master bathroom. Once again they did a great job and went above and beyond to check a few other items in my home which included my water shutoff valves to all my faucets and toilets. Caleb, who is very knowledgeable, pointed out that the push-pull existing shutoff valves are known to fail over time and since they are about 20 years old he highly recommended they be replaced soon. He also tested my incoming water pressure and found it to be 78 psi which is near the maximum recommended limit of 80psi. as such, he also recommended changing the water pressure regulator (PRV) soon as the high pressure can prematurely cause issues with appliances and faucets that use water due to the high pressure. He gave me estimates for the recommended replacements which were very reasonable. I chose to move ahead with both recommendations and am very satisfied with the results. He installed quality materials and labor at a reasonable cost. I now have peace of mind that I won't have a costly disaster to come home to in the future because Caleb cares about his clients. I always look for contractors I can trust and I won't hesitate to use Miracle Man Plumbing again if required. I highly recommend them if you need a good plumber."
  },
  {
    name: "Calli Murray",
    rating: 5,
    timeAgo: "a month ago",
    review: "Caleb and Neil did an excellent job fixing our toilet! They arrived promptly, were polite and respectful, and even put on shoe covers before entering the house. They quickly diagnosed the problem, repaired it efficiently, and left everything spotless. Highly recommend them!"
  }
]

export function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null)

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <>
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#0B2545] mb-2 lg:mb-4 nav-font">
              What Our Customers Say
            </h2>
            <p className="text-sm lg:text-xl text-gray-600">
              Real reviews from satisfied customers in Prescott Valley
            </p>
          </div>

          <Carousel
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%] md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="h-[300px] lg:h-[350px] flex flex-col shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white border-none"
                    onClick={() => setSelectedReview(index)}
                  >
                    <CardContent className="p-4 lg:p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3 lg:mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-semibold text-[#0B2545] text-sm lg:text-base">{review.name}</h4>
                            {review.badge && (
                              <span className="bg-[#EDB23A] text-white text-[10px] lg:text-xs px-2 py-0.5 lg:py-1 rounded-full">
                                {review.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs lg:text-sm text-gray-500 mb-2">
                            {review.timeAgo}
                          </p>

                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mb-3 lg:mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
                          {truncateText(review.review, 150)}
                        </p>
                        {review.review.length > 150 && (
                          <button className="text-[#EDB23A] text-xs lg:text-sm font-medium mt-2 hover:underline">
                            Read more
                          </button>
                        )}
                      </div>

                      {/* Google Logo */}
                      <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] lg:text-xs font-bold">G</span>
                          </div>
                          <span className="text-[10px] lg:text-xs text-gray-500">Google Review</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex bg-white border-gray-200 text-[#0B2545] hover:bg-gray-50" />
            <CarouselNext className="hidden lg:flex bg-white border-gray-200 text-[#0B2545] hover:bg-gray-50" />
          </Carousel>

          {/* Leave a Review Button */}
          <div className="text-center mt-8 lg:mt-12">
            <Button
              asChild
              className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-semibold"
            >
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJsRrYQOYjLYcRNYV65Zrt1gs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Plus className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Leave a Review
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedReview !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-semibold text-[#0B2545]">
                      {reviews[selectedReview].name}
                    </h4>
                    {reviews[selectedReview].badge && (
                      <span className="bg-[#EDB23A] text-white text-sm px-3 py-1 rounded-full">
                        {reviews[selectedReview].badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 mb-3">
                    {reviews[selectedReview].timeAgo}
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(reviews[selectedReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Full Review Text */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {reviews[selectedReview].review}
                </p>
              </div>
              
              {/* Google Logo */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                  <span className="text-sm text-gray-500">Google Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}