import Eyebrow from "../ui/Eyebrow.jsx";
import CapabilityCard from "../cards/CapabilityCard.jsx";
import { capabilities } from "../../data/home.js";

export default function Capabilities() {
  return (
    <section className="w-full py-24 bg-brand-surfaceLight border-b border-brand-border" id="capabilities">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <Eyebrow>Industrial Facilities</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">Manufacturing Capabilities</h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-white border border-brand-border text-xs font-semibold text-brand-charcoal/70 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-copper"></span>
            <span>Draft Categories — Subject to Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.num} {...cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
