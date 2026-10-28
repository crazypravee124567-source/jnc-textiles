import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { company } from "../../data/company.js";
import { logistics, homeRequirementOptions } from "../../data/home.js";

const labelCls = "text-xs font-bold uppercase text-brand-charcoal tracking-wider";
const inputCls =
  "bg-brand-surfaceLight border border-brand-border px-4 py-3 text-sm text-brand-charcoal rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-copper";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-brand-copper text-[20px] shrink-0 mt-0.5">{icon}</span>
      <div>
        <div className="text-xs font-bold uppercase text-brand-beige">{label}</div>
        {children}
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section className="w-full py-24 bg-brand-surfaceLight" id="contact">
      <div className="max-w-[1360px] mx-auto px-6">
        <SectionHeading
          className="max-w-2xl mb-12"
          eyebrow="Commercial Desk"
          title="Partner With JNC Textiles"
          description="Connect with our commercial desk for yarn sourcing, count specifications, or cotton waste inquiries."
        />

        <div className="bg-brand-white border border-brand-border shadow-sm rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
            <div className="lg:col-span-7 p-8 md:p-12">
              {formSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 text-green-900 rounded-lg">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-700">check_circle</span>
                    Enquiry Received
                  </h4>
                  <p className="text-sm">Commercial enquiry transmitted to JNC Textiles desk. We will respond within 4 business hours.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Full Name *">
                      <input className={inputCls} placeholder="e.g. S. Rajendran" required type="text" />
                    </Field>
                    <Field label="Company / Mill Name *">
                      <input className={inputCls} placeholder="e.g. Premier Knits Ltd" required type="text" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Requirement Category *">
                      <select className={inputCls}>
                        {homeRequirementOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Quantity / Volume *">
                      <input className={inputCls} placeholder="e.g. 5 Metric Tons / Trial Cones" required type="text" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Phone / WhatsApp *">
                      <input className={inputCls} placeholder="+91 94422 00000" required type="tel" />
                    </Field>
                    <Field label="Email Address *">
                      <input className={inputCls} placeholder="procurement@company.com" required type="email" />
                    </Field>
                  </div>
                  <Field label="Technical Specifications & Delivery Destination">
                    <textarea className={inputCls} rows={3} placeholder="Include count preference, CSP rating, packaging method (cones / palletized), or target delivery timeline..."></textarea>
                  </Field>
                  <button className="inline-flex items-center justify-center gap-2.5 bg-brand-navy hover:bg-brand-copper text-white px-8 py-4 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm rounded-lg" type="submit">
                    <span>Transmit Business Enquiry</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-brand-navy text-white p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-copper uppercase tracking-wider block mb-1">Direct Contacts</span>
                  <h3 className="text-2xl font-extrabold text-white">Selambarayampalayam Mill Dispatch</h3>
                </div>
                <div className="space-y-4 pt-2">
                  <InfoRow icon="location_on" label="Factory Address">
                    <p className="text-sm text-white/80 leading-relaxed font-inter mt-0.5">{company.addressLong}</p>
                  </InfoRow>
                  <InfoRow icon="call" label="Phone & Dispatch Line">
                    <p className="text-sm text-white/80 font-mono mt-0.5">{company.phoneOps} / {company.phoneDispatch}</p>
                  </InfoRow>
                  <InfoRow icon="mail" label="Commercial Sourcing Desk">
                    <p className="text-sm text-white/80 font-inter mt-0.5">{company.email}</p>
                  </InfoRow>
                  <InfoRow icon="schedule" label="Operating & Audit Hours">
                    <p className="text-sm text-white/80 font-inter mt-0.5">{company.auditHoursLong}</p>
                  </InfoRow>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 bg-brand-charcoal/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-copper animate-ping"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-beige">Logistics Hub Connectivity</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/70 font-inter">
                  {logistics.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
