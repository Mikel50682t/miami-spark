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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b electric-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-primary" />
          <span className="font-display text-xl text-secondary-foreground tracking-wider">
            Miami Electrical
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="tel:+18449879393"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            (844) 987-9393
          </a>
        </div>

        <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-t electric-border px-4 pb-4"
        >
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-secondary-foreground hover:text-primary transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="tel:+18449879393"
            className="flex items-center justify-center gap-2 mt-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold"
          >
            <Phone className="h-4 w-4" />
            (844) 987-9393
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
