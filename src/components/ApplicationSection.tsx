
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function ApplicationsSection() {
  const applications = [
    {
      
      title: "Architectural",
      description: "Modern building facades, structural elements, and decorative features",
      image: "https://www.shutterstock.com/image-photo/construction-worker-wearing-yellow-hard-600nw-2492762443.jpg"
    },
    {
     
      title: "Pipe Fitiing",
      description: "Staircase railings, balcony guards, and safety barriers",
      image: "https://www.meritbrass.com/uploads/general%20photos/Merit-Brass-Pipe-Fittings.jpg"
    },
    {
      
      title: "Steel Buttweld Fittings",
      description: "Contemporary steel furniture and custom design solutions",
      image: "https://www.zzfittings.com/wp-content/uploads/2019/03/Stainless-Steel-Buttweld-Fittings.jpg"
    },
    {
   
      title: "Infrastructure",
      description: "Public infrastructure, bridges, and industrial applications",
      image: "https://powerhouseegypt.com/wp-content/uploads/2022/08/%D8%AA.jpg"
    }
  ]

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Applications</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Versatile <span className="text-orange-500">Applications</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our steel products find applications across diverse industries, from architectural marvels to everyday furniture solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="absolute top-4 left-4">
                  
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                <p className="text-slate-600">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
