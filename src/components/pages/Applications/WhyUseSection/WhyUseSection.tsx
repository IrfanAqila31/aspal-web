import { benefits } from "../../../../data/dataApplications";
import { useTranslation } from "../../../../data/translation";

const WhyUseSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="manfaat-aditif"
      aria-labelledby="why-use-heading"
      className="bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text md:text-sm">
              {t.applications.whyUse.eyebrow}
            </span>
          </div>

          <h2
            id="why-use-heading"
            className="mb-4 text-3xl font-bold leading-tight text-header md:text-4xl lg:text-5xl"
          >
            {t.applications.whyUse.title}
          </h2>
        </header>

        {/* Grid 3 Kartu Manfaat */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 list-none p-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const localizedBenefit = t.applications.whyUse.items[index];
            const title = localizedBenefit?.title || benefit.title;
            const description = localizedBenefit?.description || benefit.description;

            return (
              <li key={benefit.title}>
                <article className="flex h-full flex-col sm:flex-row items-start gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md md:p-8">
                  {/* Container Icon */}
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-header"
                    aria-hidden="true"
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  {/* Teks Judul & Deskripsi */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold leading-snug text-header">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text">
                      {description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyUseSection;
