export default function PhotoModal({ gallery, selectedPhotoIndex, onClose, onSelectPhoto }) {
  return (
    <div className="photo-modal" role="dialog" aria-modal="true" aria-label="Property photos">
      <div className="photo-modal-backdrop" onClick={onClose} />
      <div className="photo-modal-content">
        <div className="photo-modal-header">
          <strong>{selectedPhotoIndex + 1} / {gallery.length}</strong>
          <button type="button" className="photo-modal-close" onClick={onClose} aria-label="Close gallery">
            ✕
          </button>
        </div>

        <div className="photo-modal-main">
          <img src={gallery[selectedPhotoIndex].image} alt={gallery[selectedPhotoIndex].alt} />
        </div>

        <div className="photo-modal-grid" aria-label="All property photos">
          {gallery.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              className={`photo-thumbnail ${selectedPhotoIndex === index ? "active" : ""}`}
              onClick={() => onSelectPhoto(index)}
              aria-label={`Show photo ${index + 1}`}
            >
              <img src={item.image} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
