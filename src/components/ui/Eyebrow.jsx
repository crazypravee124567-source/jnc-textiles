// Small copper label with a leading line, used above section titles
export default function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-brand-copper font-bold text-xs uppercase tracking-widest">
      <span className="w-6 h-[1.5px] bg-brand-copper"></span>
      <span>{children}</span>
    </div>
  );
}
