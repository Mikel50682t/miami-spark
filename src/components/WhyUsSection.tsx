import { motion } from "framer-motion";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed Florida electricians with comprehensive liability coverage." },
  { icon: Clock, title: "Same-Day Service", desc: "Emergency and same-day appointments available 7 days a week." },
  { icon: Award, title: "20+ Years Experience", desc: "Decades of expertise serving residential and commercial clients in Miami." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "4.7-star rating with a 100% satisfaction guarantee on every job." },
];

const WhyUsSection = () => (
  <section className="py-24 section-dark" id="why-us">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-display text-4xl md:text-5xl mt-2">Miami Trusts Us</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
              <r.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl mb-2">{r.title}</h3>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
