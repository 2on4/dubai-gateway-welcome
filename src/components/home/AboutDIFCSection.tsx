import { Card, CardContent } from "@/components/ui/card";

const AboutDIFCSection = () => {
  return (
    <section id="about-difc" className="py-20 bg-section-graphite">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display text-primary mb-6">About DIFC</h2>
        <Card className="bg-card border-border/40">
          <CardContent className="p-6 space-y-6 text-lg leading-relaxed">
            <p className="text-secondary">
              The Dubai International Financial Centre has carved out a reputation as one of the world’s most advanced financial hubs, sitting at the junction of East and West. Operating under a common law framework with English-language courts, it offers the legal clarity and regulatory standards global institutions expect from top-tier financial centres.
            </p>
            <p className="text-secondary">
              Regulated by the Dubai Financial Services Authority, the DIFC aligns with international best practices while streamlining approvals for complex financial products. A zero-tax regime on income and capital gains, coupled with the UAE’s wide network of double-tax treaties, gives institutional and professional investors a structural edge.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutDIFCSection;
