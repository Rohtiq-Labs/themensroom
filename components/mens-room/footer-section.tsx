import { Reveal } from "@/components/mens-room/reveal";
import {
  InstagramIcon,
  MapIcon,
  WhatsAppIcon,
} from "@/components/mens-room/social-icons";
import { CONTACT } from "@/data/mens-room-content";

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="mens-room-footer">
      <Reveal direction="up" delay={0}>
        <div className="footer-logo">
          <span className="script">Brian John&apos;s</span>
          <span className="block">The Men&apos;s Room · Barber Lounge</span>
        </div>
      </Reveal>
      <Reveal direction="up" delay={80}>
        <div className="footer-center">
          <p>
            {CONTACT.address} · {CONTACT.city} · {CONTACT.phone}
          </p>
          <p>
            © 2026 Brian John&apos;s The Men&apos;s Room, Powered By{" "}
            <a
              href={CONTACT.fadezyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Fadezy
            </a>
            . All rights reserved.
          </p>
        </div>
      </Reveal>
      <Reveal direction="up" delay={160}>
        <div className="footer-social">
          <a
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Location on Google Maps"
          >
            <MapIcon />
          </a>
        </div>
      </Reveal>
    </footer>
  );
};
