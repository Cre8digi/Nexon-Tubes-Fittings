import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="author" content="Nexon Tube & Fitting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f97316" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Nexon Tube & Fitting" />
        <meta
          property="og:description"
          content="Premium stainless steel products for industrial, chemical, and dairy applications. Trusted quality by Nexon Tube & Fitting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexontubefitting.com" />
        <meta property="og:site_name" content="Nexon Tube & Fitting" />
        {/* Optional: Replace with your logo image */}
        <meta property="og:image" content="/logo.png" />

        {/* Favicon (optional but recommended) */}
        <link rel="icon" href="/favicon.ico" />
        <title>Nexon Tube & Fitting</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
