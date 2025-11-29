import FAQ from "@/components/sections/en/FAQ";
import Footer from "@/components/sections/en/Footer";
import Hero from "@/components/sections/en/Hero";
import OnSite from "@/components/sections/en/OnSite";
import Partners from "@/components/sections/en/Partners";
import Services from "@/components/sections/en/Services";
import Statistics from "@/components/sections/en/Statistics";
import Vision from "@/components/sections/en/Vision";
import WhyChooseUs from "@/components/sections/en/WhyChooseUs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className="relative overflow-hidden">
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
