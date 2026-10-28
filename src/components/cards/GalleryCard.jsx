export default function GalleryCard({ item, onOpen }) {
  return (
    <div className="bg-white border border-outline-variant/40 shadow-sm overflow-hidden flex flex-col justify-between group rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => onOpen(item)}
          className="absolute bottom-2 right-2 p-2 bg-primary-container text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span className="material-symbols-outlined text-[18px]">fullscreen</span>
        </button>
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block mb-1">{item.badge}</span>
          <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
        </div>
        <div className="mt-4 pt-3 border-t border-surface-container flex items-center justify-between text-[11px] text-on-surface-variant">
          <span className="uppercase font-bold">{item.category}</span>
          <button onClick={() => onOpen(item)} className="text-secondary font-bold hover:underline">
            View Full
          </button>
        </div>
      </div>
    </div>
  );
}
