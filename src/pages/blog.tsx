import Head from "next/head"
import Header from "@/components/Header"
import BlogSection from "@/components/BlogSection"
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
          content="Learn more about Nexon Tube & Fitting – our mission, experience, and commitment to quality manufacturing of industrial tubes and fittings."
        />
        <meta
          name="keywords"
          content="Nexon Tube, About Nexon, steel fittings manufacturer, pipe and tube company, industrial steel products, stainless steel supplier"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexontube.com/about" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us - Nexon Tube & Fitting" />
        <meta property="og:description" content="Discover the story behind Nexon Tube & Fitting and our commitment to quality, service, and innovation." />
        <meta property="og:url" content="https://nexontube.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexontube.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Nexon Tube & Fitting" />
        <meta name="twitter:description" content="Learn more about Nexon Tube & Fitting’s experience and commitment to premium steel products." />
        <meta name="twitter:image" content="https://nexontube.com/og-image.jpg" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <BlogSection />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
