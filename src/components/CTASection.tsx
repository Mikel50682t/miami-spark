import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10"><Zap className="h-40 w-40" /></div>
        <div className="absolute bottom-10 right-10"><Zap className="h-60 w-60" /></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Same-day service available for Miami-Dade County.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground font-display text-lg px-10 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              GET A FREE QUOTE
            </button>
            <a
              href="tel:+18449879393"
              className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-display text-lg px-10 py-4 rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
