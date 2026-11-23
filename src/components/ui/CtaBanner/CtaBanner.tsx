import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Handshake, Zap } from "lucide-react";
import bgCta from "../../../assets/images/about/about-hero.webp";

const features = [
  {
    icon: ShieldCheck,
    title: "Produk Berkualitas",
  },
  {
    icon: Handshake,
    title: "Dukungan Teknis Profesional",
  },
  {
    icon: Zap,
    title: "Pengiriman Tepat Waktu",
  },
];

const CtaBanner = () => {
  return (
    <aside
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-800/5 py-16 md:py-20 text-white border-b border-slate-800/90"
    >
      <img
        src={bgCta}
        alt="Latar belakang jalan raya infrastruktur aspal"
        className="absolute inset-0 h-full w-full object-cover object-center -z-10"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/90 to-slate-900/80 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-0.5 w-6 bg-yellow-400" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 md:text-sm">
                Konsultasi Produk
              </span>
            </div>

            <h2
              id="cta-heading"
              className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl"
            >
              Butuh informasi lebih lanjut mengenai produk kami?
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
              Tim kami siap membantu Anda dengan informasi produk, spesifikasi
              teknis, dan solusi terbaik untuk kebutuhan proyek Anda.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg active:scale-95"
            >
              <span>Hubungi Kami</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <ul className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-2 border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 list-none p-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={feature.title}
                    className={`flex flex-col items-center text-center px-4 w-full ${
                      index !== features.length - 1
                        ? "sm:border-r sm:border-white/20"
                        : ""
                    }`}
                  >
                    <div
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-inner"
                      aria-hidden="true"
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold leading-snug text-slate-100 md:text-sm max-w-30">
                      {feature.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CtaBanner;
