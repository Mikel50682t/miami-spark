import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <a
            href="tel:+18449879393"
            className="group flex items-center gap-3 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-display font-bold whitespace-nowrap">
              CALL NOW: (844) 987-9393
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCallButton;
