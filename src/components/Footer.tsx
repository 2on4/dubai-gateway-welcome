import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-section-charcoal text-foreground py-16 border-t border-border mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl mb-4 font-display text-primary">LEVENTIS</div>
            <p className="text-secondary mb-6 max-w-md leading-relaxed">
              A specialized asset manager focused on delivering exceptional investment
              solutions through active, thematic, and specialized strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-display text-primary">Navigation</h3>
            <ul className="space-y-2 text-secondary">
              <li><a href="#who-we-are" className="hover:text-foreground">Who we are</a></li>
              <li><a href="#what-we-do" className="hover:text-foreground">What we do</a></li>
              <li><a href="#about-difc" className="hover:text-foreground">About DIFC</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-display text-primary">Contact</h3>
            <ul className="space-y-2 text-secondary">
              <li>info@leventis.ae</li>
              <li>+971 4 123 4567</li>
              <li>DIFC, Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-muted-foreground border-t border-border pt-6">
          Regulated by Dubai Financial Services Authority (DFSA). © {new Date().getFullYear()} Leventis AMC.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
