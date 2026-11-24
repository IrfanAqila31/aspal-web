import ContactHero from "../../../../assets/images/contact/bg-contact-hero.webp";
import { useTranslation } from "../../../../data/translation";

const ContactHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-15 relative w-full h-180 md:h-170 lg:h-screen flex items-center bg-cover bg-center bg-no-repeat">
      <img
        src={ContactHero}
        alt="Fasilitas industri manufaktur bahan aditif aspal"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-[75%_center] -z-10"
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent to-95% md:from-slate-900/90 md:from-25% md:via-slate-900/50 md:to-transparent md:to-95%"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <header className="max-w-3xl drop-shadow-lg">
          <span className="text-yellow-300 uppercase font-semibold text-base md:text-lg tracking-wider">
            {t.contactPage.hero.eyebrow}
          </span>
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl font-extrabold text-slate-50 leading-tight tracking-wide mb-4 mt-3"
          >
            {t.contactPage.hero.title}
          </h1>
          <p className="text-sm md:text-lg text-slate-100 mb-7 leading-relaxed tracking-wide max-w-xl">
            {t.contactPage.hero.description}
          </p>
        </header>
      </div>
    </section>
  );
};

export default ContactHeroSection;
