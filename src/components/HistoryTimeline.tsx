
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Factory, TrendingUp, Globe } from "lucide-react"

export default function HistoryTimeline() {
  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description: "Nexon Tube & Fitting established with a vision to provide quality steel products",
      icon: Factory,
      color: "bg-blue-500"
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems",
      icon: Award,
      color: "bg-green-500"
    },
    {
      year: "2017",
      title: "Capacity Expansion",
      description: "Expanded production capacity to 300 tons per month to meet growing demand",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      year: "2019",
      title: "1000+ Clients",
      description: "Reached milestone of serving over 1000 satisfied clients across India",
      icon: Globe,
      color: "bg-purple-500"
    },
    {
      year: "2021",
      title: "Technology Upgrade",
      description: "Invested in advanced manufacturing technology and automation systems",
      icon: Factory,
      color: "bg-indigo-500"
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Became one of the leading tube and fitting manufacturers in the region",
      icon: Award,
      color: "bg-red-500"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding to international markets and sustainable manufacturing practices",
      icon: Globe,
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Our Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our <span className="text-orange-500">History</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership - discover the milestones that shaped our journey over the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-500">{milestone.year}</div>
                          <div className="text-lg font-bold text-slate-900">{milestone.title}</div>
                        </div>
                      </div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden lg:block relative">
                  <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-full lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
