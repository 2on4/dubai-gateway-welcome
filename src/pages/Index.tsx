import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LocationSelector } from "@/components/LocationSelector";
import { SignatureAnimation } from "@/components/SignatureAnimation";


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

    console.log(`Redirecting to portal for: ${selectedCountry}`);
  };


  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh]">
            
            {/* Left side - Signature Animation (Hidden on mobile/tablet) */}
            <div className="hidden lg:flex items-center justify-center h-[80vh] max-h-[600px]">
              <SignatureAnimation />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 lg:pl-8 text-center lg:text-left">
              {/* Logo for mobile/tablet */}
              <div className="flex justify-center lg:hidden mb-8">
                <img 
                  src="/logo.png" 
                  alt="Leventis Logo" 
                  className="h-24 w-24 object-contain"
                />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  {/* Logo for desktop */}
                  <img 
                    src="/logo.png" 
                    alt="Leventis Logo" 
                    className="hidden lg:block h-16 w-16 object-contain"
                  />
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                    Leventis <span className="text-primary font-inter">AMC</span>
                  </h1>
                </div>
                <div className="space-y-3">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Expertly managed portfolios for institutional and private clients.
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Regulated, transparent, and focused on your financial growth.
                  </p>
                </div>
              </div>

              {/* Location Selector */}
              <LocationSelector 
                selectedCountry={selectedCountry}
                onCountrySelect={setSelectedCountry}
                onSubmit={handleSubmit}
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/3 right-4 md:right-10 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 left-4 md:left-10 w-24 h-24 md:w-48 md:h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Index;
