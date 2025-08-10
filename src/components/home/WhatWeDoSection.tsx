import { Card, CardContent } from "@/components/ui/card";

const WhatWeDoSection = () => {
  const items = [
    {
      title: "Fund Management",
      description:
        "We manage Qualified Investment Funds (QIFs) across a range of asset classes, combining systematic analysis with active management to pursue long-term capital appreciation.",
    },
    {
      title: "Investment Advisory",
      description:
        "We provide bespoke investment advice to high-net-worth individuals, family offices and institutional clients, aligning investment strategies with objectives and risk profiles.",
    },
    {
      title: "Investment Arrangement",
      description:
        "We facilitate sophisticated investment transactions by connecting qualified investors with appropriate counterparties across the full lifecycle.",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-section-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display text-primary mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card key={item.title} className="bg-card border-border/40">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-display text-foreground">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
