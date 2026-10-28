export default function ProcessStepCard({ step, tag, title, text, sub }) {
  return (
    <div className="bg-brand-surfaceLight border border-brand-border p-5 flex flex-col justify-between hover:border-brand-copper transition-all rounded-lg">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="w-12 h-12 bg-brand-navy text-white text-base font-bold flex items-center justify-center font-mono rounded-lg">
            {step}
          </span>
          <span className="text-xs font-bold text-brand-copper uppercase tracking-wider">{tag}</span>
        </div>
        <h4 className="font-bold text-base text-brand-navy pt-1">{title}</h4>
        <p className="text-xs text-brand-charcoal/75 leading-relaxed font-inter">{text}</p>
      </div>
      <div className="mt-4 pt-2 text-[11px] text-brand-copper font-medium">{sub}</div>
    </div>
  );
}
