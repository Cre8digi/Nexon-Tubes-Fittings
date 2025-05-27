import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, User } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Complete Guide to Stainless Steel Grades and Applications",
      excerpt: "Understanding different grades of stainless steel and their specific applications in construction and manufacturing industries.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      author: "Technical Team",
      category: "Technical Guide"
    },
    {
      title: "Maintenance Tips for Steel Railings and Fittings",
      excerpt: "Essential maintenance practices to ensure longevity and performance of your steel railings and fittings.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      author: "Maintenance Expert",
      category: "Maintenance"
    },
    {
      title: "Latest Trends in Architectural Steel Design",
      excerpt: "Exploring the latest trends and innovations in architectural steel design for modern construction projects.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      author: "Design Team",
      category: "Design Trends"
    }
  ]

  return (
    <section id="blog" className="py-10 bg-slate-800">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-orange-100 text-orange-600 mb-2">Latest Blog</Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Industry <span className="text-orange-500">Insights</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-300 max-w-xl mx-auto">
            Stay updated with the latest trends and technical insights from our steel experts.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-orange-500 text-white text-xs">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Button variant="ghost" className="p-0 h-auto text-orange-500 hover:text-orange-600 group text-sm">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden mb-10">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <Card className="overflow-hidden border-0 shadow-md mx-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-orange-500 text-white text-xs">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{post.title}</h3>
                    <p className="text-xs text-slate-600 mb-2 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-orange-500 text-xs">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
