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
    <div className="space-y-4">
      <p className="text-white/60 text-sm">Please select your location</p>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-full max-w-xs bg-secondary border border-border rounded-lg px-4 py-3 text-left text-white flex items-center justify-between hover:bg-secondary/80 transition-colors">
            <span className={selectedCountry ? "text-white" : "text-white/60"}>
              {selectedCountry || "Select your country"}
            </span>
            <ChevronDown className="h-4 w-4 text-white/60" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-80 max-h-60 overflow-y-auto bg-secondary border border-border z-50"
          align="start"
        >
          {countries.map((country) => (
            <DropdownMenuItem
              key={country.code}
              onClick={() => onCountrySelect(country.name)}
              className="text-white hover:bg-primary hover:text-black cursor-pointer"
            >
              {country.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <button 
        onClick={onSubmit}
        disabled={!selectedCountry}
        className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-black px-8 py-3 rounded-lg font-medium transition-colors"
      >
        Continue
      </button>
    </div>
  );
};