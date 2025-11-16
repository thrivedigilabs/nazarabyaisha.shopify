import { motion } from "framer-motion";
import detailImage from "@/assets/product-detail-1.jpg";

const Craftsmanship = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-secondary rounded-2xl overflow-hidden luxury-shadow">
              <img
                src={detailImage}
                alt="Intricate 24k gold zari embroidery detail"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl gold-text">
              The Art of Couture
            </h2>
            <p className="text-lg text-muted-foreground">
              Every Nazara creation is a masterpiece born from the hands of skilled artisans
              who have inherited generations of traditional techniques.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl mb-2">24k Gold Thread</h3>
                <p className="text-muted-foreground">
                  Authentic gold zari work that adds timeless luxury and brilliant lustre to
                  each garment.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl mb-2">Heritage Techniques</h3>
                <p className="text-muted-foreground">
                  Time-honored embroidery methods including meenakari, zardozi, and traditional
                  hand-stitching.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl mb-2">Artisan Excellence</h3>
                <p className="text-muted-foreground">
                  Each piece requires 300-650 hours of dedicated craftsmanship, ensuring
                  unparalleled quality and detail.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
