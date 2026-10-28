import { useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import FormField, { inputClass } from "../components/ui/FormField.jsx";
import Modal from "../components/ui/Modal.jsx";
import MaterialCard from "../components/cards/MaterialCard.jsx";
import { wasteMaterials } from "../data/cottonWaste.js";
import { company } from "../data/company.js";

export default function CottonWastePage() {
  const [selectedGrade, setSelectedGrade] = useState("Comber Noil");
  const [quantity, setQuantity] = useState("15");
  const [showModal, setShowModal] = useState(false);
  const [refCode, setRefCode] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRefCode("REF-CW-" + Math.floor(1000 + Math.random() * 9000));
    setShowModal(true);
  };

  const selectMaterial = (name) => {
    setSelectedGrade(name);
    document.getElementById("enquiry-form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        className="py-24"
        breadcrumb="HOME / COTTON WASTE & BY-PRODUCTS • SELAMBARAYAMPALAYAM, COIMBATORE"
        title="Cotton Waste & By-products"
        description="Contact JNC TEXTILES to enquire about available cotton waste materials and bulk purchasing arrangements. Single-origin clean recovery from Coimbatore spinning mills."
      />

      <section className="w-full py-16 bg-background">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-secondary block mb-1">CATEGORIZED EXTRACTION STREAMS</span>
            <h2 className="text-3xl font-extrabold text-primary">Available Cotton Waste Materials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wasteMaterials.map((m) => (
              <MaterialCard key={m.code} material={m} onEnquire={selectMaterial} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-surface-container-low" id="enquiry-form-section">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="max-w-2xl bg-white p-8 border border-outline-variant shadow-sm rounded-lg mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-2">Cotton Waste Quotation Request</h3>
            <p className="text-xs text-on-surface-variant mb-6">Submit your volume requirement and grade preferences. Reviewed by Selambarayampalayam desk.</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Full Name *">
                  <input required className={inputClass} placeholder="e.g. S. Ramanathan" />
                </FormField>
                <FormField label="Company Name *">
                  <input required className={inputClass} placeholder="e.g. Kongu Mills" />
                </FormField>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Material Grade *">
                  <select value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)} className={inputClass}>
                    {wasteMaterials.map((m) => (
                      <option key={m.code} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Estimated Quantity (M.Tons) *">
                  <input type="number" min="1" required value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass} />
                </FormField>
              </div>
              <button type="submit" className="w-full py-3 bg-secondary hover:bg-primary-container text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-lg">
                Submit Material Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-6">
            <div className="w-12 h-12 bg-secondary/10 text-secondary flex items-center justify-center mb-4 rounded-lg">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Commercial Enquiry Logged</h4>
            <p className="text-xs text-on-surface-variant mb-4">
              Reference <span className="font-mono font-bold text-primary">[{refCode}]</span> recorded for review by Selambarayampalayam commercial desk.
            </p>
            <div className="bg-surface-container p-3 rounded-lg text-xs space-y-1 mb-6">
              <div className="flex justify-between"><span>Grade:</span> <span className="font-bold">{selectedGrade}</span></div>
              <div className="flex justify-between"><span>Quantity:</span> <span className="font-bold">{quantity} M.Tons</span></div>
              <div className="flex justify-between"><span>Direct Desk:</span> <span className="font-bold">{company.phoneOps}</span></div>
            </div>
            <button onClick={() => setShowModal(false)} className="w-full py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg">
              Close Preview
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
