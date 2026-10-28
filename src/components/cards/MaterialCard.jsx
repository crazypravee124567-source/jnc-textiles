export default function MaterialCard({ material, onEnquire }) {
  const { name, code, desc, staple, trash, bale } = material;
  return (
    <div className="bg-surface-container-lowest p-6 border border-outline-variant/40 flex flex-col justify-between rounded-lg shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase text-primary bg-surface-container px-2 py-0.5 rounded-lg">{code}</span>
          <span className="text-[10px] uppercase font-bold text-secondary">Active Lot</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{desc}</p>
        <div className="bg-surface-container-low p-3 mb-4 text-xs space-y-1 rounded-lg">
          <div className="flex justify-between"><span>Staple Length:</span><span className="font-bold">{staple}</span></div>
          <div className="flex justify-between"><span>Trash Ratio:</span><span className="font-bold">{trash}</span></div>
          <div className="flex justify-between"><span>Baling:</span><span className="font-bold">{bale}</span></div>
        </div>
      </div>
      <button
        onClick={() => onEnquire(name)}
        className="w-full py-2.5 bg-primary-container text-on-primary hover:bg-secondary transition-colors text-xs font-bold uppercase tracking-wider rounded-lg"
      >
        Enquire for this Grade
      </button>
    </div>
  );
}
