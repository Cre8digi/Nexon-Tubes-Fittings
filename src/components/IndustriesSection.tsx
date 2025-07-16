import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Palette, HardHat, Landmark, Sofa, Plane, type LucideIcon } from "lucide-react"

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  projects: string;
}

export default function IndustriesSection() {
  const industries: Industry[] = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Residential and commercial property development projects",
      projects: "500+ Projects"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Custom steel elements for modern interior spaces",
      projects: "300+ Designs"
    },
    {
      icon: HardHat,
      title: "Construction",
      description: "Structural steel components for construction industry",
      projects: "1000+ Sites"
    },
    {
      icon: Landmark,
      title: "Public Infrastructure",
      description: "Government and municipal infrastructure projects",
      projects: "50+ Projects"
    },
    {
      icon: Sofa,
      title: "Furniture Manufacturing",
      description: "Steel components for furniture and fixture manufacturers",
      projects: "200+ Partners"
    },
    {
      icon: Plane,
      title: "Transportation",
      description: "Metal industry aids transport with strong, durable materials.",
      projects: "500+ Projects"
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

        <div className="grid grid-cols
