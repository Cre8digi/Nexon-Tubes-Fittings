import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import AboutSection from "@/components/AboutSection";
import ProductsGallery from "@/components/ProductGallery";
import WhyChooseNexon from "@/components/WhyChooseNexon";
import ApplicationsSection from "@/components/ApplicationSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StickyButtons from "@/components/StickyButtons";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = current.toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(counter);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>
          Stainless Steel Tubes & Fittings Manufacturer - Nexon Tube
        </title>
        <meta
          name="description"
          content="Nexon Tube & Fitting is a trusted manufacturer of stainless steel tubes, pipes, plates, and industrial fittings. Serving chemical, construction, and dairy industries for over a decade."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexon Tube & Fitting",
  "url": "https://nexontube.com",
  "logo": "https://nexontube.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8779165356",
    "contactType": "Customer Service"
  }
}
`,
          }}
        />

        <meta
          name="keywords"
          content="stainless steel tubes, pipe fittings, steel plates, Mumbai manufacturer, ISO 9001:2010, industrial steel, Nexon Tube"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexontube.com/" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Nexon Tube & Fitting - Stainless Steel Manufacturer"
        />
        <meta
          property="og:description"
          content="Explore high-quality stainless steel products from Nexon Tube – ISO certified and trusted by industries worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexontube.com" />
        <meta
          property="og:image"
          content="https://nexontube.com/og-image.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nexon Tube & Fitting - Leading SS Manufacturer"
        />
        <meta
          name="twitter:description"
          content="Premium stainless steel tubes, pipes, plates & fittings for all industries."
        />
        <meta
          name="twitter:image"
          content="https://nexontube.com/twitter-image.jpg"
        />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ProductsGallery />
          <WhyChooseNexon />
          <ApplicationsSection />
          <IndustriesSection />
          <TestimonialsSection />
        
          <QuickQuoteForm />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  );
}
