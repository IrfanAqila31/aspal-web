import { Link } from "react-router-dom";
import { useTranslation } from "../../../data/translation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2 pr-4">
            <Link
              to="/"
              className="flex flex-col mb-6"
              aria-label="Hubei Luxiang"
            >
              <span className="uppercase text-xl font-bold tracking-widest text-white leading-none">
                HUBEI LUXIANG
              </span>
              <span className="text-[11px] tracking-[0.2em] mt-1 opacity-70 uppercase font-medium text-slate-200">
                {t.footer.tagline}
              </span>
            </Link>

            <p className="text-slate-400 font-normal leading-relaxed mb-8 max-w-sm text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigasi Dinamis */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-4 list-none p-0">
              {[
                { label: t.nav.home, to: "/" },
                { label: t.nav.about, to: "/about-us" },
                { label: t.nav.products, to: "/products" },
                { label: t.nav.applications, to: "/applications" },
                { label: t.nav.contact, to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              {t.footer.productsTitle}
            </h3>
            <ul className="space-y-4 list-none p-0">
              {[
                "Anti-Rutting Agent",
                "Anti-Stripping Agent",
                "Warm Mix Agent",
                "Lignin Fiber",
                "Asphalt Rejuvenator",
              ].map((name) => (
                <li key={name}>
                  <Link
                    to="/products"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:budi732001@gmail.com"
                  className="hover:text-slate-200 transition-colors"
                >
                  budi732001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href="https://wa.me/628175797344"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-200 transition-colors"
                >
                  +62 817-5797-344 (Budi)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex justify-center items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Hubei Luxiang. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;