import { NavLink } from "react-router-dom";
import AboutImage from "../../../../assets/images/home/about-image.webp";

const AboutSection = () => {
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
                Tentang Kami
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 uppercase">
                HUBEI LUXIANG CHEMICAL TECHNOLOGY CO., LTD.
              </h1>
            </header>
            <p className="text-base text-zinc-600 mb-8 leading-relaxed max-w-lg">
              Hubei Luxiang Chemical Technology Co., Ltd. merupakan perusahaan
              manufaktur yang bergerak di bidang produksi, pengolahan, dan
              penjualan bahan aditif aspal serta material pemeliharaan jalan dan
              jembatan. Berdiri sejak 2015, perusahaan berkomitmen mengembangkan
              produk berkualitas untuk mendukung pembangunan infrastruktur yang
              lebih baik.
            </p>
            <ul className="space-y-4 mb-10" aria-label="Keunggulan kami">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check text-zinc-600 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-zinc-700 text-sm md:text-base font-medium">
                  Didukung tim teknis dan R&D berpengalaman
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check text-zinc-600 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-zinc-700 text-sm md:text-base font-medium">
                  Penjualan langsung dari produsen
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check text-zinc-600 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-zinc-700 text-sm md:text-base font-medium">
                  Proses produksi dan pemeriksaan kualitas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check text-zinc-600 h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-zinc-700 text-sm md:text-base font-medium">
                  Dukungan teknis dan layanan purna jual
                </span>
              </li>
            </ul>
            <footer>
              <NavLink
                to="/about-us"
                className="group inline-flex gap-3 items-center justify-center px-8 py-3 bg-zinc-900 hover:bg-zinc-700 text-zinc-50 font-medium hover:text-zinc-50 cursor-pointer rounded-full transition duration-300"
              >
                Pelajari Lebih Lanjut
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 h-5 w-5 group-hover:translate-x-1 transition duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
