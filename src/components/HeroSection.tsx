import { motion } from "framer-motion";
import { Star, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll call you back shortly.");
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="contact">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Miami electrician at work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="container relative mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < 5 ? "text-accent fill-accent" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="text-section-dark-foreground font-medium">4.7 · 20 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-section-dark-foreground leading-[1.05] mb-6 text-glow">
            Miami's Most Trusted<br />
            <span className="text-primary">Electricians</span>
          </h1>

          <p className="text-lg text-section-dark-foreground/80 mb-8 max-w-lg font-body">
            Licensed & insured electrical experts serving Miami-Dade County. From panel upgrades to smart home installs — we power your world safely.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-section-dark-foreground/70">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 1410 SW 22nd Ave, Miami</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open Until 8 PM</span>
            <a href="tel:+18449879393" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" /> (844) 987-9393</a>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card/95 backdrop-blur-sm rounded-xl p-8 card-glow border electric-border"
          >
            <h2 className="font-display text-2xl text-card-foreground mb-1">Get a Free Quote</h2>
            <p className="text-muted-foreground text-sm mb-6">We respond within 30 minutes</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted text-foreground rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                maxLength={20}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-muted text-foreground rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-muted text-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a Service</option>
                <option>Electrical Repairs</option>
                <option>Panel Upgrades</option>
                <option>Lighting Installation</option>
                <option>EV Charger Install</option>
                <option>Smart Home Wiring</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Describe your project (optional)"
                value={form.message}
                maxLength={500}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full bg-muted text-foreground rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-display text-lg py-3.5 rounded-md hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                GET MY FREE QUOTE →
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              ⚡ No obligation · Licensed & Insured · Same-day service available
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
