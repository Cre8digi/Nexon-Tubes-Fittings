import Head from "next/head"
import Header from "@/components/Header"
import ApplicationsSection from "@/components/ApplicationSection"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import StickyButtons from "@/components/StickyButtons"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Applications - Nexon Tube & Fitting</title>
        <meta
          name="description"
          content="Explore the wide range of industries and applications Nexon Tube & Fitting products serve – from construction to chemical industries."
        />
        <meta
          name="keywords"
          content="Nexon applications, tube fitting industries, stainless steel use, construction, chemical processing, dairy equipment, industrial applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexontube.com/about" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Applications - Nexon Tube & Fitting" />
        <meta property="og:description" content="Discover where Nexon Tube & Fitting products are used across various industries." />
        <meta property="og:url" content="https://nexontube.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexontube.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Applications - Nexon Tube & Fitting" />
        <meta name="twitter:description" content="Explore how our tubes and fittings are used in major sectors like chemical and dairy industries." />
        <meta name="twitter:image" content="https://nexontube.com/og-image.jpg" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <ApplicationsSection />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
