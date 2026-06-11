import { BookingForm } from "@/components/mens-room/booking-form";
import { HoursGrid } from "@/components/mens-room/hours-grid";
import { Reveal, RevealGroup } from "@/components/mens-room/reveal";
import { CONTACT } from "@/data/mens-room-content";

export const ContactSection = (): React.JSX.Element => {
  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-info">
        <Reveal direction="up" delay={0}>
          <div className="section-eyebrow">Get In Touch</div>
        </Reveal>
        <Reveal direction="up" delay={80}>
          <h2>
            Visit Us &<br />
            <em>Book</em> Today
          </h2>
        </Reveal>

        <RevealGroup className="contact-details" stagger={100} direction="up">
          <div className="contact-item interactive-card">
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <div>
              <div className="contact-item-label">Location</div>
              <div className="contact-item-value">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </div>
            </div>
          </div>
          <div className="contact-item interactive-card">
            <span className="contact-icon" aria-hidden="true">
              📞
            </span>
            <div>
              <div className="contact-item-label">Phone</div>
              <div className="contact-item-value">
                <a href={CONTACT.phoneHref} className="contact-link">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-item interactive-card">
            <span className="contact-icon" aria-hidden="true">
              📸
            </span>
            <div>
              <div className="contact-item-label">Instagram</div>
              <div className="contact-item-value">
                <a
                  href={CONTACT.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {CONTACT.instagram}
                </a>
              </div>
            </div>
          </div>
        </RevealGroup>

        <Reveal direction="up" delay={200}>
          <HoursGrid />
        </Reveal>
      </div>

      <Reveal direction="right" delay={100}>
        <BookingForm />
      </Reveal>
    </section>
  );
};
