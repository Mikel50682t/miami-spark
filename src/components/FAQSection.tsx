import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed Florida electricians (License #EC13012345) with comprehensive general liability and workers' compensation insurance." },
  { q: "Do you offer emergency electrical services?", a: "Yes! We offer 24/7 emergency electrical services throughout Miami-Dade County. Call us anytime at (844) 987-9393 for urgent electrical issues." },
  { q: "How much does an electrical panel upgrade cost?", a: "Panel upgrades typically range from $1,500 to $4,000 depending on the amperage and complexity. We provide free estimates with transparent, upfront pricing — no hidden fees." },
  { q: "Do you work on commercial properties?", a: "Yes, we serve both residential and commercial clients including offices, retail spaces, restaurants, and multi-family buildings across Miami." },
  { q: "How quickly can you schedule a service call?", a: "We offer same-day service for most requests. For non-emergency jobs, we can typically schedule within 24-48 hours." },
  { q: "Do you offer warranties on your work?", a: "Yes, all our work comes with a minimum 1-year labor warranty. Many products and installations carry extended manufacturer warranties as well." },
];

const FAQSection = () => (
  <section className="py-24 section-dark" id="faq">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Questions?</span>
        <h2 className="font-display text-4xl md:text-5xl mt-2">FAQ</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-secondary/50 border electric-border rounded-lg px-6 data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="text-left text-section-dark-foreground hover:text-primary font-medium py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-section-dark-foreground/70 pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
