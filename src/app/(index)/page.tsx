import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import OnSite from "@/components/sections/OnSite";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Vision from "@/components/sections/Vision";
import Whatsapp from "@/components/buttons/Whatsapp";

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-white" dir="rtl">
      <Whatsapp />
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
