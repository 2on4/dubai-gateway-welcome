import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import CleanHeroVideo from './CleanHeroVideo';

const words = [
  'An Adaptive',
  'A Systematic',
  'A Progressive',
  'An Intelligent',
  'A Calibrated',
  'A Distinctive',
  'A Strategic',
];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWordText = words[currentWord];
    let timeout: number | undefined;
    if (isTyping) {
      if (displayText.length < currentWordText.length) {
        timeout = window.setTimeout(() => setDisplayText(currentWordText.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = window.setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
      } else {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWord]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <CleanHeroVideo />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-md p-6 md:p-8 shadow-[var(--shadow-elegant)]">
            <h1 className="hero-title font-display text-foreground">
              {displayText} <span className="text-primary">Asset Manager</span>
            </h1>
            <p className="mt-4 text-secondary body-text">
              Specialized investment solutions through active, thematic, and alternative strategies.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button size="lg">Discover more</Button>
              <a href="#what-we-do" className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
