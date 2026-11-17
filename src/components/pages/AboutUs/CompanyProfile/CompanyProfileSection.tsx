import AboutCompanyImage from "../../../../assets/images/about/about-company.webp";

const CompanyProfileSection = () => {
  return (
    <section
      id="company-profile"
      aria-labelledby="company-profile-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">
          {/* Company Image */}
          <figure className="m-0">
            <img
              src={AboutCompanyImage}
              alt="Fasilitas perusahaan Hubei Luxiang Chemical Technology"
              className="h-72 w-full rounded-2xl object-cover md:h-96"
            />
          </figure>

          {/* Company Profile */}
          <article className="flex flex-col">
            <header className="mb-6">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-header">
                Profil Perusahaan
              </span>

              <h2
                id="company-profile-heading"
                className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl"
              >
                Tentang Hubei Luxiang Chemical Technology Co., Ltd.
              </h2>
            </header>

            <div className="space-y-5 text-base leading-relaxed text-zinc-600">
              <p>
                Hubei Luxiang Chemical Technology Co., Ltd. adalah perusahaan
                yang bergerak di bidang produksi, pengolahan, penjualan,
                konsultasi teknis, dan layanan material konstruksi, khususnya
                aditif aspal dan material pemeliharaan jalan dan jembatan.
              </p>

              <p>
                Didirikan pada tahun 2015, perusahaan kami terus berinovasi
                untuk menghadirkan produk berkualitas tinggi dan solusi
                infrastruktur yang andal.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
