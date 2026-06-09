import { CONTACT } from "@/data/mens-room-content";

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="mens-room-footer">
      <div className="footer-logo">
        <span className="script">Brian John&apos;s</span>
        <span className="block">The Men&apos;s Room · Barber Lounge</span>
      </div>
      <div className="footer-center">
        <p>
          {CONTACT.address} · {CONTACT.city} · {CONTACT.phone}
        </p>
        <p>© 2025 Brian John&apos;s The Men&apos;s Room. All rights reserved.</p>
      </div>
      <div className="footer-social">
        <a
          href={CONTACT.instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Instagram"
        >
          📸
        </a>
        <a
          href={CONTACT.phoneHref}
          className="social-link"
          aria-label="Phone"
        >
          📞
        </a>
        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Location on Google Maps"
        >
          📍
        </a>
      </div>
    </footer>
  );
};
