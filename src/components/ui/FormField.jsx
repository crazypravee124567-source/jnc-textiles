// Label + control wrapper. Pass any input/select/textarea as children.
export default function FormField({ label, children, className = "" }) {
  return (
    <div className={className}>
      <label className="text-xs font-bold uppercase text-on-surface-variant block mb-1">{label}</label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full border border-outline-variant px-3 py-2 text-sm rounded-lg";
