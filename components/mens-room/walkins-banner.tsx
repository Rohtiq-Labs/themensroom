import { SiteImage } from "@/components/mens-room/site-image";
import { CONTACT, SITE_IMAGES } from "@/data/mens-room-content";

export const WalkinsBanner = (): React.JSX.Element => {
  return (
    <div className="walkins-banner">
      <div className="walkins-banner-bg" aria-hidden="true">
        <SiteImage
          src={SITE_IMAGES.walkins}
          alt=""
          className="walkins-banner-image"
          sizes="100vw"
        />
        <div className="walkins-banner-overlay" />
      </div>
      <div className="walkins-banner-content">
        <div className="walkins-eyebrow">No Appointment Needed</div>
        <div className="walkins-title">Walk-Ins Welcome.</div>
        <div className="walkins-sub">
          Stop in and experience top-tier grooming — anytime.
        </div>
      </div>
      <a href={CONTACT.phoneHref} className="walkins-cta">
        Call Now: {CONTACT.phone}
      </a>
    </div>
  );
};
