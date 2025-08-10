import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-charcoal text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display text-primary mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our team of investment professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 font-display text-foreground">Email Us</h3>
              <p className="text-secondary">info@leventis.ae</p>
            </div>

            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 font-display text-foreground">Call Us</h3>
              <p className="text-secondary">+971 4 123 4567</p>
            </div>

            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 font-display text-foreground">Visit Us</h3>
              <p className="text-secondary">DIFC, Dubai, UAE</p>
            </div>
          </div>

          <Button size="lg" className="mx-auto">Send an enquiry</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
