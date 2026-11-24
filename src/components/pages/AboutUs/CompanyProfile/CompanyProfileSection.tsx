import AboutCompanyImage from "../../../../assets/images/about/about-company.webp";
import { useTranslation } from "../../../../data/translation";

const CompanyProfileSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="company-profile"
      aria-labelledby="company-profile-heading"
      className="bg-white py-20 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">
          {/* Company Image */}
          <figure className="m-0">
            <img
              src={AboutCompanyImage}
              alt="Fasilitas perusahaan Hubei Luxiang Chemical Technology"
              className="h-72 w-full rounded-2xl object-cover md:h-96"
              loading="lazy"
            />
          </figure>

          {/* Company Profile */}
          <article className="flex flex-col">
            <header className="mb-6">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-header">
                {t.about.profile.eyebrow}
              </span>

              <h2
                id="company-profile-heading"
                className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl"
              >
                {t.about.profile.title}
              </h2>
            </header>

            <div className="space-y-5 text-base leading-relaxed text-zinc-600">
              <p>{t.about.profile.paragraph1}</p>
              <p>{t.about.profile.paragraph2}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
