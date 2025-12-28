import { Star, Plus, Users, ThumbsUp, Award } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ReviewsGrid } from './reviews-grid'

export const metadata: Metadata = {
  title: 'Customer Reviews | Miracle Man Plumbing - Prescott Valley, AZ',
  description: 'Read reviews from satisfied customers in Prescott Valley, Arizona. See why homeowners and businesses trust Miracle Man Plumbing for quality service.',
}

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
  },
  {
    name: "Crystal Tumlinson",
    rating: 5,
    timeAgo: "4 days ago",
    badge: "Great Price",
    isNew: true,
    review: "These guys came on time and friendly they understood what was wrong and they did a fast job and no leaks I am asking them to come back to fix my kitchen faucet.👍"
  },
  {
    name: "Joni Baker",
    rating: 5,
    timeAgo: "5 days ago",
    isNew: true,
    review: "These guys are awesome! We had a mini flood from a floor drain not draining properly and they were here to save the day very quickly! Thanks again!"
  },
  {
    name: "Anthony Nava",
    rating: 5,
    timeAgo: "4 weeks ago",
    review: "Neil is great! took care of the problem quickly and efficiently."
  },
  {
    name: "Joseph Nation",
    rating: 5,
    timeAgo: "a month ago",
    review: "Great service provided! Felt kinda embarrassed asking to fix a hard to turn hot water knob but they didn't mind at all, they went above and beyond to get the materials form the store and fixed it all the while being flexible with there work hours! Couldn't have asked for a better team!"
  },
  {
    name: "m m",
    rating: 5,
    timeAgo: "a month ago",
    badge: "Same Day Service",
    review: "Called Caleb due to house plumbing was backing up. He came out the same day ! Excellent Customer Service and responsiveness Highly recommended Miracle Man Plumbing"
  }
]

const stats = [
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Based on 300+ reviews"
  },
  {
    icon: Users,
    value: "999+",
    label: "Happy Customers",
    description: "Served in Prescott Valley"
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Would recommend us"
  },
  {
    icon: Award,
    value: "20+",
    label: "Years Experience",
    description: "Trusted since 2005"
  }
]

export default function ReviewsPage() {
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
              CUSTOMER REVIEWS
            </h1>
            <p className="text-xl mt-4 text-white/90">
              See what our satisfied customers in Prescott Valley are saying
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
            </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Trusted by the Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality service has earned us the trust of hundreds of customers throughout Prescott Valley and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="bg-[#EDB23A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#0B2545] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Had a great experience with Miracle Man Plumbing? We&apos;d love to hear about it! Your feedback helps us improve and helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJsRrYQOYjLYcRNYV65Zrt1gs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EDB23A] hover:bg-[#C08222] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Leave a Google Review
              </a>
              <Link
                href="/contact"
                className="border-2 border-[#0B2545] text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0B2545] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}