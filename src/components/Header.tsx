import { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const nav = siteConfig.navigation.filter((n) => n.enabled);
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl tracking-wide text-primary">LEVENTIS</a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm text-foreground hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <button aria-label="Toggle menu" className="md:hidden p-2 rounded border border-border" onClick={() => setOpen((v)=>!v)}>
          {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="py-2 text-foreground hover:text-primary">{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
