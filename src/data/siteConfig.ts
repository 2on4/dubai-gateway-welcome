// Minimal site configuration aligned with the external repo
export interface SectionConfig {
  id: string;
  component: string;
  enabled: boolean;
  props?: Record<string, unknown>;
}

export interface VideoConfig { url: string; fallbackImage: string; title?: string; description?: string; }
export interface HeroVideoConfig {
  enabled: boolean;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  videos: VideoConfig[];
  fallback: { globalFallbackImage: string };
  transition: { duration: number };
  words: string[];
}

export const siteConfig = {
  siteName: "Leventis",
  navigation: [
    { href: "#who-we-are", label: "Who we are", enabled: true },
    { href: "#what-we-do", label: "What we do", enabled: true },
    { href: "#about-difc", label: "About DIFC", enabled: true },
    { href: "#statistics", label: "Statistics", enabled: true },
    { href: "#contact", label: "Contact", enabled: true },
  ],
  hero: {
    enabled: true,
    autoplay: true,
    loop: true,
    muted: true,
    videos: [
      { url: "/hero-1.mp4", fallbackImage: "/placeholder.svg", title: "Hero 1" },
      { url: "/hero-2.mp4", fallbackImage: "/placeholder.svg", title: "Hero 2" },
    ],
    fallback: { globalFallbackImage: "/placeholder.svg" },
    transition: { duration: 1200 },
    words: ['An Adaptive', 'A Systematic', 'A Progressive', 'An Intelligent', 'A Calibrated', 'A Distinctive', 'A Strategic']
  } as HeroVideoConfig,
  sections: [
    { id: 'hero', component: 'HeroSection', enabled: true },
    { id: 'who-we-are', component: 'WhoWeAreSection', enabled: true },
    { id: 'what-we-do', component: 'WhatWeDoSection', enabled: true },
    { id: 'about-difc', component: 'AboutDIFCSection', enabled: true },
    { id: 'statistics', component: 'StatisticsSection', enabled: true },
    { id: 'contact', component: 'ContactSection', enabled: true },
  ] as SectionConfig[],
} as const;
