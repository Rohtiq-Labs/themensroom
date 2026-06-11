"use client";

import { useState } from "react";

import {
  BOOKING_SERVICES,
  BOOKING_TIMES,
} from "@/data/mens-room-content";

export const BookingForm = (): React.JSX.Element => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (): void => {
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="booking-form">
      <h3>
        Request an{" "}
        <em style={{ fontStyle: "italic", color: "var(--silver)" }}>
          Appointment
        </em>
      </h3>
      <p className="form-sub">
        Fill out the form and we&apos;ll confirm your booking.
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="full-name">
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          className="form-input"
          placeholder="Your full name"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="service">
          Service
        </label>
        <select id="service" className="form-select" defaultValue="">
          <option value="">Select a service…</option>
          {BOOKING_SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="preferred-date">
            Preferred Date
          </label>
          <input id="preferred-date" type="date" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="preferred-time">
            Preferred Time
          </label>
          <select id="preferred-time" className="form-select" defaultValue="">
            <option value="">Select time…</option>
            {BOOKING_TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="notes">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          className="form-textarea"
          placeholder="Any specific requests or style references…"
        />
      </div>

      <button
        type="button"
        className={`form-submit btn-lift${submitted ? " success" : ""}`}
        onClick={handleSubmit}
      >
        {submitted ? "✓ Request Sent!" : "Confirm Booking"}
      </button>
    </div>
  );
};
