import Head from "next/head"
import Header from "@/components/Header"
import ProductsGallery from "@/components/ProductGallery"
import Productsinfo from "@/components/Productsinfo"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import StickyButtons from "@/components/StickyButtons"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Our Products - Nexon Tube & Fitting</title>
        <meta
          name="description"
          content="Explore Nexon Tube & Fitting's wide range of stainless steel products including pipes, tubes, fittings, sheets, elbows, caps, and more for chemical, dairy, and industrial applications."
        />
        <meta
          name="keywords"
          content="Stainless Steel Pipes, Tubes, Fittings, Sheets, Plates, Dairy Fittings, Elbows, Caps, Nexon Tube, Industrial Steel Products, Mumbai Steel Supplier"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Our Products - Nexon Tube & Fitting" />
        <meta
          property="og:description"
          content="Discover high-quality stainless steel products from Nexon Tube & Fitting. Certified, reliable, and suitable for a variety of industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexontube.com/products" />
        <meta property="og:image" content="https://www.nexontube.com/logo.png" /> {/* Replace with actual image */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products - Nexon Tube & Fitting" />
        <meta
          name="twitter:description"
          content="Browse premium stainless steel products offered by Nexon Tube & Fitting for industrial and commercial use."
        />
        <meta name="twitter:image" content="https://www.nexontube.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.nexontube.com/products" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Productsinfo />
          <FooterCTA />
        </main>
        <Footer />
        <ScrollReveal />
        <StickyButtons />
      </div>
    </>
  )
}
