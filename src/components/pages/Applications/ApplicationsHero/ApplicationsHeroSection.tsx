import ApplicationHero from "../../../../assets/images/about/about-hero.webp";
import { useTranslation } from "../../../../data/translation";

const ApplicationsHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-15 relative w-full h-180 md:h-170 lg:h-screen flex items-center bg-cover bg-center bg-no-repeat">
      <img
        src={ApplicationHero}
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
            {t.applications.hero.eyebrow}
          </span>
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl font-extrabold text-slate-50 leading-tight tracking-wide mb-4 mt-3"
          >
            {t.applications.hero.title}
          </h1>
          <p className="text-sm md:text-lg text-slate-100 mb-7 leading-relaxed tracking-wide max-w-xl">
            {t.applications.hero.description}
          </p>

          <nav
            aria-label="Hero navigation"
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#bidang-aplikasi"
              className="group flex gap-3 items-center justify-center px-8 py-3 bg-slate-100 hover:bg-slate-600 text-slate-900 font-medium hover:text-slate-50 cursor-pointer rounded-full transition duration-300"
            >
              {t.applications.hero.cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 h-5 w-5 group-hover:translate-x-1 transition duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </nav>
        </header>
      </div>
    </section>
  );
};

export default ApplicationsHeroSection;
