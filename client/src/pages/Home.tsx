/* ============================================================
   DESIGN: Deep Ocean Protocol — Home Page
   Full single-page portfolio for Maleeha Naveed
   Sections: Hero → About → Metrics → Experience → Projects → Skills → Contact → Footer
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";


import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
