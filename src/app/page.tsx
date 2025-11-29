import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import OnSite from "@/components/sections/OnSite";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Vision from "@/components/sections/Vision";

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-white" dir="rtl">
      <Link
        href="https://wa.me/966553442515"
        className={clsx(
          "hidden p-4 z-50 left-0 bottom-0 cursor-pointer",
          "max-md:fixed max-md:block"
        )}
      >
        <Image src="/whatsapp.svg" alt="" width={40} height={40} />
      </Link>
      <Hero />
      <Statistics />
      <Vision />
      <Partners />
      <Services />
      <OnSite />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
