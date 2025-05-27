import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const slides = [
  {
    image: "https://ed33ucdyqrd.exactdn.com/wp-content/uploads/2024/11/galvanised-steel-sheet-rolls.jpg",
    title: "Trusted Manufacturer of",
    highlight: "Nexon Tubes & Fittings",
    description: "Premium quality industrial tubes, pipes, and fittings for all your infrastructure needs.",
  },
  {
    image: "https://img.freepik.com/premium-photo/stacked-various-metal-pipes-tubes_290464-142.jpg",
    title: "Delivering Excellence",
    highlight: "Nexon Tubes & Fittings",
    description: "Serving clients across industries with durable, precision-engineered solutions.",
  },
  {
    image: "https://steelsalesco.com/wp-content/uploads/2022/06/ss-dairy-fittings.jpg",
    title: "Innovation Meets",
    highlight: "Nexon Tubes & Fittings",
    description: "Modern tubing solutions that last longer and perform better — every time.",
  },
];

const stats = [
  { label: "Years Experience", value: 6 },
  { label: "Happy Clients", value: 1340 },
  { label: "Cities Served", value: 27 },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  // Slide auto-changer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-counter");
    const animated = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(elements).indexOf(entry.target);
        if (entry.isIntersecting && !animated.has(index)) {
          animated.add(index);
          let start = 0;
          const end = stats[index].value;
          const step = end > 1000 ? 25 : end > 100 ? 10 : 1;
          const duration = 500;
          const stepTime = Math.max(Math.floor(duration / (end / step)), 20);

          const counter = setInterval(() => {
            start += step;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setAnimatedStats((prev) => {
              const updated = [...prev];
              updated[index] = start;
              return updated;
            });
          }, stepTime);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { image, title, highlight, description } = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-[calc(100vh+150px)] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 top-5 max-w-[2000px] mx-auto px-5 md:px-5 lg:px-6 text-center">
        <div className="transition-opacity duration-1000 ease-in-out">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
            <span className="block text-orange-500">{highlight}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">{description}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#products">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <a href="https://wa.me/918779165356" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              >
                <Play className="mr-2" size={20} />
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-counter">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {animatedStats[index]}+
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
