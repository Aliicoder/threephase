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
  title: {
    template: "%s | ThreePhase",
    default: " حلول الكهرباء لمواقع التصوير والإنتاج",
  },
  description:
    "تقدم ThreePhase حلولاً كهربائية متكاملة ثلاثية الطور لمواقع التصوير السينمائي، الاستوديوهات الإنتاجية، والمنشآت الترفيهية. نوفر أنظمة توزيع طاقة آمنة، حلول كهرباء مؤقتة، وإدارة طاقة فعالة لضمان سير عمليات الإنتاج دون انقطاع. فريقنا الخبير يضمن توفير حلول طاقة متوافقة مع المعايير العالمية لقطاع الترفيه.",
  keywords:
    "كهرباء الأفلام, كهرباء ثلاثية الطور, توزيع كهرباء مواقع التصوير, كهرباء الاستوديوهات, حلول طاقة مؤقتة, أنظمة الطاقة للترفيه, كهرباء مواقع الإنتاج السينمائي",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
              "url": "https://threephase.co",
              "logo": "/logo.png"
            }
          `,
          }}
        />
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
