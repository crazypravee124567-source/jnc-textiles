import { Link } from "react-router-dom";
import { company } from "../../data/company.js";

// variant "light" = header (navy box), "dark" = footer (copper box)
export default function Logo({ variant = "light" }) {
  const isHeader = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-3.5 group">
      <div
        className={
          isHeader
            ? "w-10 h-10 bg-brand-navy flex items-center justify-center text-brand-beige font-extrabold text-xl tracking-tighter border border-brand-navy group-hover:bg-brand-copper transition-colors"
            : "w-9 h-9 bg-brand-copper text-white flex items-center justify-center font-extrabold text-base tracking-tighter"
        }
      >
        JNC
      </div>
      <div className="flex flex-col">
        <span className={isHeader ? "font-extrabold text-xl tracking-tight text-brand-navy font-manrope" : "font-extrabold text-lg tracking-tight text-white font-manrope"}>
          {company.name}
        </span>
        <span className={isHeader ? "text-[10px] tracking-[0.22em] uppercase font-bold text-brand-copper" : "text-[9px] tracking-[0.2em] uppercase font-bold text-brand-beige"}>
          {company.tagline}
        </span>
      </div>
    </Link>
  );
}
