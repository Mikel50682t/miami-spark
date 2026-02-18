import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Kitchen LED lighting installation" },
  { src: gallery2, alt: "Outdoor landscape lighting Miami" },
  { src: gallery3, alt: "Commercial electrical panel" },
  { src: gallery4, alt: "Smart home automation panel" },
  { src: gallery5, alt: "EV charger installation" },
  { src: gallery6, alt: "Bathroom vanity lighting" },
];

const GallerySection = () => (
  <section className="py-24 bg-background" id="gallery">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Work</span>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Recent Projects</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="aspect-square overflow-hidden rounded-xl group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
