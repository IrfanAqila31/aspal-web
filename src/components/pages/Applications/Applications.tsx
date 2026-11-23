import ApplicationsHeroSection from "./ApplicationsHero";
import WhereUsedSection from "./WhereUsedSection";
import WhyUseSection from "./WhyUseSection";
import ProjectSection from "./ProjectSection";
import CtaBanner from "../../ui/CtaBanner";

const Applications = () => {
  return (
    <>
      {/* 1. Hero Banner */}
      <ApplicationsHeroSection />

      {/* 2. Di Mana Aditif Aspal Dibutuhkan? (6 Grid) */}
      <WhereUsedSection />

      {/* 3. Mengapa Menggunakan Aditif Aspal? (3 Manfaat) */}
      <WhyUseSection />

      {/* 4. Portofolio Proyek Jalan & Jembatan (4 Proyek) */}
      <ProjectSection />

      {/* 5. CTA Konsultasi Banner */}
      <CtaBanner />
    </>
  );
};

export default Applications;