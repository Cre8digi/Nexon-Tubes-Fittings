import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ProductsGallery() {
  const products = [
    {
      name: "Stainless Steel Tubes",
      image: "https://www.neoimpex.com/blog/wp-content/uploads/2024/08/Buttweld-Pipe-Fittings-1.jpg",
      description: "Premium grade stainless steel tubes for         steel fittings designed for secure industrial pipe              various applications"
    },
    {
      name: "Dairy Fitting",
      image: "https://www.sanghvioverseas.com/images/dairy-fittings.jpg",
      description: "Precision-engineered stainless steel fittings for hygienic dairy processing solutions."
    },
    {
      name: "Stainless Steel Flanges",
      image: "https://www.pragatimetal.com/blog/wp-content/uploads/2021/10/Stainless-Steel-Flanges.jpg",
      description:"Durable and corrosion-resistant flanges designed for secure industrial pipe connections."
    },
    {
      name: "Stainless Steel Fasteners",
      image: "https://ritinoxoverseas.com/blog/wp-content/uploads/2021/09/Fasteners.jpg",
      description: "High-strength, rust-proof fasteners for reliable and long-lasting assemblies."
    },
    {
      name: "All Types Of Bars",
      image: "https://www.viraj.com/wp-content/uploads/2023/10/fast-moving-applications-of-stainless-steel-bright-bars.jpg",
      description: "Comprehensive range of stainless steel bars for diverse industrial applications."
    },
    {
      name: "Stainless Steel Plate",
      image: "https://media.istockphoto.com/id/1220652540/photo/steel-sheets-in-warehouse-rolled-metal-product.jpg?s=612x612&w=0&k=20&c=KxokPqaLZOgueMavRk9shXHLRYHyN0f5PIZvDqV8M_M=",
      description: "Premium quality plates  corrosion resistance for heavy-duty use."
    },
    {
      name: "Plate Rings",
      image: "https://5.imimg.com/data5/AS/LC/PO/ANDROID-9440638/product-jpeg-500x500.jpg",
      description: "Precisely crafted stainless ideal for machining steel plate rings for robust and accurate fittings."
    },
    {
      name: "Circles",
      image: "https://www.sanghvioverseas.com/images/stainless-steel-circles.jpg",
      description: "High-precision stainless steel circles ideal for machining and fabrication needs."
    },
    {
      name: "Valves",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/8/445732027/FH/BP/GM/36962943/ss-valves-and-fittings-4.jpg",
      description: "Reliable and durable stainless steel valves for efficient flow control in industrial systems."
    },
     {
      name: "Pipes",
      image: "https://media.istockphoto.com/id/652240904/photo/different-metal-products-stainless-steel-profiles-and-tubes.jpg?s=612x612&w=0&k=20&c=Z6YrvtflsSKS5c1lrc-CIRdCg4lBhpSMfkpNVeWEVPA=",
      description: "High-quality stainless steel pipes engineered for strength, durability, and corrosion resistance."
    },
     {
      name: "Brass Fitting",
      image: "https://t4.ftcdn.net/jpg/02/04/17/61/360_F_204176157_opZBW1GCyV0ArS3KTfaCX611MhYAUAu9.jpg",
      description: "Durable and corrosion-resistant brass fittings for secure and efficient connections."
    },
     {
      name: "Brass Pipes",
      image: "https://media.istockphoto.com/id/509492049/photo/copper-round-pipes-industrial-3d-illustration.jpg?s=612x612&w=0&k=20&c=GYUUVH0MGurbgUnq3AVjXt8c7QmL6RRDhZPAFhEdG4w=",
      description: "Versatile and long-lasting brass pipes ideal for plumbing, industrial, and decorative applications."
    }
  ]

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Premium Quality <span className="text-orange-500">Steel Products</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive range of stainless steel products designed to meet the highest industry standards and exceed your expectations.
          </p>
        </div>

        {/* ✅ Updated Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 reveal hover-lift" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden h-64">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
              <a  href="https://wa.me/918779165356">  <div className="flex items-center justify-between">
                  <span className="text-slate-600">Whatsapp</span>
                  <ArrowRight   className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
