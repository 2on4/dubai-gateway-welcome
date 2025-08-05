import { useState } from "react";
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
];

interface LocationSelectorProps {
  selectedCountry: string;
  onCountrySelect: (country: string) => void;
  onSubmit: () => void;
}

export const LocationSelector = ({ selectedCountry, onCountrySelect, onSubmit }: LocationSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-px w-8 bg-primary/50"></div>
          <p className="text-white/70 text-sm font-medium tracking-wide uppercase">Regional Access</p>
        </div>
        
        <div className="flex items-end space-x-4">
          <div className="flex-1 max-w-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-left text-white flex items-center justify-between hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group shadow-lg">
                  <span className={selectedCountry ? "text-white font-medium" : "text-white/60"}>
                    {selectedCountry || "Select your jurisdiction"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-white/60 group-hover:text-primary/80 transition-colors" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-80 max-h-60 overflow-y-auto bg-black/95 backdrop-blur-xl border border-white/10 z-50 shadow-2xl"
                align="start"
              >
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => onCountrySelect(country.name)}
                    className="text-white hover:bg-primary/20 hover:text-primary cursor-pointer py-3 px-4 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-1 h-4 bg-primary/0 group-hover:bg-primary transition-all duration-200"></div>
                      <span className="font-medium">{country.name}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <button 
            onClick={onSubmit}
            disabled={!selectedCountry}
            className="bg-primary hover:bg-primary-glow disabled:bg-primary/30 disabled:cursor-not-allowed text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-glow disabled:shadow-none transform hover:-translate-y-0.5 disabled:transform-none tracking-wide"
          >
            Access Portal
          </button>
        </div>
      </div>
    </div>
  );
};