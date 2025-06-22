import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold mb-4">
                Nexon <span className="text-orange-500">Tube & Fitting</span>
              </div>
              <p className="text-slate-300 mb-6">
                Leading manufacturer of premium quality stainless steel tubes,
                pipes, and fittings for architectural and industrial
                applications.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <a
                  href="https://maps.app.goo.gl/fZYgMWYtrEr7sLtq8"
                ><span className="text-slate-300">
                  Dr. Mahimtura Marg, Ganjawala Bldg 3rd kumbharwada
                  Mumbai - 400004
                </span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-slate-300">+91 8779165356</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href="mailto:nexonfitting@gmail.com"
                >
                 
                <span className="text-slate-300">nexonfitting@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/Products"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/application"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Applications
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-slate-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-300">Stainless Steel Tubes</span>
              </li>
              <li>
                <span className="text-slate-300">Industrial Pipes</span>
              </li>
              <li>
                <span className="text-slate-300">Railing Fittings</span>
              </li>
              <li>
                <span className="text-slate-300">Steel Coils</span>
              </li>
              <li>
                <span className="text-slate-300">Benches & Furniture</span>
              </li>
              <li>
                <span className="text-slate-300">Grills & Gates</span>
              </li>
            </ul>
          </div>

          <div>
            {/* <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}

            <a
              href="https://drive.google.com/file/d/1DRmG6i4x-f14tUFUbMQrX6OdQsisw1lS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">
                <Download className="mr-2 w-4 h-4" />
                Download Brochure
              </Button>
            </a>

            <div className="space-y-2">
              <div className="text-sm text-slate-400">Certifications:</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                  ISO 9001:2019
                </span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                  CE Certified
                </span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                  BIS Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Nexon Tube & Fitting. All rights reserved.
            </div>
            {
              <div className="flex space-x-6 text-sm">
                <a
                  href="https://wa.me/918239374563"
                  className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Created By - Cre8digi - A Digital Agency
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
