import Hero from "@/components/sections/arabic/Hero";
import Partners from "@/components/sections/arabic/Partners";
import Services from "@/components/sections/arabic/Services";
import Statistics from "@/components/sections/arabic/Statistics";
import FAQ from "@/components/sections/arabic/FAQ";
import Footer from "@/components/sections/arabic/Footer";
import OnSite from "@/components/sections/arabic/OnSite";
import WhyChooseUs from "@/components/sections/arabic/WhyChooseUs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Vision from "@/components/sections/arabic/Vision";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white" dir="rtl">
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
    </div>
  );
};

export default Home;
