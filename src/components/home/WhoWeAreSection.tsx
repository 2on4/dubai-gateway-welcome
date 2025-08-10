import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';

interface StatisticItemProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
  duration?: number;
}

const StatisticItem = ({ target, suffix, label, delay = 0, duration = 2000 }: StatisticItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            setTimeout(() => {
              const startTime = Date.now();
              const startValue = 0;
              const endValue = target;

              const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);

                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.round(startValue + (endValue - startValue) * easeOutCubic);

                setCount(currentValue);

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                }
              };

              requestAnimationFrame(updateCount);
            }, delay);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, delay, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="p-6 bg-card border border-border/40 rounded-xl text-center">
      <div className="text-5xl font-display text-foreground mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-secondary">{label}</div>
    </div>
  );
};

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-20 bg-section-graphite">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display text-primary mb-6">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card border-border/40">
            <CardContent className="p-6 space-y-6 text-lg leading-relaxed">
              <p className="text-secondary">
                Leventis AMC is a DIFC-based asset manager serving professional clients with disciplined,
                research-driven investment approaches and a deep commitment to fiduciary standards.
              </p>
              <p className="text-secondary">
                We focus on delivering exceptional investment outcomes through active, thematic, and specialized strategies,
                tailored to the needs of sophisticated investors.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatisticItem target={3} suffix="" label="Active Funds" />
            <StatisticItem target={50} suffix="m" label="USD Under Management" delay={200} />
            <StatisticItem target={12} suffix="%" label="Annual Growth" delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
