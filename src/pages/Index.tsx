import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { LocationSelector } from "@/components/LocationSelector";
import dubaiSkyline from "@/assets/dubai-skyline.jpg";
import dubaiFinancial from "@/assets/dubai-financial.jpg";
import dubaiMarina from "@/assets/dubai-marina.jpg";
import dubaiDifc from "@/assets/dubai-difc.jpg";

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

  const images = [
    { src: dubaiSkyline, alt: "Dubai Skyline" },
    { src: dubaiFinancial, alt: "Dubai Financial District" },
    { src: dubaiMarina, alt: "Dubai Marina" },
    { src: dubaiDifc, alt: "Dubai International Financial Centre" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left side - Dynamic Asymmetrical Grid */}
            <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[85vh] max-h-[700px]">
              {/* Left column - large top image */}
              <div className="row-span-2 relative overflow-hidden rounded-xl group cursor-pointer shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-700"></div>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-px w-12 bg-primary/80 mb-2"></div>
                  <p className="text-white/90 text-sm font-medium tracking-wide">{images[0].alt}</p>
                </div>
              </div>
              
              {/* Right column - small top image (swapped) */}
              <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-700"></div>
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-px w-12 bg-primary/80 mb-2"></div>
                  <p className="text-white/90 text-sm font-medium tracking-wide">{images[3].alt}</p>
                </div>
              </div>
              
              {/* Left column - small bottom image */}
              <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-700"></div>
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-px w-12 bg-primary/80 mb-2"></div>
                  <p className="text-white/90 text-sm font-medium tracking-wide">{images[2].alt}</p>
                </div>
              </div>
              
              {/* Right column - large bottom image (swapped) */}
              <div className="row-span-2 relative overflow-hidden rounded-xl group cursor-pointer shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-700"></div>
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-px w-12 bg-primary/80 mb-2"></div>
                  <p className="text-white/90 text-sm font-medium tracking-wide">{images[1].alt}</p>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-12 lg:pl-12">
              {/* Brand Identity */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-px w-16 bg-primary"></div>
                  <span className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase">Asset Management</span>
                </div>
                <h1 className="text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tight">
                  Leventis
                  <span className="block text-primary font-playfair italic">AMC</span>
                </h1>
              </div>

              {/* Value Proposition */}
              <div className="space-y-6 max-w-lg">
                <div className="space-y-4">
                  <p className="text-white/90 text-xl leading-relaxed font-light">
                    Institutional-grade portfolio management for discerning investors.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Regulated. Transparent. Performance-driven.
                  </p>
                </div>
                
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">$2.4B+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Assets Under Management</div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">15+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">Years Experience</div>
                  </div>
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

      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/3 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/2 via-transparent to-transparent"></div>
      
      {/* Geometric Elements */}
      <div className="absolute top-1/4 right-16 w-1 h-32 bg-gradient-to-b from-primary/40 to-transparent"></div>
      <div className="absolute top-1/3 right-20 w-8 h-px bg-primary/30"></div>
      <div className="absolute bottom-1/3 left-16 w-1 h-24 bg-gradient-to-t from-accent/30 to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Index;
