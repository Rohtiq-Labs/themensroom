"use client";

import { useRef } from "react";

import { Reveal } from "@/components/mens-room/reveal";
import { SiteImage } from "@/components/mens-room/site-image";
import { GALLERY_ITEMS, type GalleryItem } from "@/data/mens-room-content";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { useDragScroll } from "@/hooks/use-drag-scroll";

type GalleryCardProps = {
  item: GalleryItem;
  clone?: boolean;
};

const GalleryCard = ({
  item,
  clone = false,
}: GalleryCardProps): React.JSX.Element => {
  return (
    <div
      className="gallery-item depth-card-hover"
      aria-hidden={clone || undefined}
    >
      <div className="gallery-item-inner">
        <SiteImage
          src={item.src}
          alt={clone ? "" : item.alt}
          className="gallery-image img-zoom"
          sizes="280px"
        />
      </div>
      <div className="gallery-item-overlay">
        <span className="gallery-item-label">{item.label}</span>
        <span className="gallery-item-view">View Style</span>
      </div>
    </div>
  );
};

export const GallerySection = (): React.JSX.Element => {
  const stripRef = useRef<HTMLDivElement>(null);
  useDragScroll(stripRef);
  useAutoScroll(stripRef);

  const scrollStrip = (direction: "left" | "right"): void => {
    const strip = stripRef.current;
    if (!strip) return;
    const amount = direction === "left" ? -320 : 320;
    strip.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="gallery section-shell" id="gallery">
      <div className="gallery-header">
        <Reveal direction="up" delay={0}>
          <div className="section-eyebrow">
            <span /> Our Work
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 style={{ textAlign: "center" }}>
            Fresh <em>Cuts</em>
          </h2>
        </Reveal>
      </div>

      <div className="gallery-controls">
        <button
          type="button"
          className="gallery-nav-btn"
          onClick={() => scrollStrip("left")}
          aria-label="Scroll gallery left"
        >
          ←
        </button>
        <button
          type="button"
          className="gallery-nav-btn"
          onClick={() => scrollStrip("right")}
          aria-label="Scroll gallery right"
        >
          →
        </button>
      </div>

      <div
        className="gallery-strip"
        ref={stripRef}
        role="region"
        aria-label="Gallery — auto-scrolls; hover or drag to browse manually"
      >
        {GALLERY_ITEMS.map((item, index) => (
          <Reveal
            key={item.src}
            className="gallery-item-wrap"
            delay={index * 55}
            direction="scale"
          >
            <GalleryCard item={item} />
          </Reveal>
        ))}
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={`clone-${item.src}`} item={item} clone />
        ))}
      </div>
    </section>
  );
};
