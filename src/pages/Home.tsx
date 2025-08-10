import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import AboutDIFCSection from "@/components/home/AboutDIFCSection";
import ContactSection from "@/components/home/ContactSection";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Leventis AMC | Professional Investment Solutions";
    const desc =
      "Leventis AMC provides specialized asset management and advisory services for professional investors in DIFC.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/home`;
  }, []);

  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <AboutDIFCSection />
      <ContactSection />
    </main>
  );
};

export default Home;
