import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "../../../data/translation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, currentLang, toggleLanguage } = useTranslation();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about-us" },
    { label: t.nav.products, to: "/products" },
    { label: t.nav.applications, to: "/applications" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <header className="bg-slate-900/40 backdrop-blur-md text-slate-100 w-full fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        

        <NavLink to="/" className="text-xl font-bold uppercase tracking-wider">
          HUBEI <span className="text-yellow-400">LUXIANG</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-yellow-400 border-b border-yellow-400 pb-1"
                        : "hover:text-yellow-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-600/80 bg-slate-800/60 hover:border-yellow-400 text-xs font-bold transition duration-300 cursor-pointer active:scale-95"
            aria-label="Ganti Bahasa / Switch Language"
          >
            <Globe size={14} className="text-yellow-400" />
            <span className={currentLang === "id" ? "text-yellow-400" : "text-slate-400"}>
              ID
            </span>
            <span className="text-slate-600">/</span>
            <span className={currentLang === "en" ? "text-yellow-400" : "text-slate-400"}>
              EN
            </span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs font-bold"
            aria-label="Ganti Bahasa"
          >
            <span className={currentLang === "id" ? "text-yellow-400" : "text-slate-400"}>
              ID
            </span>
            <span className="text-slate-600">/</span>
            <span className={currentLang === "en" ? "text-yellow-400" : "text-slate-400"}>
              EN
            </span>
          </button>

          <button
            className="p-1 text-slate-100 hover:text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col px-4 pb-4 gap-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 list-none m-0 pt-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium block py-1 ${
                    isActive ? "text-yellow-400 font-bold" : "text-slate-200 hover:text-yellow-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;