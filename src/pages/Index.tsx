import { useState } from "react";
import { Navigation, LocationSelector } from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
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
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left side - Dynamic Image Grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[80vh] max-h-[600px]">
              {/* Large top-left image */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-all duration-500"></div>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
              
              {/* Top-right image */}
              <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-all duration-500"></div>
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
              
              {/* Middle-right image */}
              <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-all duration-500"></div>
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
              
              {/* Bottom row spanning full width */}
              <div className="col-span-3 relative overflow-hidden rounded-lg group cursor-pointer">
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-all duration-500"></div>
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 lg:pl-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight">
                  Leventis AMC
                </h1>
                <div className="space-y-3">
                  <p className="text-white/80 text-lg leading-relaxed">
                    Expertly managed portfolios for institutional and private clients.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
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
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Index;
