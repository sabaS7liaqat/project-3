import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import EducationSection from "@/components/education/EducationSection";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import NavbarII from "@/components/navbarII/NavbarII";
import SkillsSection from "@/components/skills/SkillsSection";
import Image from "next/image";
import { FaBabyCarriage } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <NavbarII />
     <HeroSection />
     <AboutSection />
     <EducationSection />
    <SkillsSection />
    <ContactSection />
    
    </main>
  );
}
