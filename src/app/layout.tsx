import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "ThreePhase - film electricity solutions",
  description:
    "ThreePhase delivers specialized three-phase electrical solutions for film sets, production studios, and entertainment venues. Our expert team provides reliable power distribution, temporary electrical systems, and energy management for seamless film production. Trusted by the entertainment industry for safe, efficient, and compliant power solutions.",
  keywords: `film electricity, electrical solutions, electricity solutions near me , 
  three phase electrical solutions Riyadh, movie set power, production studio electrical,
   temporary power solutions, film set energy, entertainment power systems`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
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
      </head>
      <ReactLenis root>
        <body
          className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
