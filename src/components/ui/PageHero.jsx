// Simple navy hero used by inner pages (Cotton Waste, Gallery, Contact)
export default function PageHero({ breadcrumb, title, description, className = "py-20" }) {
  return (
    <section className={`w-full bg-primary-container text-on-primary ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6">
        <span className="text-xs uppercase tracking-widest text-tertiary-fixed-dim block mb-2 font-bold">
          {breadcrumb}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{title}</h1>
        <p className="text-sm sm:text-base text-on-primary-container max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
