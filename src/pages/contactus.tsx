import Head from "next/head"
import Header from "@/components/Header"
import AboutHeroSection from "@/components/AboutHeroSection"
import AboutSection from "@/components/AboutSection"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import StickyButtons from "@/components/StickyButtons"
import QuickQuoteForm from "@/components/QuickQuoteForm"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Nexon Tube & Fitting</title>
        <meta name="description" content="Learn more about Nexon Tube & Fitting – our mission, experience, and commitment to quality stainless steel products and fittings." />
        <meta name="keywords" content="Nexon Tube, Stainless Steel Fittings, Steel Pipes, Steel Tubes, Industrial Fittings, Mumbai Steel Manufacturer" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Nexon Tube & Fitting" />
        <meta property="og:description" content="Learn more about Nexon Tube & Fitting – our mission, experience, and commitment to quality." />
        <meta property="og:image" content="/logo.png" /> {/* Replace with real image URL */}
        <meta property="og:url" content="https://www.nexontube.com/about" /> {/* Update if you have a domain */}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.nexontube.com/about" /> {/* Update if you have a domain */}
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <AboutHeroSection />
          <AboutSection />
          <QuickQuoteForm />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
