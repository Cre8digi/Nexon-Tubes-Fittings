import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Factory, Shield } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    { icon: Award, label: "ISO Certified", value: "9001:2019" },
    { icon: Users, label: "Happy Clients", value: "720+" },
    { icon: Factory, label: "Production Capacity", value: "20T/Month" },
    { icon: Shield, label: "Quality Assurance", value: "100%" },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background image that scrolls with content */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url("https://t3.ftcdn.net/jpg/11/85/99/32/360_F_1185993206_zemy1Y773nrQzBfNMzJHKsBoYRLwYAvr.jpg")`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Optional overlay - can remove or reduce white if too strong */}
      {/* <div className="absolute inset-0 bg-white/70" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
         <Badge className=" bg-orange-300 text-xl text-white-800 mb-5">
                About Nexon
              </Badge>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
             
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                6+ Years of Excellence in
                <span className="text-orange-500"> Tube Manufacturing</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Since 2019, Nexon Tube & Fitting has been at the forefront of
                manufacturing premium quality stainless steel tubes, pipes, and
                fittings. Our commitment to excellence and innovation has made
                us a trusted partner for architects, contractors, and businesses
                across India.
              </p>
              <p className="text-lg text-slate-700">
                With state-of-the-art manufacturing facilities and a team of
                skilled professionals, we deliver products that meet the highest
                industry standards while maintaining competitive pricing and
                timely delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://www.hisarmetal.com/images/slider2.jpg"
                  alt="Manufacturing facility"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://5.imimg.com/data5/DW/LN/MY-23601333/stainless-steel-dairy-fittings-500x500.jpg"
                  alt="Quality control"
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://www.sakabrasives.com/wp-content/uploads/2017/12/Steel.jpg"
                  alt="Steel products"
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://5.imimg.com/data5/FM/QK/KT/SELLER-30880166/stainless-steel-310s-buttweld-fittings-500x500.jpg"
                  alt="Team at work"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Badge
                variant="outline"
                className="text-slate-600 border-slate-300"
              >
                ISO 9001:2019
              </Badge>
              <Badge
                variant="outline"
                className="text-slate-600 border-slate-300"
              >
                CE Certified
              </Badge>
              <Badge
                variant="outline"
                className="text-slate-600 border-slate-300"
              >
                BIS Approved
              </Badge>
              <Badge
                variant="outline"
                className="text-slate-600 border-slate-300"
              >
                ASTM Standards
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}
