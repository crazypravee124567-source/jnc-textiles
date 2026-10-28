export default function StageCard({ step, icon, title, desc, m1, m2 }) {
  return (
    <div className="bg-white border border-[#D8C3A5] p-8 flex flex-col justify-between group hover:border-secondary transition-colors duration-300 rounded-lg">
      <div>
        <div className="flex items-center justify-between border-b border-[#D8C3A5]/60 pb-4 mb-6">
          <span className="text-xs tracking-[0.2em] uppercase text-secondary font-extrabold">{step}</span>
          <span className="material-symbols-outlined text-secondary">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-primary-container mb-3">{title}</h3>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-6">{desc}</p>
      </div>
      <div className="pt-4 border-t border-[#D8C3A5]/60 text-xs text-on-surface-variant space-y-1.5 font-mono">
        <div className="flex justify-between"><span>METRIC 1:</span> <span className="font-bold text-primary-container">{m1}</span></div>
        <div className="flex justify-between"><span>METRIC 2:</span> <span className="font-bold text-primary-container">{m2}</span></div>
      </div>
    </div>
  );
}
