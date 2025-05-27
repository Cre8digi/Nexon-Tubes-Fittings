// next.config.mjs

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; img-src 'self' https:; script-src 'self'; style-src 'self' 'unsafe-inline'",
  },
];

const nextConfig = {
  reactStrictMode: true,

  // Agar images ko optimize nahi karna toh unoptimized: true use karo
  images: {
    unoptimized: true,
    domains: [
      "www.eqimg.com",
      "media.istockphoto.com",
      "images.jdmagicbox.com",
      "www.viraj.com",
      "www.neoimpex.com",
      "www.sanghvioverseas.com",
      "lh3.googleusercontent.com",
      "krystalsteels.in",
      "5.imimg.com",
      "www.sspipefittings.com",
      "www.jainsteel.com",
      "www.steeltubesindia.net",
      "www.jindalstainless.com",
      "www.steelpipesfactory.com",
      "www.rajtilakmetal.com",
      "m.media-amazon.com",
      "www.mcneilinstruments.com",
      "bhansalitechno.com",
      "tiimg.tistatic.com",
      "lh4.googleusercontent.com",
      "t4.ftcdn.net",
      "www.skytechrolling.com",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Agar aap API routes use kar rahe ho toh 'output: "export"' avoid karo
  // output: 'export', // commented out for API routes compatibility
  // basePath: '/Nexon-Tubes-Ftiings', // agar chahiye toh yeh wapas add kar sakte ho
};

export default nextConfig;
