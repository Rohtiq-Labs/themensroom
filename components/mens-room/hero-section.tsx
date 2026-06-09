import { SiteImage } from "@/components/mens-room/site-image";
import { SITE_IMAGES } from "@/data/mens-room-content";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <SiteImage
          src={SITE_IMAGES.hero}
          alt="Interior of Brian John's The Men's Room barber lounge"
          className="hero-bg-image"
          priority
          sizes="100vw"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-lines" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">Premium Barbershop · Brick Township, NJ</p>
        <div className="hero-script">Brian John&apos;s</div>
        <p className="hero-name-block">The Men&apos;s Room</p>
        <p className="hero-sub">Barber Lounge</p>

        <div className="hero-divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="hero-tagline">
          Premium Cuts · Timeless Style · Top-Tier Grooming
        </p>

        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">
            <span>Book Your Appointment</span>
          </a>
          <a href="#services" className="btn-outline">
            View Services
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};
