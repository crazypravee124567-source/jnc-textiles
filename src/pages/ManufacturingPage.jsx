import StageCard from "../components/cards/StageCard.jsx";
import { manufacturingStages, yarnSpecs, manufacturingHeroImage } from "../data/manufacturing.js";

const th = "py-4 px-6";
const td = "py-4 px-6";

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-primary-container overflow-hidden pt-12 pb-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={manufacturingHeroImage} className="w-full h-full object-cover mix-blend-luminosity" alt="Spinning process" />
        </div>
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-tertiary-fixed-dim/20 mb-6 rounded-lg">
            <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-tertiary-fixed-dim font-bold">
              HOME / MANUFACTURING • SELAMBARAYAMPALAYAM, COIMBATORE
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Precision Engineering Behind Every Spool.
          </h1>
          <p className="text-white/80 max-w-2xl text-lg font-normal leading-relaxed mt-4">
            From uncompressed virgin bale opening to high-cadence ring spinning and laser-spliced cone winding—explore our end-to-end industrial manufacturing process.
          </p>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28 bg-[#F8F7F2]">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#D8C3A5]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-secondary font-bold block mb-2">METHODICAL EXECUTION</span>
              <h2 className="text-3xl font-extrabold text-primary-container tracking-tight">Six-Stage Precision Flow</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Continuous quality auditing and strict humidity stabilization govern every transition from bale break to automated palletization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingStages.map((s) => (
              <StageCard key={s.step} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-[#F0EBE1] border-t border-[#D8C3A5]">
        <div className="max-w-[1360px] mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-primary-container mb-8">Active Commercial Yarn Specifications</h2>
          <div className="bg-white border border-[#D8C3A5] overflow-x-auto rounded-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider">
                  <th className={th}>Yarn Count Category</th>
                  <th className={th}>Grade / Application</th>
                  <th className={th}>Average Lea CSP</th>
                  <th className={th}>Count CV%</th>
                  <th className={th}>Packaging Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DEC9]">
                {yarnSpecs.map((r) => (
                  <tr key={r.count}>
                    <td className={`${td} font-semibold`}>{r.count}</td>
                    <td className={td}>{r.grade}</td>
                    <td className={`${td} font-mono`}>{r.csp}</td>
                    <td className={`${td} font-mono`}>{r.cv}</td>
                    <td className={td}>{r.pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
