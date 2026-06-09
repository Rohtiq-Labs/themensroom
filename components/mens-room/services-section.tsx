import { SiteImage } from "@/components/mens-room/site-image";
import { SERVICES } from "@/data/mens-room-content";

export const ServicesSection = (): React.JSX.Element => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="section-eyebrow">What We Offer</div>
        <h2>
          Our <em>Services</em>
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div key={service.name} className="service-card scroll-reveal">
            <div className="service-image-wrap">
              <SiteImage
                src={service.image}
                alt={service.imageAlt}
                className="service-image"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="service-name">{service.name}</div>
            <div className="service-desc">{service.description}</div>
            <div className="service-price">{service.price}</div>
            <div className="service-line" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};
