import { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Film & Production Electricity Solutions",
  description: `ThreePhase delivers specialized three-phase electrical solutions 
    for film sets, production studios, and entertainment venues. 
    Our expert team provides reliable power distribution, temporary 
    electrical systems, and energy management for seamless film production.`,
  keywords: `film electricity, electrical solutions, electricity solutions near me , 
  three phase electrical solutions Riyadh, movie set power, production studio electrical,
   temporary power solutions, film set energy, entertainment power systems`,
  alternates: {
    canonical: "https://threephase.co/en",
    languages: {
      ar: "https://threephase.co",
      en: "https://threephase.co/en",
    },
  },
};
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/imgs/hero-bg.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P2LRXQGL5D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P2LRXQGL5D');
          `}
        </Script>
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ThreePhase",
              "description": "Specialized three-phase electricity solutions for film sets, production studios, and entertainment venues.",
              "areaServed": ["Riyadh", "Saudi Arabia"],
              "serviceType": "Film Electricity",
              "url": "https://threephase.co/en",
              "logo": "/logo.svg"
            }
          `,
          }}
        />
      </head>
      <body
        className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
