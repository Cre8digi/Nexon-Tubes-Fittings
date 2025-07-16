import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";



const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/Products" },
  { name: "Applications", href: "/application" },
  { name: "Industries", href: "/industries" },
  { name: "Contact Us", href: "/contactus" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden  lg:flex items-center space-x-10">
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-orange-500 transition-colors duration-300 font-semibold text-xl"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-slate-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Get Quote (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/918779165356"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md transition-colors duration-300 text-base"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700 px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-slate-200 hover:text-orange-500 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://wa.me/918779165356"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 bg-orange-500 text-white py-2 rounded-md font-semibold"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}
