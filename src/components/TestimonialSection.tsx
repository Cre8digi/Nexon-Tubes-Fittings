
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Project Manager",
      company: "Metro Construction Ltd.",
      image: "https://m.economictimes.com/thumb/msid-112575569,width-1200,height-900,resizemode-4,imgsize-40492/rejig-rajesh-kumar-singh-is-new-def-secy.jpg",
      content: "Nexon Tube & Fitting has been our trusted partner for over 5 years. Their quality is unmatched and delivery is always on time. Highly recommended for any construction project.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Interior Designer",
      company: "Elite Interiors",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG-pCY3Eh2dqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689531188800?e=2147483647&v=beta&t=fWRNZtacCs2BigqRK_fX9ty1HWYHeGQIyMDgU-vabw0",
      content: "The steel products from Nexon are perfect for our high-end interior projects. The finish quality and precision engineering make them stand out from competitors.",
      rating: 4
    },
    {
      name: "Amit Patel",
      position: "Architect",
      company: "Modern Designs Studio",
      image: "https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=",
      content: "Working with Nexon has been a game-changer for our architectural projects. Their custom solutions and technical expertise have helped us achieve remarkable results.",
      rating: 5
    },
    {
      name: "Sunita Reddy",
      position: "Procurement Head",
      company: "Infrastructure Corp",
      image: "https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg",
      content: "Nexon's commitment to quality and their responsive customer service makes them our preferred supplier for all steel requirements. Excellent value for money.",
      rating: 4
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 text-slate-300">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced the quality and reliability of our steel products and services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-slate-600">{testimonials[currentIndex].position}</div>
                    <div className="text-orange-500 font-medium">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-orange-500" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
