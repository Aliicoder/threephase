import FAQ from "@/app/english/(page)/FAQ";
import Footer from "@/app/english/(page)/Footer";
import Hero from "@/app/english/(page)/Hero";
import OnSite from "@/app/english/(page)/OnSite";
import Partners from "@/app/english/(page)/Partners";
import Services from "@/app/english/(page)/Services";
import Statistics from "@/app/english/(page)/Statistics";
import Vision from "@/app/english/(page)/Vision";
import WhyChooseUs from "@/app/english/(page)/WhyChooseUs";
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
