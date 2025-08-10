import React, { useEffect } from "react";
import Header from "@/components/Header";
import DynamicSection from "@/components/DynamicSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

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
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">{/* account for fixed header height */}
        {siteConfig.sections
          .filter((s) => !['funds','news','board','team'].includes(s.id))
          .map((section) => (
            <DynamicSection key={section.id} section={section} />
          ))}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
