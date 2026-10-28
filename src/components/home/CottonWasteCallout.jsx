import { Link } from "react-router-dom";

const highlights = [
  { label: "Packaging Standard", value: "160–170 kg Bales", sub: "Uniform hydraulic press baling" },
  { label: "Quality Metric", value: "High Cleanliness Ratio", sub: "Zero foreign contamination" },
  { label: "Supply Continuity", value: "Consistent Availability", sub: "Year-round dispatch from yard" },
];

export default function CottonWasteCallout() {
  return (
    <section className="w-full py-24 bg-brand-charcoal text-white relative overflow-hidden" id="cotton-waste">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-charcoal to-brand-navy opacity-90"></div>
      <div className="relative max-w-[1360px] mx-auto px-6">
        <div className="bg-brand-navy/80 border border-brand-beige/20 p-8 md:p-14 shadow-2xl backdrop-blur-sm rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-copper/20 border border-brand-copper/40 text-brand-beige text-xs font-bold uppercase tracking-widest rounded-lg">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                <span>Industrial By-Product Division</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Certified Cotton Waste Supply</h2>
              <p className="text-base text-white/80 leading-relaxed font-inter max-w-3xl">
                JNC Textiles systematically collects and mechanically grades manufacturing byproducts directly from our spinning lines. We supply clean, unadulterated comber noil, card fly, flat strips, droppings, and hard yarn waste tailored for open-end rotor spinning, medical absorbent cotton, paper pulp, and technical non-woven applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {highlights.map((h) => (
                  <div key={h.label} className="p-4 bg-brand-charcoal/60 border border-white/10 rounded-lg">
                    <div className="text-xs uppercase text-brand-beige font-bold tracking-wider">{h.label}</div>
                    <div className="text-lg font-bold text-white mt-1">{h.value}</div>
                    <div className="text-xs text-white/60">{h.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="w-full bg-brand-charcoal border border-white/10 p-6 space-y-5 rounded-lg">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-copper uppercase tracking-wider block">Direct Mill Quotations</span>
                  <h4 className="text-lg font-bold text-white">Open for Container &amp; Truckload Bids</h4>
                  <p className="text-xs text-white/70 font-inter">Supplying major open-end spinning centers across Tamil Nadu, Gujarat, and overseas ports.</p>
                </div>
                <Link to="/cotton-waste" className="w-full inline-flex items-center justify-center gap-2 bg-brand-copper hover:bg-brand-copperDark text-white py-3.5 px-6 font-bold text-xs uppercase tracking-wider transition-colors shadow-md text-center rounded-lg">
                  <span>Enquire About Cotton Waste</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
