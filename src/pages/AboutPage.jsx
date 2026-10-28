import { Link } from "react-router-dom";

const IMG = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLXTJNusD5_7p3BROyR9b2KkMrBuJ30dnl05K693aLyMCKDCxg_IjATrL9wCkBeXk4aU8mUl0Y96zF34srTOi6lcIrp3BbStq64D9r3riJdwF2dx79egNba01kLPQQn2KQ3U4clp7KKvnUIgfftrZQ0xw_W2H_dRI3C7XAMAuOcTPPKixYK5lux_6InndieuFS4_r5cNHtAgqWPBrUlUvir9PtGYHim3XmbDOQO8V2",
  lab: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1Iy8KiXaaMfXFDrltk15eq8kCXeJONb-Yl0AFjGSI2o3w7UxuuOeNGF13DjpfgvhXvGDavqrpN37KzkRS-9da-kuyC43OHySeiHl7gSmJMOzXSVO95sNCDhVTQr3tI4zPv2NcjBzKBn2vclc4ZbxzcI98LPSSpZPGW2bFQYj0HRTejfDqVuxX_OHM0BW6cGlyZn7bcH6Vu7qSsnSyF8v6EZW6NoN-6d5J3u3O2ww4",
  warehouse: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXMhKhIsZfUfnpXLOuz5m9mTP_o6wdVDHNKjia1YgWn7mrqJx7G4CoEfl6Nxo_EG2sFXxqgDX9iG53ZAITX04oXy32VFu6e3lV_2JJ8JA8HfwaqXI80pz7rNzJ2ndsgekZEqjZHavqpjsFMoDzUfYmU28SyPGLeLhcCkhlHJlYqwqvw3Bt1-1wsYRNH0RackRPH9RYmOi19l4C0MgoWfpTZbkMnRX8JCB66waM_380",
};

const anchors = [
  { href: "#overview", icon: "domain", label: "Corporate Overview" },
  { href: "#infrastructure", icon: "precision_manufacturing", label: "Spinning Infrastructure" },
  { href: "#approach", icon: "recycling", label: "Resource Recovery" },
];

const miniCards = [
  { icon: "location_on", title: "Strategic Location", text: "Selambarayampalayam hub close to primary spinning belts." },
  { icon: "tune", title: "Fiber Standards", text: "Strict parameters from raw cotton to finished cone winding." },
  { icon: "handshake", title: "Direct Commerce", text: "Bulk yarn contracts and segregated waste procurement." },
];

