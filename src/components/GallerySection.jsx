export default function GallerySection({ gallery, onOpenGallery }) {
  return (
    <section className="gallery" aria-label="Property images">
      {gallery.map((item, index) => (
        <div
          key={`${item.alt}-${index}`}
          className={`gallery-item ${item.wide ? "wide" : ""} ${item.overlay ? "overlay-item" : ""}`}
        >
          <button type="button" className="gallery-image-button" onClick={() => onOpenGallery(index)} aria-label={`View photo ${index + 1}`}>
            <img src={item.image} alt={item.alt} />
          </button>
          {item.overlay && (
            <button type="button" className="overlay-tag" onClick={() => onOpenGallery(index)}>
              {item.overlay}
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
