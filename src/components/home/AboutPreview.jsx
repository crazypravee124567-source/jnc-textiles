import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow.jsx";
import { heroImage } from "../../data/company.js";

function FeatureTile({ icon, title, text }) {
  return (
    <div className="p-4 bg-brand-surfaceLight border border-brand-border rounded-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-brand-navy text-brand-beige flex items-center justify-center">
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </div>
        <h4 className="font-bold text-brand-navy text-sm">{title}</h4>
      </div>
      <p className="text-xs text-brand-charcoal/70 leading-relaxed font-inter">{text}</p>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="w-full py-24 bg-brand-white border-b border-brand-border" id="about">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-brand-charcoal border border-brand-border shadow-sm group rounded-lg">
              <img
                alt="Automated Ring Spinning Production Floor at JNC Textiles in Selambarayampalayam, Coimbatore"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 bg-brand-navy/95 border border-brand-border/30 px-4 py-2 backdrop-blur-md flex items-center gap-2 rounded-lg">
                <span className="material-symbols-outlined text-brand-copper text-[16px]">factory</span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-white">Operational Facility • Selambarayampalayam</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <Eyebrow>About JNC Textiles</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
                Generational Heritage Meets Automated Spinning Precision
              </h2>
            </div>
            <p className="text-brand-charcoal/80 text-base leading-relaxed font-inter">
              Rooted in the renowned textile manufacturing hub of Selambarayampalayam, Coimbatore, JNC Textiles is committed to uncompromising precision engineering and industrial consistency. We convert hand-selected virgin cotton bales into superior ring-spun yarns that power weaving mills and premium circular knitters across India and overseas.
            </p>
            <p className="text-brand-charcoal/80 text-base leading-relaxed font-inter">
              Operating right in South India's cotton processing heartland, our plant combines continuous high-speed spindle operations with tight lot-level traceability, eliminating structural yarn imperfections before cones are palletized.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <FeatureTile icon="precision_manufacturing" title="Automated Machinery" text="High-speed automated ring frames ensure tight CV% tolerances and minimal yarn hairiness across all count batches." />
              <FeatureTile icon="thermostat" title="Climate Controls" text="Continuous atomized humidification maintained at 65% RH preserves natural cotton staple elasticity and elongation strength." />
            </div>

            <div className="pt-2">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-copper transition-colors uppercase tracking-wider group">
                <span>Learn more about mill operations</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
