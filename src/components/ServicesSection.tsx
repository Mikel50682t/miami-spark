import { motion } from "framer-motion";
import { Zap, Lightbulb, Home, Battery, Wrench, ShieldCheck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Electrical Repairs", desc: "Fast, reliable fixes for outlets, switches, wiring issues and electrical emergencies." },
  { icon: Zap, title: "Panel Upgrades", desc: "Upgrade your electrical panel to handle modern power demands safely and efficiently." },
  { icon: Lightbulb, title: "Lighting Installation", desc: "Interior, exterior, and landscape lighting design and installation for any space." },
  { icon: Battery, title: "EV Charger Install", desc: "Level 2 home EV charger installation for Tesla, Ford, and all electric vehicles." },
  { icon: Home, title: "Smart Home Wiring", desc: "Complete smart home integration — automation, security, lighting, and entertainment." },
  { icon: ShieldCheck, title: "Safety Inspections", desc: "Comprehensive electrical inspections for homes, condos, and commercial properties." },
];

const ServicesSection = () => (
  <section className="py-24 bg-background" id="services">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">What We Do</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 hover:card-glow transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
