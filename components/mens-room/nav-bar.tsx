"use client";

import { useEffect, useState } from "react";

import { CONTACT } from "@/data/mens-room-content";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const NavBar = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <>
      <nav
        className={`mens-room-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <span className="script">Brian John&apos;s</span>
          <span className="block">The Men&apos;s Room · Barber Lounge</span>
        </a>

        <ul className="nav-links nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="nav-book nav-book-desktop btn-lift">
            Book Now
          </a>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " is-active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-inner" aria-hidden="true">
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="nav-mobile-menu"
        className={`nav-mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />

        <div className="nav-mobile-panel">
          <div className="nav-mobile-panel-glow" aria-hidden="true" />

          <ul className="nav-mobile-links">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className="nav-mobile-item"
                style={{ "--nav-item-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <a href={link.href} onClick={closeMenu}>
                  <span className="nav-mobile-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="nav-mobile-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className="nav-mobile-footer"
            style={{ "--nav-item-delay": "320ms" } as React.CSSProperties}
          >
            <a href="#contact" className="nav-mobile-book btn-primary btn-lift" onClick={closeMenu}>
              <span>Book Your Appointment</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="nav-mobile-phone"
              onClick={closeMenu}
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
