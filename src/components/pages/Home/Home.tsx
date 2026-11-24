import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProductSection from "./ProductSection/ProductSection";
import ApplicationsSections from "./AplicationsSection/ApplicationsSection";
import CtaBanner from "../../ui/CtaBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ApplicationsSections />
      <CtaBanner />
    </>
  );
};

export default Home;
