"use client";

import { useInView } from "@/hooks/use-in-view";

export const SectionDivider = (): React.JSX.Element => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`section-divider${isInView ? " is-visible" : ""}`}
      aria-hidden="true"
    >
      <span className="section-divider-line" />
      <span className="section-divider-diamond" />
      <span className="section-divider-line" />
    </div>
  );
};
