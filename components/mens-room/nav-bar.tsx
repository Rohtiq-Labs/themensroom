"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const NavBar = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`mens-room-nav${scrolled ? " scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="nav-logo">
        <span className="script">Brian John&apos;s</span>
        <span className="block">The Men&apos;s Room · Barber Lounge</span>
      </div>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-book">
        Book Now
      </a>
    </nav>
  );
};
