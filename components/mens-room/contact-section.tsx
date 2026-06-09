import { BookingForm } from "@/components/mens-room/booking-form";
import { HoursGrid } from "@/components/mens-room/hours-grid";
import { CONTACT } from "@/data/mens-room-content";

export const ContactSection = (): React.JSX.Element => {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <div className="section-eyebrow">Get In Touch</div>
        <h2>
          Visit Us &<br />
          <em>Book</em> Today
        </h2>

        <div className="contact-details">
          <div className="contact-item scroll-reveal">
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
          <div className="contact-item scroll-reveal">
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
          <div className="contact-item scroll-reveal">
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
        </div>

        <HoursGrid />
      </div>

      <BookingForm />
    </section>
  );
};
