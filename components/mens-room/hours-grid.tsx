"use client";

import { useEffect, useState } from "react";

import { HOURS } from "@/data/mens-room-content";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const HoursGrid = (): React.JSX.Element => {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(DAY_NAMES[new Date().getDay()]);
  }, []);

  return (
    <div className="hours-grid">
      <div className="hours-title">Hours of Operation</div>
      {HOURS.map((row) => (
        <div
          key={row.day}
          className={`hours-row${today === row.day ? " today" : ""}`}
        >
          <span className="hours-day">{row.day}</span>
          <span className="hours-time">{row.time}</span>
        </div>
      ))}
    </div>
  );
};
