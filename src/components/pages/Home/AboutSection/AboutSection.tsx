import { NavLink } from "react-router-dom";
import AboutImage from "../../../../assets/images/home/about-image.webp";
import { useTranslation } from "../../../../data/translation";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-label="about-heading"
      className="pt-20 md:pt-30 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12 items-center">
          <article className="flex flex-col">
            <header className="mb-6">
              <span className="text-zinc-600 font-bold uppercase text-xs md:text-sm mb-3 block">
                {t.home.about.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 uppercase">
                {t.home.about.title}
              </h2>
            </header>
            <p className="text-base text-zinc-600 mb-8 leading-relaxed max-w-lg">
              {t.home.about.description}
            </p>
            <ul className="space-y-4 mb-10" aria-label="Keunggulan kami">
              {t.home.about.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check text-zinc-600 h-5 w-5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span className="text-zinc-700 text-sm md:text-base font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <footer>
              <NavLink
                to="/about-us"
                className="group inline-flex gap-3 items-center justify-center px-8 py-3 bg-zinc-900 hover:bg-zinc-700 text-zinc-50 font-medium hover:text-zinc-50 cursor-pointer rounded-full transition duration-300"
              >
                {t.home.about.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 h-5 w-5 group-hover:translate-x-1 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </NavLink>
            </footer>
          </article>

          <figure className="relative group m-0 lg:ml-10 mt-8 lg:mt-0">
            <img
              src={AboutImage}
              alt="Pengolahan Aspal"
              className="relative rounded-2xl object-cover w-full h-110"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
