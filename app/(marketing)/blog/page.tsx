import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plumbing Blog | Miracle Man Plumbing - Expert Tips & Advice',
  description: 'Read expert plumbing tips, maintenance advice, and industry insights from the professionals at Miracle Man Plumbing in Prescott Valley, AZ.',
}

// Placeholder blog posts - content to be added later
const blogPosts = [
  {
    id: 1,
    slug: 'hydro-jetting-benefits',
    title: 'Understanding the Benefits of Hydro Jetting for Pipe Cleaning',
    excerpt: 'Learn how hydro jetting provides powerful, eco-friendly pipe cleaning that prevents future problems.',
    date: '2025-06-27',
    author: 'Miracle Man Plumbing Team',
    readTime: '5 min read',
    category: 'Pipe Cleaning'
  },
  {
    id: 2,
    slug: 'water-heater-replacement',
    title: 'How to Tell When It\'s Time to Replace Your Water Heater',
    excerpt: 'Learn the key signs that indicate it\'s time to replace your water heater and avoid unexpected breakdowns.',
    date: '2025-05-12',
    author: 'Miracle Man Plumbing Team',
    readTime: '6 min read',
    category: 'Water Heater'
  },
  {
    id: 3,
    slug: 'regular-drain-cleaning',
    title: 'The Importance of Regular Drain Cleaning for Your Home',
    excerpt: 'Learn why regular drain cleaning is essential for preventing clogs, odors, and costly plumbing repairs.',
    date: '2025-04-30',
    author: 'Miracle Man Plumbing Team',
    readTime: '7 min read',
    category: 'Maintenance'
  }
]

export default function BlogPage() {
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
              PLUMBING BLOG
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Expert Tips, Advice & Industry Insights
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert plumbing advice, maintenance tips, and industry insights from our experienced team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Post Image */}
                <div className="h-48 relative overflow-hidden">
                  {post.slug === 'hydro-jetting-benefits' ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('/images/hydrojet.jpeg')"
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                          <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  ) : post.slug === 'water-heater-replacement' ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('/images/MMPwaterheater.jpg.webp')"
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                          <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  ) : post.slug === 'regular-drain-cleaning' ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('/images/draincleaning.png')"
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                          <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-[#0B2545] to-[#EDB23A] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                          <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('en-US')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2545] mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#EDB23A] font-semibold hover:text-[#0B2545] transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}