import { Zap, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 section-dark border-t electric-border">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-display text-lg text-section-dark-foreground">Miami Electrical Services</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-section-dark-foreground/60">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 1410 SW 22nd Ave, Miami, FL 33145</span>
          <a href="tel:+18449879393" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" /> (844) 987-9393</a>
        </div>

        <p className="text-sm text-section-dark-foreground/40 md:text-right">
          © {new Date().getFullYear()} Miami Electrical Services. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
