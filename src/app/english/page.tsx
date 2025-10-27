import FAQ from "@/app/english/(components)/FAQ";
import Footer from "@/app/english/(components)/Footer";
import Hero from "@/app/english/(components)/Hero";
import OnSite from "@/app/english/(components)/OnSite";
import Partners from "@/app/english/(components)/Partners";
import Services from "@/app/english/(components)/Services";
import Statistics from "@/app/english/(components)/Statistics";
import Vision from "@/app/english/(components)/Vision";
import WhyChooseUs from "@/app/english/(components)/WhyChooseUs";
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
