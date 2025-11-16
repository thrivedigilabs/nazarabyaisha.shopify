import { motion } from "framer-motion";

const DesignerVision = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Small Label */}
          <p className="text-sm tracking-widest text-primary mb-4 uppercase">
            Creative Director
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 gold-text">
            By Aisha — The Vision
          </h2>

          {/* Quote Block */}
          <div className="relative pl-6 md:pl-8 border-l-4 border-primary mb-8">
            <blockquote className="text-lg md:text-xl text-foreground/90 italic leading-relaxed text-left">
              "Each Nazara creation is more than just a garment—it's a celebration of the 
              woman who wears it. My vision is to craft pieces that honor our rich heritage 
              while empowering the modern bride to write her own story. Every stitch, every 
              embellishment is a testament to the artisans whose hands bring these dreams to life."
            </blockquote>
          </div>

          {/* Signature */}
          <div className="text-right max-w-3xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl gold-text italic mb-2">
              — Aisha
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              Founder & Creative Director
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignerVision;
