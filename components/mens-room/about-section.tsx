import { SiteImage } from "@/components/mens-room/site-image";
import { SITE_IMAGES } from "@/data/mens-room-content";

export const AboutSection = (): React.JSX.Element => {
  return (
    <section className="about" id="about">
      <div className="about-visual">
        <div className="about-frame">
          <div className="about-frame-inner">
            <SiteImage
              src={SITE_IMAGES.about}
              alt="Client with a fresh haircut at The Men's Room"
              className="about-image"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            <div className="about-est-badge">Est. Brick Township, NJ</div>
          </div>
        </div>
        <div className="about-offset-box">
          <span className="num">★ 5</span>
          <span className="label">Star Rated Shop</span>
        </div>
      </div>

      <div className="about-text">
        <div className="section-eyebrow">Our Story</div>
        <h2>
          Confidence,
          <br />
          <em>One Cut</em>
          <br />
          at a Time
        </h2>
        <p>
          At Brian John&apos;s The Men&apos;s Room Barber Lounge, we believe
          every man deserves a space where precision meets comfort. Located in
          the heart of Brick Township, NJ, we&apos;ve built more than a
          barbershop — we&apos;ve built a destination.
        </p>
        <p>
          Our team of licensed barbers bring skill, artistry, and an eye for
          detail to every service. From classic fades to intricate beard
          sculpting, we deliver results that speak for themselves.
        </p>
        <div className="about-stats">
          <div>
            <span className="stat-num">2,500+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div>
            <span className="stat-num">5★</span>
            <span className="stat-label">Rating</span>
          </div>
          <div>
            <span className="stat-num">6,400+</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
