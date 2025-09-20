import { NextResponse } from 'next/server'

// This will be expanded to fetch real social media data
// For now, it returns mock data with ISR caching

const mockInstagramPosts = [
  {
    id: '1',
    caption: 'Just completed another successful water heater installation in Prescott Valley! 🔧💧 Our team takes pride in delivering quality workmanship. #PlumbingLife #PrescottValley',
    image: '/images/MMPwaterheater.jpg.webp',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    likes: 24,
    comments: 3
  },
  {
    id: '2',
    caption: 'Emergency drain cleaning call - we got there fast and solved the problem! Available 24/7 for your plumbing emergencies. 🚨 #EmergencyPlumbing #DrainCleaning',
    image: '/images/MMPdraincleaning.jpg.webp',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    likes: 18,
    comments: 2
  },
  {
    id: '3',
    caption: 'Beautiful new kitchen faucet installation completed today! ✨ Transform your kitchen with modern fixtures. Call us for your next project! #KitchenUpgrade',
    image: '/images/MMPsink.jpg.webp',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    likes: 31,
    comments: 5
  }
]

const mockFacebookPosts = [
  {
    id: '1',
    text: "We're grateful for another 5-star review from a satisfied customer! Thank you for trusting Miracle Man Plumbing with your water heater replacement. Quality work and customer satisfaction are our top priorities. 🌟",
    image: '/images/MMPteam.jpg.webp',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    likes: 42,
    comments: 8,
    shares: 3
  },
  {
    id: '2',
    text: "Did you know that regular maintenance can extend your water heater's life by 3-5 years? Our preventive maintenance services can save you money in the long run. Schedule your annual inspection today! 💡",
    image: '/images/MMPworking.jpg.webp',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    likes: 28,
    comments: 4,
    shares: 12
  },
  {
    id: '3',
    text: "Winter weather can be tough on your pipes! Here are some tips to prevent frozen pipes: Keep faucets dripping, open cabinet doors, and maintain consistent heating. Need help? We're here 24/7! ❄️🔧",
    image: '/images/MMPleakrepair.jpg.webp',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    likes: 35,
    comments: 6,
    shares: 18
  }
]

// Future: Add real API integration here
async function fetchInstagramPosts() {
  // TODO: Implement Instagram Basic Display API
  // const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,like_count,comments_count&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`)
  return mockInstagramPosts
}

async function fetchFacebookPosts() {
  // TODO: Implement Facebook Graph API
  // const response = await fetch(`https://graph.facebook.com/v18.0/{page-id}/posts?fields=message,full_picture,created_time,likes.summary(true),comments.summary(true),shares&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`)
  return mockFacebookPosts
}

export async function GET() {
  try {
    const [instagramPosts, facebookPosts] = await Promise.all([
      fetchInstagramPosts(),
      fetchFacebookPosts()
    ])

    const data = {
      instagram: instagramPosts,
      facebook: facebookPosts,
      lastUpdated: new Date().toISOString()
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600', // 30 min cache, 1 hour stale-while-revalidate
      },
    })
  } catch (error) {
    console.error('Error fetching social posts:', error)
    
    // Return fallback data on error
    return NextResponse.json({
      instagram: mockInstagramPosts,
      facebook: mockFacebookPosts,
      lastUpdated: new Date().toISOString(),
      error: 'Using fallback data'
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Shorter cache on error
      },
    })
  }
}