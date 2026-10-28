export default function CapabilityCard({ num, icon, title, desc, metric }) {
  return (
    <div className="bg-brand-white p-7 border border-brand-border hover:border-brand-copper hover:shadow-lg transition-all duration-300 flex flex-col justify-between group rounded-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-2xl text-brand-beige group-hover:text-brand-copper transition-colors">{num}</span>
          <div className="w-10 h-10 bg-brand-navy text-brand-beige flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-copperDark transition-colors">{title}</h3>
        <p className="text-sm text-brand-charcoal/75 leading-relaxed font-inter">{desc}</p>
      </div>
      <div className="mt-8 pt-4 border-t border-brand-border/60">
        <div className="text-[11px] font-bold uppercase tracking-wider text-brand-copper">Key Metric</div>
        <div className="text-xs font-semibold text-brand-charcoal mt-0.5">{metric}</div>
      </div>
    </div>
  );
}
