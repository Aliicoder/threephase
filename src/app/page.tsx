import Hero from "@/app/(components)/Hero";
import Partners from "@/app/(components)/Partners";
import Services from "@/app/(components)/Services";
import Statistics from "@/app/(components)/Statistics";
import FAQ from "@/app/(components)/FAQ";
import Footer from "@/app/(components)/Footer";
import OnSite from "@/app/(components)/OnSite";
import WhyChooseUs from "@/app/(components)/WhyChooseUs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Vision from "@/app/(components)/Vision";

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
