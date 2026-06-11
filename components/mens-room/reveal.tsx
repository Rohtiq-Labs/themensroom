"use client";

import { useInView } from "@/hooks/use-in-view";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps): React.JSX.Element => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction}${isInView ? " is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  direction?: RevealDirection;
  role?: React.AriaRole;
};

export const RevealGroup = ({
  children,
  className = "",
  stagger = 80,
  direction = "up",
  role,
}: RevealGroupProps): React.JSX.Element => {
  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      role={role}
      className={`reveal-group${isInView ? " is-visible" : ""} ${className}`.trim()}
      style={{ "--stagger": `${stagger}ms` } as React.CSSProperties}
      data-direction={direction}
    >
      {children}
    </div>
  );
};
