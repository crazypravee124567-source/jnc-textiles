import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { navLinks } from "../../data/company.js";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F2]/95 backdrop-blur-md border-b border-brand-border/80 transition-all duration-200">
      <div className="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium tracking-wide">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`py-1 transition-colors ${
                  isActive
                    ? "text-brand-copper font-bold border-b-2 border-brand-copper"
                    : "text-brand-charcoal/80 hover:text-brand-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-copper text-brand-white px-5 py-2.5 text-[13px] font-bold tracking-wider uppercase transition-all duration-200 shadow-sm border border-brand-navy rounded-lg"
          >
            <span>Business Enquiry</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
