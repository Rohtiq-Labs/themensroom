"use client";

import { useEffect } from "react";

type UseAutoScrollOptions = {
  speed?: number;
};

export const useAutoScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
  { speed = 0.55 }: UseAutoScrollOptions = {},
): void => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let paused = false;
    let animationId = 0;

    const pause = (): void => {
      paused = true;
    };

    const resume = (): void => {
      paused = false;
    };

    const tick = (): void => {
      const loopPoint = element.scrollWidth / 2;

      if (
        loopPoint > 0 &&
        !paused &&
        !element.classList.contains("is-dragging")
      ) {
        element.scrollLeft += speed;

        if (element.scrollLeft >= loopPoint) {
          element.scrollLeft -= loopPoint;
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    element.classList.add("is-auto-scrolling");
    element.addEventListener("mouseenter", pause);
    element.addEventListener("mouseleave", resume);
    element.addEventListener("pointerdown", pause);
    element.addEventListener("pointerup", resume);
    element.addEventListener("pointercancel", resume);
    element.addEventListener("touchstart", pause, { passive: true });
    element.addEventListener("touchend", resume, { passive: true });

    animationId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationId);
      element.classList.remove("is-auto-scrolling");
      element.removeEventListener("mouseenter", pause);
      element.removeEventListener("mouseleave", resume);
      element.removeEventListener("pointerdown", pause);
      element.removeEventListener("pointerup", resume);
      element.removeEventListener("pointercancel", resume);
      element.removeEventListener("touchstart", pause);
      element.removeEventListener("touchend", resume);
    };
  }, [ref, speed]);
};
