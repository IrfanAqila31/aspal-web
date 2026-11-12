import { NavLink } from "react-router-dom";
import heroImage from "../../../../assets/images/home/bg-hero.webp";

const Home = () => {
  return (
    <section className="pt-15 relative w-full h-180 md:h-170 lg:h-160 flex items-center bg-cover bg-center bg-no-repeat">
      <img
        src={heroImage}
        alt="Aspal"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] md:object-center -z-10"
      />

      <div
        className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent to-80% md:from-slate-900/90 md:from-25% md:via-slate-900/50 md:to-transparent md:to-80%"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <header className="max-w-3xl drop-shadow-lg">
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl font-extrabold text-slate-50 leading-tight tracking-wide mb-4"
          >
            Solusi Aditif Aspal Berkualitas untuk Infrastruktur yang{" "} <br />
            <span className="text-yellow-400">Lebih Baik</span>
          </h1>
          <p className="text-sm md:text-lg text-slate-100 mb-7 leading-relaxed tracking-wide max-w-xl">
            Hubei Luxiang menyediakan berbagai bahan aditif aspal dan material
            pemeliharaan jalan berkualitas untuk mendukung pembangunan
            infrastruktur yang lebih kuat, tahan lama, dan berkelanjutan.
          </p>

          <nav
            aria-label="Hero navigation"
            className="flex flex-wrap items-center gap-4"
          >
            <NavLink
              to="contact-us"
              className="group flex gap-3 items-center justify-center px-8 py-3 bg-slate-100 hover:bg-slate-600 text-slate-900 font-medium hover:text-slate-50 cursor-pointer rounded-full transition duration-300"
            >
              Hubungi Kami
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
          </nav>
        </header>
      </div>
    </section>
  );
};
export default Home;
