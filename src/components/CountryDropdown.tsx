import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

interface CountryDropdownProps {
  selectedCountry: string;
  onCountrySelect: (country: string) => void;
}

export const CountryDropdown = ({ selectedCountry, onCountrySelect }: CountryDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border/50 text-foreground hover:bg-card/70 hover:border-primary/50 transition-all duration-300"
        >
          <span className="text-left flex-1">
            {selectedCountry || "Select your location"}
          </span>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-w-md dropdown-elegant">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            className="cursor-pointer hover:bg-accent/10 focus:bg-accent/10 transition-colors"
            onSelect={() => onCountrySelect(country.name)}
          >
            {country.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};