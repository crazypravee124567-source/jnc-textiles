import { Link } from "react-router-dom";
import { heroImage } from "../../data/company.js";
import { heroStats } from "../../data/home.js";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy text-brand-white min-h-[860px] flex flex-col justify-between">
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-35"
        style={{ backgroundImage: `url('${heroImage}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/55"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent pointer-events-none"></div>

      <div className="relative max-w-[1360px] mx-auto px-6 pt-24 pb-16 w-full flex-grow flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-brand-charcoal/60 border border-brand-beige/20 backdrop-blur-md rounded-lg">
            <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-beige">
              Selambarayampalayam, Coimbatore • Tamil Nadu, India
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-manrope">
            From Cotton to <br />
            <span className="text-brand-beige">Quality Yarn.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-white/80 font-normal leading-relaxed max-w-2xl font-inter">
            Textile manufacturing and yarn production in Coimbatore, Tamil Nadu. Delivering consistent staple length, tensile strength, and industrial reliability across global supply chains.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/manufacturing"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-copper hover:bg-brand-copperDark text-white px-7 py-3.5 text-[14px] font-bold tracking-wider uppercase transition-colors shadow-sm rounded-lg"
            >
              <span>Explore Manufacturing</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-brand-beige border border-brand-beige/50 px-7 py-3.5 text-[14px] font-bold tracking-wider uppercase transition-colors rounded-lg"
            >
              <span>Contact Our Team</span>
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/10 bg-brand-charcoal/80 backdrop-blur-md">
        <div className="max-w-[1360px] mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {heroStats.map((s, i) => (
              <div key={s.label} className={`flex flex-col pr-4 ${i > 0 ? "sm:pl-6 pt-4 sm:pt-0" : ""}`}>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-copper">{s.label}</span>
                <span className="text-lg font-bold text-white mt-1">{s.value}</span>
                <span className="text-xs text-white/60 mt-0.5">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
