import { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";

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
      <body
        className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
