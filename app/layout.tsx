import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Family Cladding - Premium Construction & Building Services in Cape Town",
    template: "%s | Family Cladding - Cape Town Construction Experts"
  },
  description: "Family Cladding is Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions. Get expert construction services with unmatched quality and professionalism.",
  keywords: [
    "construction company cape town",
    "building contractors cape town", 
    "home renovation cape town",
    "commercial construction cape town",
    "cladding services cape town",
    "construction services south africa",
    "building contractors western cape",
    "home builders cape town",
    "construction experts cape town",
    "premium construction services",
    "building renovation cape town",
    "construction company western cape",
    "residential construction cape town",
    "commercial builders cape town",
    "construction contractors south africa"
  ],
  authors: [{ name: "Family Cladding" }],
  creator: "Family Cladding",
  publisher: "Family Cladding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://familycladding.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Family Cladding - Premium Construction & Building Services in Cape Town",
    description: "Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions.",
    url: 'https://familycladding.co.za',
    siteName: 'Family Cladding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Cladding Construction Services',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Family Cladding - Premium Construction & Building Services in Cape Town",
    description: "Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions.",
    images: ['/twitter-image.jpg'],
    creator: '@familycladding',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://familycladding.co.za" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Family Cladding",
              "description": "Premium construction and building services company in Cape Town, South Africa",
              "url": "https://familycladding.co.za",
              "logo": "https://familycladding.co.za/logo.png",
              "image": "https://familycladding.co.za/og-image.jpg",
              "telephone": "+27-73-426-0258",
              "email": "info@familycladding.co.za",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "49 Windsor Close",
                "addressLocality": "Maitland",
                "addressRegion": "Western Cape",
                "addressCountry": "ZA",
                "postalCode": "7405"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-33.9249",
                "longitude": "18.4241"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "sameAs": [
                "https://www.facebook.com/familycladding",
                "https://www.instagram.com/familycladding",
                "https://www.twitter.com/familycladding"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "-33.9249",
                  "longitude": "18.4241"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Construction",
                      "description": "Complete home building and renovation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Construction",
                      "description": "Commercial building and office construction services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cladding Services",
                      "description": "Premium cladding and exterior finishing services"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lopes.pythonanywhere.com" />
      </head>
      <body className={inter.className}>
        < Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
