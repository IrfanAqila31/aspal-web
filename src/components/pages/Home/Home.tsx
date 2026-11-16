import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProductSection from "./ProductSection/ProductSection";
import ApplicationsSections from "./AplicationsSection/ApplicationsSection";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ApplicationsSections />
    </section>
  );
};
export default Home;
