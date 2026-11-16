import { sectors } from "../../../../data/dataSectors";

const Applications = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-blue-600">
            Sektor Aplikasi
          </span>

          <h2 className="mb-4 text-3xl font-bold text-header md:text-5xl">
            Solusi untuk Berbagai Kebutuhan Infrastruktur
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-text">
            Produk kami dirancang untuk mendukung berbagai kebutuhan
            konstruksi dan pemeliharaan infrastruktur jalan dengan
            kondisi serta karakteristik yang berbeda.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={25} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-header">
                  {sector.title}
                </h3>

                <p className="text-sm leading-relaxed text-text">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Applications;