const facilityCards = [
  { tag: "01 // MILL FOOTPRINT", title: "[Plant Area: XX,XXX Sq. Ft.]", text: "To be Confirmed upon detailed formal facility disclosure." },
  { tag: "02 // INSTALLED CAPACITY", title: "[Spindles: XX,XXX Spindles]", text: "To be Confirmed upon formal operational audit." },
  { tag: "03 // TESTING BENCHMARK", title: "[Premier / Uster Calibrated Lab]", text: "Roving twist tests, tensile yarn elongation, and yarn clearers." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-25 object-center mix-blend-luminosity scale-105" src={IMG.hero} alt="Spinning floor" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-primary-container/90"></div>
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-16 pb-20 md:pb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2.5 h-2.5 bg-secondary rounded-full"></span>
            <span className="text-xs uppercase tracking-widest text-tertiary-fixed-dim">HOME / ABOUT US • SELAMBARAYAMPALAYAM, COIMBATORE</span>
          </div>
          <div className="max-w-4xl space-y-5">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-on-primary tracking-tight leading-none uppercase">
              About <span className="text-tertiary-fixed-dim">JNC Textiles</span>
            </h1>
            <p className="text-lg text-on-primary-container max-w-2xl leading-relaxed">
              Textile manufacturing and precision yarn production in Coimbatore, Tamil Nadu. Rooted in disciplined spinning methodology, automated sliver processing, and certified fiber distribution.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-on-primary-container/20 flex flex-wrap items-center gap-3">
            {anchors.map((a) => (
              <a key={a.href} className="inline-flex items-center gap-2 px-4 py-2 bg-on-primary-container/10 hover:bg-secondary text-on-primary text-xs uppercase tracking-wider transition-colors rounded-lg" href={a.href}>
                <span className="material-symbols-outlined text-[15px]">{a.icon}</span>
                <span>{a.label}</span>
              </a>
            ))}
            <Link className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-on-primary text-xs uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors ml-auto rounded-lg" to="/contact">
              <span className="material-symbols-outlined text-[15px]">contacts</span>
              <span>Commercial Desk</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full py-20 lg:py-24 bg-surface text-on-surface" id="overview">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden bg-surface-container shadow-md group rounded-lg">
                <img className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" src={IMG.lab} alt="QC Lab" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-primary-container text-on-primary backdrop-blur-sm shadow-sm flex items-center justify-between rounded-lg">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-container block">Quality Assurance Center</span>
                    <span className="text-base font-bold text-on-primary">Operational Facility — Coimbatore Mills</span>
                  </div>
                  <div className="w-9 h-9 bg-secondary flex items-center justify-center text-on-primary shrink-0 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">science</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-on-surface-variant text-xs uppercase tracking-widest">
                <span>Lat: 11.0168° N, Long: 76.9558° E</span>
                <span>Uster &amp; CSP Validated Environment</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">— COMPANY OVERVIEW</span>
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                  Precision Textile Manufacturing Rooted in Coimbatore's Industrial Heartland
                </h2>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Established in Selambarayampalayam, Coimbatore, <strong className="text-on-surface font-semibold">JNC TEXTILES</strong> operates modern ring-spinning systems and systematic fiber opening lines engineered to cater to domestic knitting and export weaving hubs. We integrate rigorous fiber grading with precision mechanical handling to yield balanced tensile count consistency.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our operational ethos pairs time-tested textile craft with strict instrumentation. From careful staple-length preservation to electronically scrubbed autoconing, every spool follows calibrated mill workflows engineered for maximum knotless stability.
              </p>
              <div className="p-4 bg-surface-container-high text-on-surface flex items-start gap-3 rounded-lg" id="approach">
                <span className="material-symbols-outlined text-secondary shrink-0 text-[20px]">verified</span>
                <p className="text-xs text-on-surface-variant">
                  <strong className="text-on-surface font-semibold">Operational Audit Note:</strong> Specific historical milestone chronologies, annual spindle turnover figures, and exact expansion dates are <span className="text-secondary font-semibold">[Subject to Formal Company Confirmation]</span> and validated upon bilateral facility auditing.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {miniCards.map((c) => (
                  <div key={c.title} className="p-4 bg-surface-container-lowest shadow-sm flex flex-col justify-between rounded-lg">
                    <div className="w-8 h-8 bg-surface-container flex items-center justify-center text-primary mb-3 rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xs text-primary uppercase font-bold mb-1">{c.title}</h3>
                      <p className="text-xs text-on-surface-variant">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="w-full py-20 lg:py-24 bg-surface-container text-on-surface" id="infrastructure">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">— INFRASTRUCTURE &amp; FACILITY</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight mt-2">Selambarayampalayam Spinning Facility</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-lg">
              Integrated layout housing raw cotton warehousing, controlled spinning bays, automated cone packing cells, and heavy logistics loading bays.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 relative min-h-[420px] bg-primary-container overflow-hidden shadow-md group rounded-lg">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMG.warehouse} alt="Warehouse" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-on-primary">
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary-container">Material Logistics • Coimbatore</p>
                  <h4 className="text-xl font-bold">Finished Cone Dispatch Warehouse</h4>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-on-primary/10 backdrop-blur-sm px-3.5 py-1.5 text-xs uppercase tracking-wider rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Dispatch Operations
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              {facilityCards.map((c) => (
                <div key={c.tag} className="p-6 bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 rounded-lg">
                  <span className="text-xs uppercase tracking-widest text-secondary font-mono">{c.tag}</span>
                  <div>
                    <h4 className="text-lg font-bold text-primary">{c.title}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-primary-container text-on-primary">
        <div className="max-w-[1360px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Connect With Our Commercial Desk</h2>
          <p className="max-w-2xl mx-auto text-on-primary-container text-sm leading-relaxed">
            Discuss yarn count requirements, arrange an official plant audit to our Selambarayampalayam facility, or enquire regarding certified cotton waste bulk allocations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-fixed-dim text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">Contact Mill Desk</Link>
            <Link to="/manufacturing" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">Review Capabilities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
