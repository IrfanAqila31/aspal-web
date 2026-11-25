import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      {/* ── Desktop Nav ── */}
      <nav className="relative max-w-7xl mx-auto px-4 py-4 hidden md:flex items-center justify-between">

        {/* KIRI: Logo */}
        <NavLink to="/" className="text-xl font-bold uppercase tracking-wider shrink-0">
          HUBEI <span className="text-yellow-400">LUXIANG</span>
        </NavLink>

        {/* TENGAH: Nav Links (absolute center) */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-7 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-medium text-sm transition-colors ${
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

        {/* KANAN: CTA Button + Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* CTA Button */}
          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-xs font-bold transition duration-300 active:scale-95"
          >
            {t.buttons.consultNow}
          </Link>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-600/80 bg-slate-800/60 hover:border-yellow-400 text-xs font-bold transition duration-300 cursor-pointer active:scale-95"
            aria-label="Ganti Bahasa / Switch Language"
          >
            <span className={currentLang === "id" ? "text-yellow-400" : "text-slate-400"}>ID</span>
            <span className="text-slate-600">/</span>
            <span className={currentLang === "en" ? "text-yellow-400" : "text-slate-400"}>EN</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Nav ── */}
      <nav className="md:hidden max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold uppercase tracking-wider">
          HUBEI <span className="text-yellow-400">LUXIANG</span>
        </NavLink>

        {/* Kanan mobile: Lang Toggle + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-600 bg-slate-800 text-xs font-bold"
            aria-label="Ganti Bahasa"
          >
            <span className={currentLang === "id" ? "text-yellow-400" : "text-slate-400"}>ID</span>
            <span className="text-slate-600">/</span>
            <span className={currentLang === "en" ? "text-yellow-400" : "text-slate-400"}>EN</span>
          </button>

          <button
            className="p-1 text-slate-100 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <ul className="flex flex-col px-4 pt-3 pb-4 gap-1 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-medium block py-2.5 border-b border-slate-800 last:border-0 text-sm ${
                      isActive
                        ? "text-yellow-400 font-bold"
                        : "text-slate-200 hover:text-yellow-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* CTA di mobile dropdown */}
          <div className="px-4 pb-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-sm font-bold transition duration-300"
            >
              {t.buttons.consultNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
