"use client";

import { useEffect } from "react";

const DRAG_THRESHOLD = 6;

export const useDragScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
): void => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let activePointerId: number | null = null;

    const endDrag = (): void => {
      if (!isDragging) return;
      isDragging = false;
      activePointerId = null;
      element.classList.remove("is-dragging");
    };

    const onPointerDown = (event: PointerEvent): void => {
      if (event.button !== 0) return;

      isDragging = true;
      startX = event.clientX;
      startScrollLeft = element.scrollLeft;
      activePointerId = event.pointerId;
      element.classList.add("is-dragging");
      element.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent): void => {
      if (!isDragging || event.pointerId !== activePointerId) return;

      const delta = event.clientX - startX;
      if (Math.abs(delta) > DRAG_THRESHOLD) {
        event.preventDefault();
      }

      element.scrollLeft = startScrollLeft - delta;
    };

    const onPointerUp = (event: PointerEvent): void => {
      if (event.pointerId !== activePointerId) return;

      if (element.hasPointerCapture(event.pointerId)) {
        element.releasePointerCapture(event.pointerId);
      }

      endDrag();
    };

    element.addEventListener("pointerdown", onPointerDown);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerup", onPointerUp);
    element.addEventListener("pointercancel", onPointerUp);
    element.addEventListener("pointerleave", onPointerUp);

    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerup", onPointerUp);
      element.removeEventListener("pointercancel", onPointerUp);
      element.removeEventListener("pointerleave", onPointerUp);
    };
  }, [ref]);
};
