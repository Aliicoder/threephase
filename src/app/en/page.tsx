import FAQ from "@/components/sections/en/FAQ";
import Footer from "@/components/sections/en/Footer";
import Hero from "@/components/sections/en/Hero";
import OnSite from "@/components/sections/en/OnSite";
import Partners from "@/components/sections/en/Partners";
import Services from "@/components/sections/en/Services";
import Statistics from "@/components/sections/en/Statistics";
import Vision from "@/components/sections/en/Vision";
import WhyChooseUs from "@/components/sections/en/WhyChooseUs";
import Whatsapp from "@/components/buttons/Whatsapp";
const Home = () => {
  return (
    <main className="relative overflow-hidden transition-all bg-white">
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
