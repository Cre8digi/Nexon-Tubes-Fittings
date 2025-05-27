"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Circles",
    image: "https://www.sanghvioverseas.com/images/stainless-steel-circles.jpg",
    specs: `Specification: ASTM A240 / ASME SA240
Standard: JIS, AISI, GB, DIN, etc
Width: 1000mm to 3500mm
Length: 2000mm to 6000mm
Thickness: 0.3mm to 120mm
Form: Coils, Rolls, Plain Sheet, Perforated Sheet, Strip, Flats, Blank (Circle), Ring (Flange)
Grades: 304, 304L, 310S, 316, 316L, 317, 321, 904L, SMO 254`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Circles",
  },
  {
    name: "Stainless Steel Tubes",
    image: "https://www.neoimpex.com/blog/wp-content/uploads/2024/08/Buttweld-Pipe-Fittings-1.jpg",
    specs: `Pipe Spec: ASTM A312, A358 / ASME SA312
Tube Spec: ASTM A213, A269, A249
OD: 6.00 mm to 914.4 mm
Thickness: 0.3mm – 50mm
Schedule: SCH20, SCH40, SCH80, SCH160, XS, XXS
Size: 1/8”NB – 36”NB
Type: Seamless, Welded, Fabricated
Grades: 304, 304L, 310S, 316, 316L, 317L, 321, 904L, SMO 254`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Pipes & Tubes",
  },
  {
    name: "Stainless Steel Plate",
    image: "https://media.istockphoto.com/id/1220652540/photo/steel-sheets-in-warehouse-rolled-metal-product.jpg?s=612x612&w=0&k=20&c=KxokPqaLZOgueMavRk9shXHLRYHyN0f5PIZvDqV8M_M=",
    specs: `Specification: ASTM A240 / ASME SA240
Standard: JIS, AISI, ASTM, GB, DIN, EN
Width: 1000mm to 3500mm
Length: 2000mm to 6000mm
Thickness: 0.3mm to 120mm
Form: Coils, Flats, Plates, Circles, Rings
Surface Finishing: Hot rolled, 2B, BA, No.4, Chequered, Brush, SATIN
Grades: 304, 304L, 310S, 316, 316L, 317, 321, 904L, SMO 254`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Plates",
  },
  {
    name: "Stainless Steel Elbow",
    image: "https://www.mcneilinstruments.com/wp-content/uploads/2023/03/p4.jpg",
    specs: `Type: 45° / 90° / 180° Elbow
Size: 1/2\" to 48\"
Schedule: SCH 10 to SCH 160
Material: Stainless Steel 304, 316, 321, etc.
Standard: ASTM A403 / ASME SA403`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Elbows",
  },
  {
    name: "Stainless Steel Cap",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300183795/PO/CJ/IS/26066824/ss-end-cap.jpg",
    specs: `Size: 1/2\" to 24\"
Material: SS 304 / 304L / 316 / 316L
Type: Butt Weld Cap
Schedule: SCH 10 to SCH 160
Standard: ASME B16.9 / B16.28`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Caps",
  },
  {
    name: "Dairy Fittings",
    image: "https://lh4.googleusercontent.com/proxy/iJ41xOpWlHrud8r6YkglM2apXpliE24fxe-3HUw5aQU98fCnCHFt18J5peI5BX2zFu2lkK4HWtQ9JY94_yVIhOc",
    specs: `Type: SMS/IDF/TC/Clamp Union
Material: SS 304 / 316
Finish: Mirror / Matte
Schedule: SCH 10 to SCH 160
Application: Dairy, Beverage, Pharma`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Dairy Fittings",
  },
  {
    name: "Stainless Steel Sheet",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/10/DZ/JN/HN/36447154/monel-400-plate-astm-b127-uns-n04400-sheet-emilymetal-com-500x500.png",
    specs: `Thickness: 0.3mm – 50mm
Width: 1000mm – 2000mm
Standard: ASTM A240 / ASME SA240
Finish: 2B, BA, Mirror, No.4, etc.`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Sheets",
  },
  {
    name: "Flanges",
    image: "https://bhansalitechno.com/wp-content/uploads/2024/03/Types-of-flanges.jpg",
    specs: `Types: Slip-on, Weld Neck, Blind, Threaded
Material: SS 304, 316, etc.
Standard: ANSI/ASME B16.5
Size: 1/2” to 48”`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Flanges",
  },
  {
    name: "Stainless Steel Coil",
    image: "https://tiimg.tistatic.com/fp/1/007/550/silver-color-heavy-duty-zinc-coated-galvanized-201-stainless-steel-coil-for-industrial-150.jpg",
    specs: `Thickness: 0.2mm to 6mm
Width: 500mm to 1500mm
Grades: 304, 316, 430, etc.
Finish: 2B, BA, Mirror`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in SS Coils",
  },
  {
    name: "Buttweld Fittings",
    image: "https://www.neoimpex.com/blog/wp-content/uploads/2024/08/Buttweld-Pipe-Fittings-1.jpg",
    specs: `Types: Tee, Reducer, Elbow, Cap
Material: SS 304, 316, etc.
.Grade: 304, 316, etc
Standard: ASME B16.9 / B16.28`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Buttweld Fittings",
  },
  {
    name: "Steel Rods & Bars",
    image: "https://www.skytechrolling.com/blog/wp-content/uploads/2020/02/ss-316-round-bar.jpg",
    specs: `Form: Round, Hex, Square
Size: 6mm to 200mm
.Grade: 304, 316, etc
Standard: ASTM A276 / A479`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in Rods & Bars",
  },
  {
    name: "Stainless Steel Strip",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/thin-stainless-steel-strip-2034647486-a33z1dzx.jpg",
    specs: `Width: 10mm to 200mm
Thickness: 0.1mm to 3mm
.Grade: 304, 316, etc
Finish: 2B, BA, Matte`,
    whatsapp: "https://wa.me/918779165356?text=I'm interested in SS Strips",
  },
];

export default function ProductGallery() {
  return (
    
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="hover:shadow-xl transition duration-300">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <Badge className="text-lg px-3 py-1">{product.name}</Badge>
              <p className="text-sm whitespace-pre-line">{product.specs}</p>
              <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button className="mt-3 w-full">Enquire on WhatsApp</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
