import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Start Your Project with{" "}
          <span className="text-orange-500">Nexon Today</span>
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Ready to bring your vision to life? Get in touch with our experts for
          a consultation and discover how our premium steel products can elevate
          your project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#quickquote" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>

          <a href="tel:+918779165356">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <Phone className="mr-2" size={20} />
              Call Now: +91 8779165356
            </Button>
          </a>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-slate-300">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">Free</div>
            <div className="text-slate-300">Consultation & Quote</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">Fast</div>
            <div className="text-slate-300">Delivery Nationwide</div>
          </div>
        </div>
      </div>
    </section>
  );
}
