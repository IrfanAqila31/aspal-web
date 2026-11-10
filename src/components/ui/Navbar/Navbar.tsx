import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Daftar menu navbar — cukup definisikan di satu tempat
const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/about" },
  { label: "Produk", to: "/products" },
  { label: "Aplikasi", to: "/applications" },
  { label: "Kontak Kami", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900/40 backdrop-blur-md text-slate-100 w-full fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold uppercase">
          Hubei Luxiang
        </NavLink>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "text-yellow-400 border-b border-yellow-400 pb-1" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col px-4 pb-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${isActive ? "text-yellow-400" : "text-slate-100 hover:text-teks/70"}`
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