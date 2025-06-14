import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import OnSite from "@/components/sections/OnSite";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Partners />
      <Services />
      <OnSite />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
