import Head from "next/head"
import Header from "@/components/Header"
import IndustriesSection from "@/components/IndustriesSection"
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
          content="Discover Nexon Tube & Fitting – trusted provider of stainless steel pipes, fittings, and industrial components serving multiple industries with ISO 9001:2010 certified quality."
        />
        <meta
          name="keywords"
          content="Stainless Steel Pipes, Industrial Fittings, Nexon Tube, Steel Components, Steel Manufacturer Mumbai, ISO 9001:2010, Dairy Fittings, Chemical Industry Supplies"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us - Nexon Tube & Fitting" />
        <meta
          property="og:description"
          content="Learn more about Nexon Tube & Fitting – quality stainless steel products, decades of experience, and commitment to industry excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexontube.com/about" />
        <meta property="og:image" content="https://www.nexontube.com/logo.png" /> {/* Replace with actual image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Nexon Tube & Fitting" />
        <meta
          name="twitter:description"
          content="Explore Nexon Tube & Fitting’s history, mission, and industry expertise in stainless steel solutions."
        />
        <meta name="twitter:image" content="https://www.nexontube.com/logo.png" /> {/* Replace with actual image URL */}

        {/* Canonical */}
        <link rel="canonical" href="https://www.nexontube.com/about" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <IndustriesSection />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
