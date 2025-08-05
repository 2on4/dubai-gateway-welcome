import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "KW", name: "Kuwait" },
  { code: "BH", name: "Bahrain" },
  { code: "OM", name: "Oman" },
  { code: "EG", name: "Egypt" },
  { code: "JO", name: "Jordan" },
  { code: "LB", name: "Lebanon" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "CH", name: "Switzerland" },
  { code: "SG", name: "Singapore" },
  { code: "HK", name: "Hong Kong" },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-6 h-6 bg-black transform rotate-45"></div>
            </div>
            <span className="text-white font-semibold text-lg">Dataway</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-white hover:text-primary cursor-pointer">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <span className="text-white hover:text-primary cursor-pointer">About</span>
            <span className="text-white hover:text-primary cursor-pointer">Insights</span>
            <div className="flex items-center space-x-1 text-white hover:text-primary cursor-pointer">
              <span>Support</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          
          {/* Contact Button */}
          <Button className="bg-primary hover:bg-primary/90 text-black font-medium px-6">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

interface LocationSelectorProps {
  selectedCountry: string;
  onCountrySelect: (country: string) => void;
  onSubmit: () => void;
}

export const LocationSelector = ({ selectedCountry, onCountrySelect, onSubmit }: LocationSelectorProps) => {
  return (
    <div className="space-y-6">
      <p className="text-white/80 text-lg">Please select your location:</p>
      
      <div className="space-y-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full max-w-sm bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 justify-between"
            >
              <span>{selectedCountry || "Select your location"}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full max-w-sm bg-black/90 backdrop-blur-sm border-white/20">
            {countries.map((country) => (
              <DropdownMenuItem
                key={country.code}
                className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer"
                onSelect={() => onCountrySelect(country.name)}
              >
                {country.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button 
          onClick={onSubmit}
          className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-3"
          disabled={!selectedCountry}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};