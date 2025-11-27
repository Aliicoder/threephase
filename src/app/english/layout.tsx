import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Film & Production Electricity Solutions",
  description:
    "ThreePhase delivers specialized three-phase electrical solutions for film sets, production studios, and entertainment venues. Our expert team provides reliable power distribution, temporary electrical systems, and energy management for seamless film production. Trusted by the entertainment industry for safe, efficient, and compliant power solutions.",
  keywords: `film electricity, electrical solutions, electricity solutions near me , 
  three phase electrical solutions Riyadh, movie set power, production studio electrical,
   temporary power solutions, film set energy, entertainment power systems`,
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
