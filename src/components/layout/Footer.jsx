import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { company, navLinks, footerCapabilities } from "../../data/company.js";

function FooterHeading({ children }) {
  return (
    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-beige border-b border-white/10 pb-2">
      {children}
    </h4>
  );
}

function ContactLine({ label, value }) {
  return (
    <p>
      <span className="text-brand-beige font-semibold block">{label}</span> {value}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy text-white border-t border-brand-charcoal">
      <div className="max-w-[1360px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-xs text-white/70 leading-relaxed font-inter">{company.addressShort}</p>
            <p className="text-xs text-white/70 leading-relaxed font-inter">
              Precision industrial cotton spinning mills delivering high-tenacity yarns and segregated circular cotton byproducts.
            </p>
            <span className="inline-block text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-brand-charcoal border border-brand-beige/20 text-brand-beige">
              GSTIN: {company.gstin}
            </span>
          </div>

          <div className="space-y-3">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2 text-xs font-medium text-white/80">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link className="hover:text-brand-copper transition-colors" to={l.path}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <FooterHeading>Capabilities</FooterHeading>
            <ul className="space-y-2 text-xs font-medium text-white/80 font-inter">
              {footerCapabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <FooterHeading>Contact Details</FooterHeading>
            <div className="space-y-2 text-xs text-white/80 font-inter">
              <ContactLine label="Mill Operations:" value={company.phoneOps} />
              <ContactLine label="Dispatch Desk:" value={company.phoneDispatch} />
              <ContactLine label="Commercial Email:" value={company.email} />
              <ContactLine label="Plant Audits:" value={company.auditHoursShort} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-inter">
          <span>© {new Date().getFullYear()} JNC Textiles. All rights reserved.</span>
          <span>Selambarayampalayam, Coimbatore, Tamil Nadu, India.</span>
        </div>
      </div>
    </footer>
  );
}
