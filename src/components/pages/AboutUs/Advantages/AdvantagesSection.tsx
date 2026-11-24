import { advantages } from "../../../../data/dataAdvantages";
import { useTranslation } from "../../../../data/translation";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="advantages-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="max-w-2xl mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-text">
            {t.about.advantages.eyebrow}
          </span>
          <h2
            id="advantages-heading"
            className="text-3xl md:text-4xl font-bold text-header mt-3 mb-4 leading-tight"
          >
            {t.about.advantages.title}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {t.about.advantages.description}
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            const localizedItem = t.about.advantages.items[index];
            const title = localizedItem?.title || item.title;
            const description = localizedItem?.description || item.description;

            return (
              <li key={item.title}>
                <article className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 transition duration-300">
                  <div
                    className="shrink-0 mt-1 text-header"
                    aria-hidden="true"
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-header text-lg mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
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

export default AdvantagesSection;
