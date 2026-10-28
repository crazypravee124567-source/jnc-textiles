import { useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import FormField, { inputClass } from "../components/ui/FormField.jsx";
import { company } from "../data/company.js";

const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCiPrGKOEHi6JU4u55ye1xDkGicvdXs8FZIG89ZOFhbWDMKuR5HeIcptQbCmGjO3kJj1AGvVx4Vd4rbH6MJu4mxOhVbaQ1UbUkS4OWeo_DbPSgqz6oFIi_QIPSLsxEadI79QfvCJUxQsNQ3CGfNv7EnLdkqzUxGly7Mt05xoTv2vPwi-bbM2KSno-jWAoAoNSd6nuzf1JNvxXKOvzIP3fQ19cCL5fMn-v7Bm1n6xoFs";

const sectors = [
  "Yarn Supply (Carded / Combed / Speciality)",
  "Cotton Waste & Secondary Fibre Lots",
  "General Commercial / Plant Audit",
];

const distances = [
  ["Tirupur Knitwear Hub:", "~28 km"],
  ["Coimbatore Core:", "~32 km"],
  ["Cochin Seaport Corridor:", "Direct Access"],
];

function InfoCard({ label, children, note }) {
  return (
    <div className="bg-white p-6 shadow-sm border border-outline-variant/40 rounded-lg">
      <span className="text-xs uppercase text-secondary font-bold tracking-wider block mb-1">{label}</span>
      {children}
      <p className="text-xs text-on-surface-variant mt-2">{note}</p>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const c = company.contactPage;

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHero
        breadcrumb="HOME / CONTACT • SELAMBARAYAMPALAYAM, COIMBATORE"
        title="Let's Discuss Your Requirements"
        description="Contact JNC TEXTILES for manufacturing and business enquiries. Direct factory liaison for industrial yarn production schedules and cotton waste lots."
      />

      <div className="max-w-[1360px] mx-auto px-6 -mt-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <InfoCard label="Direct Telephone" note="Commercial desk & mill operations. Direct dial to dispatch coordinator.">
          <a href={c.phoneHref} className="text-2xl font-bold text-primary block hover:text-secondary">{c.phoneDisplay}</a>
        </InfoCard>
        <InfoCard label="Mill Works" note={c.cluster}>
          <div className="text-lg font-bold text-primary">{c.street}</div>
        </InfoCard>
        <InfoCard label="Operating Hours" note="Continuous mill shift operations; commercial visits by appointment.">
          <div className="text-lg font-bold text-primary">{c.hours}</div>
        </InfoCard>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 bg-white p-8 border border-outline-variant/40 shadow-sm rounded-lg">
          <h2 className="text-2xl font-bold text-primary mb-2">Commercial &amp; Manufacturing Enquiry</h2>
          <p className="text-xs text-on-surface-variant mb-6">Submit your specification. Our mill desk will respond within routine shifts.</p>

          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-green-900">
              <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-700">check_circle</span>
                Enquiry Logged
              </h4>
              <p className="text-xs">Your commercial enquiry prototype has been recorded. Direct contact: <strong>{c.phoneDisplay}</strong>.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Full Name *"><input required className={inputClass} placeholder="e.g. S. Ramanathan" /></FormField>
                <FormField label="Company Name *"><input required className={inputClass} placeholder="e.g. Kongu Knitting" /></FormField>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Phone Number *"><input required type="tel" className={inputClass} placeholder="+91 98765 43210" /></FormField>
                <FormField label="Email Address *"><input required type="email" className={inputClass} placeholder="contact@domain.com" /></FormField>
              </div>
              <FormField label="Enquiry Sector">
                <select className={inputClass}>
                  {sectors.map((s) => <option key={s}>{s}</option>)}
                </select>
              </FormField>
              <FormField label="Message / Specifications">
                <textarea required rows={4} className={inputClass} placeholder="Count, volume (MT), delivery schedule..."></textarea>
              </FormField>
              <button type="submit" className="w-full py-3 bg-secondary hover:bg-primary-container text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-lg">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 border border-outline-variant/40 shadow-sm rounded-lg">
            <span className="text-xs uppercase font-bold text-secondary tracking-wider block mb-1">GIS Coordinates</span>
            <div className="text-lg font-bold text-primary mb-3">{c.coordinates}</div>
            <div className="h-48 bg-surface-container relative rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${mapImage}')` }}></div>
              <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-lg">Selambarayampalayam Works</div>
            </div>
            <div className="text-xs text-on-surface-variant space-y-1">
              {distances.map(([k, v]) => (
                <div key={k} className="flex justify-between"><span>{k}</span><span className="font-bold">{v}</span></div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container text-white p-6 rounded-lg shadow-sm">
            <h4 className="text-base font-bold mb-2">Plant Visit Protocol</h4>
            <p className="text-xs text-on-primary-container leading-relaxed">
              Laboratory audit and cotton waste bale inspection require 24-hour advance coordination. Safety helmets issued at gate.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs">
              Desk Extension: <span className="font-bold text-white">{company.phoneOps}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
