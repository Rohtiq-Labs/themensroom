import { Reveal } from "@/components/mens-room/reveal";
import { SiteImage } from "@/components/mens-room/site-image";
import { SITE_IMAGES } from "@/data/mens-room-content";

export const AboutSection = (): React.JSX.Element => {
  return (
    <section className="about section-shell" id="about">
      <Reveal className="about-eyebrow" direction="up" delay={0}>
        <div className="section-eyebrow">Our Story</div>
      </Reveal>

      <Reveal className="about-visual" direction="left" delay={80}>
        <div className="about-frame depth-card">
          <div className="about-frame-inner">
            <SiteImage
              src={SITE_IMAGES.about}
              alt="Barber applying finishing spray during a haircut at The Men's Room"
              className="about-image img-zoom"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            <div className="about-est-badge">Est. Brick Township, NJ</div>
          </div>
        </div>
      </Reveal>

      <div className="about-text">
        <Reveal direction="up" delay={160}>
          <h2>
            Confidence,
            <br />
            <em>One Cut</em>
            <br />
            at a Time
          </h2>
        </Reveal>
        <Reveal direction="up" delay={240}>
          <p>
            At Brian John&apos;s The Men&apos;s Room Barber Lounge, we believe
            every man deserves a space where precision meets comfort. Located in
            the heart of Brick Township, NJ, we&apos;ve built more than a
            barbershop — we&apos;ve built a destination.
          </p>
        </Reveal>
        <Reveal direction="up" delay={320}>
          <p>
            Our team of licensed barbers bring skill, artistry, and an eye for
            detail to every service. From classic fades to intricate beard
            sculpting, we deliver results that speak for themselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
