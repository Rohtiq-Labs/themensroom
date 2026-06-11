import { AboutSection } from "@/components/mens-room/about-section";
import { ContactSection } from "@/components/mens-room/contact-section";
import { FooterSection } from "@/components/mens-room/footer-section";
import { GallerySection } from "@/components/mens-room/gallery-section";
import { HeroSection } from "@/components/mens-room/hero-section";
import { MarqueeBand } from "@/components/mens-room/marquee-band";
import { NavBar } from "@/components/mens-room/nav-bar";
import { SectionDivider } from "@/components/mens-room/section-divider";
import { ServicesSection } from "@/components/mens-room/services-section";
import { TestimonialSection } from "@/components/mens-room/testimonial-section";
import { WalkinsBanner } from "@/components/mens-room/walkins-banner";

export default function Home(): React.JSX.Element {
  return (
    <div className="mens-room">
      <NavBar />
      <HeroSection />
      <MarqueeBand />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <GallerySection />
      <SectionDivider />
      <TestimonialSection />
      <WalkinsBanner />
      <SectionDivider />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
