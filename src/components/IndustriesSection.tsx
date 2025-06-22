
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Palette, HardHat, Landmark, Sofa, Plane } from "lucide-react"

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Residential and commercial property development projects",
      
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Custom steel elements for modern interior spaces",
      
    },
    {
      icon: HardHat,
      title: "Construction",
      description: "Structural steel components for construction industry",
     
    },
    {
      icon: Landmark,
      title: "Public Infrastructure",
      description: "Government and municipal infrastructure projects",
     
    },
    {
      icon: Sofa,
      title: "Furniture Manufacturing",
      description: "Steel components for furniture and fixture manufacturers",
      
    },
    {
      icon: Plane,
      title: "Transportation",
      description: "Metal industry aids transport with strong, durable materials.",
      
    },
  ]

  return (
    <section id="industries" className="py-20 bg-slate-800">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Industries We Serve</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Serving Diverse <span className="text-orange-500">Industries</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From real estate to public infrastructure, we provide specialized steel solutions across multiple industry verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <industry.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                <div className="text-sm font-semibold text-orange-500">{industry.projects}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
