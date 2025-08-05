import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroImageGrid } from "@/components/HeroImageGrid";
import { CountryDropdown } from "@/components/CountryDropdown";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import leventisLogo from "@/assets/leventis-logo.png";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedCountry) {
      toast({
        title: "Please select your location",
        description: "You must choose a country to continue",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Location Selected",
      description: `Redirecting to ${selectedCountry} regional portal...`,
    });

    // Here you would typically handle routing to region-specific pages
    console.log(`Redirecting to portal for: ${selectedCountry}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 fade-in-up">
              <img 
                src={leventisLogo} 
                alt="Leventis Logo" 
                className="w-16 h-16 object-contain"
              />
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Leventis AMC
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4 fade-in-up stagger-1">
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Expertly managed portfolios for institutional and private clients.
              </p>
              <p className="text-lg text-muted-foreground/80">
                Regulated, transparent, and focused on your financial growth.
              </p>
            </div>

            {/* Location Selection */}
            <div className="space-y-6 fade-in-up stagger-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Please select your location:
              </h2>
              
              <div className="space-y-4">
                <CountryDropdown 
                  selectedCountry={selectedCountry}
                  onCountrySelect={setSelectedCountry}
                />
                
                <Button 
                  onClick={handleSubmit}
                  className="btn-elegant w-full max-w-md mx-auto lg:mx-0 group"
                  size="lg"
                >
                  Continue to Portal
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground fade-in-up stagger-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>DIFC Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Institutional Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <HeroImageGrid />
            </div>
          </div>
          
        </div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Index;
