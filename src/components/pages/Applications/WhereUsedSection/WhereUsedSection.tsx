import { applicationFields } from "../../../../data/dataApplications";

const WhereUsedSection = () => {
  return (
    <section
      id="bidang-aplikasi"
      aria-labelledby="where-used-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text md:text-sm">
              Bidang Aplikasi
            </span>
          </div>

          <h2
            id="where-used-heading"
            className="mb-4 text-3xl font-bold leading-tight text-header md:text-4xl lg:text-5xl"
          >
            Di Mana Aditif Aspal Dibutuhkan?
          </h2>

          <p className="text-base leading-relaxed text-text md:text-lg">
            Aditif yang berbeda digunakan pada berbagai kondisi jalan untuk
            memenuhi kebutuhan proyek dan meningkatkan performa perkerasan.
          </p>
        </header>

        {/* Semantic Grid 6 Kartu */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 list-none p-0">
          {applicationFields.map((field) => (
            <li key={field.id}>
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Gambar Kondisi Jalan */}
                <figure className="relative h-48 w-full overflow-hidden bg-slate-100 md:h-52 m-0">
                  <img
                    src={field.image}
                    alt={field.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                {/* Judul Bidang Aplikasi */}
                <div className="p-5 text-center md:p-6">
                  <h3 className="text-base font-bold text-header md:text-lg">
                    {field.title}
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhereUsedSection;
