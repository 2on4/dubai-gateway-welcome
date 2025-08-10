import { lazy, Suspense } from 'react';
import { SectionConfig } from '@/data/siteConfig';

const componentMap = {
  HeroSection: lazy(() => import('@/components/home/HeroSection')),
  WhoWeAreSection: lazy(() => import('@/components/home/WhoWeAreSection')),
  WhatWeDoSection: lazy(() => import('@/components/home/WhatWeDoSection')),
  AboutDIFCSection: lazy(() => import('@/components/home/AboutDIFCSection')),
  StatisticsSection: lazy(() => import('@/components/home/StatisticsSection')),
  ContactSection: lazy(() => import('@/components/home/ContactSection')),
};

interface DynamicSectionProps { section: SectionConfig }

const DynamicSection = ({ section }: DynamicSectionProps) => {
  if (!section.enabled) return null;
  const Component = componentMap[section.component as keyof typeof componentMap];
  if (!Component) return null;
  return (
    <Suspense fallback={<div className="h-20 animate-pulse bg-muted" />}> 
      <Component {...(section.props || {})} />
    </Suspense>
  );
};

export default DynamicSection;
