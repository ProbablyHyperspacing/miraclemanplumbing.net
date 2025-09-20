'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Instagram, Facebook } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

// Mock data structure - will be replaced with real API data
const mockPosts = {
  instagram: [
    {
      id: '1',
      caption: 'Just completed another successful water heater installation in Prescott Valley! 🔧💧 Our team takes pride in delivering quality workmanship. #PlumbingLife #PrescottValley',
      image: '/images/MMPwaterheater.jpg.webp',
      timestamp: '2024-01-15T10:30:00Z',
      likes: 24,
      comments: 3
    },
    {
      id: '2',
      caption: 'Emergency drain cleaning call - we got there fast and solved the problem! Available 24/7 for your plumbing emergencies. 🚨 #EmergencyPlumbing #DrainCleaning',
      image: '/images/MMPdraincleaning.jpg.webp',
      timestamp: '2024-01-12T14:20:00Z',
      likes: 18,
      comments: 2
    },
    {
      id: '3',
      caption: 'Beautiful new kitchen faucet installation completed today! ✨ Transform your kitchen with modern fixtures. Call us for your next project! #KitchenUpgrade',
      image: '/images/MMPsink.jpg.webp',
      timestamp: '2024-01-10T09:15:00Z',
      likes: 31,
      comments: 5
    }
  ],
  facebook: [
    {
      id: '1',
      text: "We're grateful for another 5-star review from a satisfied customer! Thank you for trusting Miracle Man Plumbing with your water heater replacement. Quality work and customer satisfaction are our top priorities. 🌟",
      image: '/images/MMPteam.jpg.webp',
      timestamp: '2024-01-14T16:45:00Z',
      likes: 42,
      comments: 8,
      shares: 3
    },
    {
      id: '2',
      text: "Did you know that regular maintenance can extend your water heater's life by 3-5 years? Our preventive maintenance services can save you money in the long run. Schedule your annual inspection today! 💡",
      image: '/images/MMPworking.jpg.webp',
      timestamp: '2024-01-11T11:30:00Z',
      likes: 28,
      comments: 4,
      shares: 12
    },
    {
      id: '3',
      text: "Winter weather can be tough on your pipes! Here are some tips to prevent frozen pipes: Keep faucets dripping, open cabinet doors, and maintain consistent heating. Need help? We're here 24/7! ❄️🔧",
      image: '/images/MMPleakrepair.jpg.webp',
      timestamp: '2024-01-08T13:20:00Z',
      likes: 35,
      comments: 6,
      shares: 18
    }
  ]
}

interface SocialPost {
  id: string
  caption?: string
  text?: string
  image: string
  timestamp: string
  likes: number
  comments: number
  shares?: number
}

export function SocialMediaSection() {
  const [posts, setPosts] = useState(mockPosts)
  const [loading, setLoading] = useState(false)

  // Future: This will fetch real data from API routes
  useEffect(() => {
    // Placeholder for future API integration
    // fetchSocialPosts()
  }, [])

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInMs = now.getTime() - date.getTime()
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    
    if (diffInHours < 1) {
      const diffInMins = Math.floor(diffInMs / (1000 * 60))
      return `${diffInMins}m ago`
    }
    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    }
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 30) {
      return `${diffInDays}d ago`
    }
    return date.toLocaleDateString()
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d588d] mb-4">
            Follow Our Work
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest projects and plumbing tips
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Instagram Feed */}
          <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
            {/* Instagram Header */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">@miraclemanplumbing</h3>
                    <p className="text-white/80 text-sm">Follow our latest work</p>
                  </div>
                </div>
                <Button 
                  asChild
                  size="sm"
                  className="bg-white text-pink-600 hover:bg-gray-100"
                >
                  <Link 
                    href="https://instagram.com/miraclemanplumbing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow
                  </Link>
                </Button>
              </div>
            </div>

            {/* Instagram Grid */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-1">
                {posts.instagram.map((post) => (
                  <div key={post.id} className="relative aspect-square group cursor-pointer">
                    <Image
                      src={post.image}
                      alt="Instagram post"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-4 text-white text-sm">
                        <span className="flex items-center gap-1">
                          ❤️ {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facebook Feed */}
          <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
            {/* Facebook Header */}
            <div className="bg-blue-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Miracle Man Plumbing Inc.</h3>
                    <p className="text-white/80 text-sm">Stay updated with our latest news</p>
                  </div>
                </div>
                <Button 
                  asChild
                  size="sm"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link 
                    href="https://facebook.com/miraclemanplumbinginc" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Like
                  </Link>
                </Button>
              </div>
            </div>

            {/* Facebook Photo Grid */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {posts.facebook.map((post) => (
                  <div key={post.id} className="relative aspect-[4/3] group cursor-pointer rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Facebook post"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-3 text-white text-sm">
                        <span className="flex items-center gap-1">
                          👍 {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {post.comments}
                        </span>
                        {post.shares && (
                          <span className="flex items-center gap-1">
                            📤 {post.shares}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View More Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
          >
            <Link 
              href="https://instagram.com/miraclemanplumbing" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              View Instagram
            </Link>
          </Button>
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Link 
              href="https://facebook.com/miraclemanplumbinginc" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 mr-2" />
              View Facebook
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}