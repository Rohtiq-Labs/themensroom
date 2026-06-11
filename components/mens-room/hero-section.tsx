"use client";

import { useEffect, useRef, useState } from "react";

import { SiteImage } from "@/components/mens-room/site-image";
import { HERO_VIDEO, SITE_IMAGES } from "@/data/mens-room-content";

export const HeroSection = (): React.JSX.Element => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setUseVideo(false);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) return;

    const onError = (): void => setUseVideo(false);

    const playVideo = (): void => {
      video.play().catch(() => setUseVideo(false));
    };

    playVideo();
    video.addEventListener("error", onError);
    return () => video.removeEventListener("error", onError);
  }, [useVideo]);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const lines = linesRef.current;
    if (!hero || !bg || !lines) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const onScroll = (): void => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      const offset = progress * 100;

      bg.style.transform = `translate3d(0, ${offset * 0.35}px, 0) scale(1.08)`;
      lines.style.transform = `translate3d(0, ${offset * 0.12}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`hero${useVideo ? " hero-has-video" : ""}`}
      aria-label="Hero"
      ref={heroRef}
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-parallax" ref={bgRef}>
          {useVideo ? (
            <video
              ref={videoRef}
              className="hero-bg-video"
              autoPlay
              muted
              loop
              playsInline
              poster={SITE_IMAGES.hero}
              aria-hidden="true"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          ) : (
            <SiteImage
              src={SITE_IMAGES.hero}
              alt=""
              className="hero-bg-image"
              priority
              sizes="100vw"
            />
          )}
        </div>
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-lines" aria-hidden="true" ref={linesRef} />

      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      <div className="hero-scissors-deco" aria-hidden="true">
        ✂
      </div>

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
          <a href="#contact" className="btn-primary btn-lift">
            <span>Book Your Appointment</span>
          </a>
          <a href="#services" className="btn-outline btn-lift">
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
