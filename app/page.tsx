import { AboutSection } from "@/components/mens-room/about-section";
import { ContactSection } from "@/components/mens-room/contact-section";
import { FooterSection } from "@/components/mens-room/footer-section";
import { GallerySection } from "@/components/mens-room/gallery-section";
import { HeroSection } from "@/components/mens-room/hero-section";
import { MarqueeBand } from "@/components/mens-room/marquee-band";
import { NavBar } from "@/components/mens-room/nav-bar";
import { ScrollRevealInit } from "@/components/mens-room/scroll-reveal-init";
import { ServicesSection } from "@/components/mens-room/services-section";
import { WalkinsBanner } from "@/components/mens-room/walkins-banner";

export default function Home(): React.JSX.Element {
  return (
    <div className="mens-room">
      <NavBar />
      <HeroSection />
      <MarqueeBand />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WalkinsBanner />
      <ContactSection />
      <FooterSection />
      <ScrollRevealInit />
    </div>
  );
}
