import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Users, MapPin, Award, Clock, Shield } from "lucide-react"

export default function WhyChooseNexon() {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick turnaround times with nationwide shipping capabilities",
      stat: "48",
      suffix: " Hours",
      isCounter: true,
    },
    {
      icon: Users,
      title: "1340+ Happy Clients",
      description: "Trusted by thousands of satisfied customers across India",
      stat: "1340",
      suffix: "+",
      isCounter: true,
    },
    {
      icon: MapPin,
      title: "Nationwide Supply",
      description: "Extensive distribution network covering all major cities",
      stat: "27",
      suffix: "+ Cities",
      isCounter: true,
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO certified manufacturing with stringent quality controls",
      stat: "ISO 9001:2019",
      isCounter: false,
    },
    {
      icon: Clock,
      title: "6+ Years Experience",
      description: "Decade of expertise in steel manufacturing and supply",
      stat: "Since 2019",
      isCounter: false,
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "100% quality guarantee on all our products and services",
      stat: "100%",
      isCounter: false,
    },
  ]

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".counter-value")

    counters.forEach((counter) => {
      const targetStr = counter.getAttribute("data-target")
      const suffix = counter.getAttribute("data-suffix") || ""

      if (!targetStr || isNaN(Number(targetStr))) return

      const target = parseInt(targetStr, 10)
      const duration = 2000
      const steps = Math.ceil(duration / 16)
      const increment = target / steps
      let current = 0

      const update = () => {
        current += increment
        if (current < target) {
          counter.textContent = `${Math.floor(current)}${suffix}`
          requestAnimationFrame(update)
        } else {
          counter.textContent = `${target}${suffix}`
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              update()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(counter)
    })
  }, [])

  return (
    <>
      <section className="py-20 bg-slate-900">
        <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-orange-500">Nexon Tube & Fitting</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We combine years of expertise with cutting-edge technology to deliver exceptional products and services that exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors duration-300 group reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div
                    className={`text-2xl font-bold text-orange-500 mb-2 ${
                      feature.isCounter ? "counter-value" : ""
                    }`}
                    data-target={feature.isCounter ? `${feature.stat}` : ""}
                    data-suffix={feature.isCounter ? feature.suffix || "" : ""}
                  >
                    {feature.isCounter ? "0" : feature.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
