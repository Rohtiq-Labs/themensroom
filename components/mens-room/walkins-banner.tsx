"use client";

import { useEffect, useRef } from "react";

import { Reveal } from "@/components/mens-room/reveal";
import { SiteImage } from "@/components/mens-room/site-image";
import { CONTACT, SITE_IMAGES } from "@/data/mens-room-content";

export const WalkinsBanner = (): React.JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const bg = bgRef.current;
    if (!banner || !bg) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const onScroll = (): void => {
      const rect = banner.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = center * 0.08;
      bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="walkins-banner depth-card" ref={bannerRef}>
      <div className="walkins-banner-bg" aria-hidden="true" ref={bgRef}>
        <SiteImage
          src={SITE_IMAGES.walkins}
          alt=""
          className="walkins-banner-image"
          sizes="100vw"
        />
        <div className="walkins-banner-overlay" />
      </div>
      <Reveal className="walkins-banner-content" direction="left" delay={0}>
        <div className="walkins-eyebrow">No Appointment Needed</div>
        <div className="walkins-title">Walk-Ins Welcome.</div>
        <div className="walkins-sub">
          Stop in and experience top-tier grooming — anytime.
        </div>
      </Reveal>
      <Reveal direction="right" delay={120}>
        <a href={CONTACT.phoneHref} className="walkins-cta btn-lift">
          Call Now: {CONTACT.phone}
        </a>
      </Reveal>
    </div>
  );
};
