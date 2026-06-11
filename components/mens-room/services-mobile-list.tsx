"use client";

import { useState } from "react";

import { RevealGroup } from "@/components/mens-room/reveal";
import { SERVICES, type ServiceMobileTitle } from "@/data/mens-room-content";

const defaultActiveIndex = SERVICES.findIndex((service) => service.featured);

const renderMobileTitle = (title: ServiceMobileTitle): React.JSX.Element => {
  return (
    <>
      {title.prefix ? <>{title.prefix} </> : null}
      <em>{title.emphasis}</em>
      {title.suffix ? <> {title.suffix}</> : null}
    </>
  );
};

export const ServicesMobileList = (): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : 0,
  );

  return (
    <RevealGroup
      className="services-mobile-panel"
      stagger={80}
      direction="up"
      role="list"
    >
      {SERVICES.map((service, index) => (
        <div key={service.name} className="services-mobile-item" role="listitem">
          <button
            type="button"
            className={`service-mobile-row${activeIndex === index ? " is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-expanded={activeIndex === index}
            aria-label={`${service.name}, ${service.mobilePrice}`}
          >
            <div className="service-mobile-copy">
              <h3 className="service-mobile-title">
                {renderMobileTitle(service.mobileTitle)}
              </h3>
              <p className="service-mobile-desc">{service.mobileDescription}</p>
              {activeIndex === index ? (
                <a href="#contact" className="service-mobile-book btn-lift">
                  Book This Service
                </a>
              ) : null}
            </div>
            <span className="service-mobile-price">{service.mobilePrice}</span>
          </button>
          {index < SERVICES.length - 1 ? (
            <div className="service-mobile-divider" aria-hidden="true">
              <span className="service-mobile-ornament">
                <span />
                <span />
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </RevealGroup>
  );
};
