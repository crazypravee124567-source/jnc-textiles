// Generic overlay. Click on the backdrop closes it.
export default function Modal({ onClose, children, maxWidth = "max-w-md", backdrop = "bg-black/60 backdrop-blur-sm" }) {
  return (
    <div className={`fixed inset-0 z-50 ${backdrop} flex items-center justify-center p-4`} onClick={onClose}>
      <div className={`bg-white ${maxWidth} w-full shadow-2xl rounded-lg overflow-hidden`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
