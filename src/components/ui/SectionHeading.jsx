import Eyebrow from "./Eyebrow.jsx";

export default function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">{title}</h2>
      {description && <p className="text-brand-charcoal/75 text-sm font-inter">{description}</p>}
    </div>
  );
}
