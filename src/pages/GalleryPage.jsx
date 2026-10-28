import { useState } from "react";
import PageHero from "../components/ui/PageHero.jsx";
import Modal from "../components/ui/Modal.jsx";
import GalleryCard from "../components/cards/GalleryCard.jsx";
import { galleryItems, galleryFilters } from "../data/gallery.js";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((x) => x.category === filter);

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHero
        breadcrumb="HOME / GALLERY • SELAMBARAYAMPALAYAM, COIMBATORE"
        title="Inside Our Manufacturing Operations"
        description="Visual documentation of ring spinning halls, fiber testing laboratory, high-density baling, and facility logistics."
      />

      <div className="max-w-[1360px] mx-auto px-6 pt-10 pb-6 w-full flex flex-wrap gap-2">
        {galleryFilters.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
              filter === btn.id
                ? "bg-primary-container text-white"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="max-w-[1360px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <GalleryCard key={item.id} item={item} onOpen={setLightboxItem} />
        ))}
      </div>

      {lightboxItem && (
        <Modal onClose={() => setLightboxItem(null)} maxWidth="max-w-3xl" backdrop="bg-black/80 backdrop-blur-md">
          <div className="flex items-center justify-between p-4 bg-primary text-white">
            <span className="text-xs uppercase font-bold tracking-wider">{lightboxItem.title}</span>
            <button onClick={() => setLightboxItem(null)} className="text-white hover:text-secondary">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="max-h-[614px] overflow-hidden bg-black flex items-center justify-center">
            <img src={lightboxItem.img} alt={lightboxItem.title} className="max-h-[563px] object-contain" />
          </div>
          <div className="p-4">
            <p className="text-xs text-secondary font-bold uppercase mb-1">{lightboxItem.badge}</p>
            <p className="text-sm text-on-surface-variant">{lightboxItem.desc}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
