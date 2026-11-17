
import { companyHistory } from "../../../../data/companyStory";

const CompanyHistorySection = () => {
  return (
    <section
      id="company-history"
      aria-labelledby="company-history-heading"
      className="bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Section Header */}
        <header className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600">
            <span className="h-0.5 w-7 bg-blue-600" />
            Sejarah Perusahaan
            <span className="h-0.5 w-7 bg-blue-600" />
          </span>

          <h2
            id="company-history-heading"
            className="mx-auto mb-5 max-w-2xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl"
          >
            Perjalanan Kami Menuju Masa Depan
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
            Sejak didirikan pada tahun 2015, Hubei Luxiang terus
            mengembangkan kapasitas produksi dan memperluas jangkauan
            bisnis untuk mendukung kebutuhan industri infrastruktur.
          </p>
        </header>

        {/* Vertical Timeline */}
        <ol className="relative mx-auto max-w-3xl space-y-12 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-0.5 before:bg-blue-200 md:before:left-8">

          {companyHistory.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.year} className="relative pl-16 md:pl-20">

                {/* Timeline Icon */}
                <div className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-100 text-blue-600 md:left-2 md:h-12 md:w-12">
                  <Icon size={21} strokeWidth={2} />
                </div>

                {/* Timeline Card */}
                <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
                  <time
                    className="mb-3 block text-sm font-bold tracking-wide text-blue-600"
                  >
                    {item.year}
                  </time>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}

        </ol>
      </div>
    </section>
  );
};

export default CompanyHistorySection;
