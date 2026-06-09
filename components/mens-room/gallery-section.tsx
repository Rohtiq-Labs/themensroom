import { SiteImage } from "@/components/mens-room/site-image";
import { GALLERY_ITEMS } from "@/data/mens-room-content";

export const GallerySection = (): React.JSX.Element => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div className="section-eyebrow">
          <span /> Our Work
        </div>
        <h2 style={{ textAlign: "center" }}>
          Fresh <em>Cuts</em>
        </h2>
      </div>

      <div className="gallery-strip">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.src} className="gallery-item scroll-reveal">
            <div className="gallery-item-inner">
              <SiteImage
                src={item.src}
                alt={item.alt}
                className="gallery-image"
                sizes="280px"
              />
            </div>
            <div className="gallery-item-overlay">
              <span className="gallery-item-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
