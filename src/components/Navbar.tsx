import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, Zap } from "lucide-react";

const navLinks = ["Services", "Why Us", "Gallery", "FAQ", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-primary-foreground text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> 24/7 EMERGENCY SERVICE</span>
            <span className="flex items-center gap-1.5 opacity-80">LICENSED & INSURED · EC13012345</span>
          </div>
          <a href="tel:+18449879393" className="hover:underline flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> CALL NOW: (844) 987-9393
          </a>
        </div>
      </div>

      <nav className="bg-secondary/95 backdrop-blur-md border-b electric-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="flex items-center gap-2">
            <Zap className="h-7 w-7 text-primary" />
            <span className="font-display text-xl text-secondary-foreground tracking-wider uppercase font-bold">
              Miami Electrical
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {l}
              </button>
            ))}
            <a
              href="tel:+18449879393"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display font-semibold text-sm hover:opacity-90 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              (844) 987-9393
            </a>
          </div>

          <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
...
      </nav>
    </header>
  );
};

export default Navbar;
