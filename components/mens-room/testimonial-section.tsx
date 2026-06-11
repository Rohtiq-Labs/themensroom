"use client";

import { useRef } from "react";

import { Reveal, RevealGroup } from "@/components/mens-room/reveal";
import { TESTIMONIALS, type Testimonial } from "@/data/mens-room-content";
import { useDragScroll } from "@/hooks/use-drag-scroll";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const renderStars = (rating: number): string => "★".repeat(rating);

const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps): React.JSX.Element => {
  return (
    <article className="testimonial-card depth-card-hover">
      <div
        className="testimonial-stars"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        <span aria-hidden="true">{renderStars(testimonial.rating)}</span>
      </div>
      <blockquote className="testimonial-quote">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <footer className="testimonial-footer">
        <cite className="testimonial-author">{testimonial.author}</cite>
        <span className="testimonial-service">{testimonial.service}</span>
      </footer>
    </article>
  );
};

export const TestimonialSection = (): React.JSX.Element => {
  const stripRef = useRef<HTMLDivElement>(null);
  useDragScroll(stripRef);

  return (
    <section className="testimonials section-shell" id="testimonials">
      <div className="testimonials-glow" aria-hidden="true" />

      <header className="testimonials-header">
        <Reveal direction="up" delay={0}>
          <div className="section-eyebrow testimonials-eyebrow">
            <span /> Client Reviews
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2>
            What They <em>Say</em>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={180}>
          <p className="testimonials-intro">
            Real feedback from clients who trust Brian John&apos;s for sharp
            cuts, clean lines, and a premium barbershop experience.
          </p>
        </Reveal>
      </header>

      <RevealGroup
        className="testimonials-grid testimonials-desktop"
        stagger={100}
        direction="up"
      >
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </RevealGroup>

      <div
        className="testimonials-mobile"
        ref={stripRef}
        aria-label="Client reviews carousel"
      >
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};
