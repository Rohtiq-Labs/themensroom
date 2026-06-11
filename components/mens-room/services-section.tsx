import { ServicesMobileList } from "@/components/mens-room/services-mobile-list";
import { Reveal } from "@/components/mens-room/reveal";

export const ServicesSection = (): React.JSX.Element => {
  return (
    <section className="services section-shell" id="services">
      <div className="services-glow" aria-hidden="true" />
      <div className="services-inner">
        <header className="services-header-modern">
          <Reveal direction="up" delay={0}>
            <h2 className="services-title-mobile">Services</h2>
          </Reveal>
        </header>

        <ServicesMobileList />
      </div>
    </section>
  );
};
