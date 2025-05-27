import Head from "next/head"
import Header from "@/components/Header"
import AboutHeroSection from "@/components/AboutHeroSection"
import AboutSection from "@/components/AboutSection"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import StickyButtons from "@/components/StickyButtons"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Nexon Tube & Fitting</title>
        <meta
          name="description"
          content="Learn more about Nexon Tube & Fitting – our mission, experience, and commitment to premium quality stainless steel tubes, pipes, and fittings."
        />
        <meta
          name="keywords"
          content="About Nexon Tube, stainless steel manufacturers, pipe suppliers, tube & fitting company, industrial fittings, Mumbai stainless steel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexontube.com/about" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us - Nexon Tube & Fitting" />
        <meta property="og:description" content="Discover our mission and commitment to providing the highest quality stainless steel tubes and fittings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexontube.com/about" />
        <meta property="og:image" content="https://nexontube.com/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nexon Tube & Fitting" />
        <meta name="twitter:description" content="Dedicated to stainless steel excellence for industrial and architectural needs." />
        <meta name="twitter:image" content="https://nexontube.com/og-image.jpg" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <AboutHeroSection />
          <AboutSection />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
