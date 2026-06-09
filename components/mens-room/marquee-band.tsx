import { MARQUEE_ITEMS } from "@/data/mens-room-content";

export const MarqueeBand = (): React.JSX.Element => {
  const trackItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {trackItems.flatMap((item, index) => [
          <span key={`text-${item}-${index}`}>{item}</span>,
          <span key={`dot-${item}-${index}`} className="dot">
            ✦
          </span>,
        ])}
      </div>
    </div>
  );
};
