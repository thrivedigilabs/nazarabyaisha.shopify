import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-6xl mb-6 gold-text text-center">
            About Nazara by Aisha
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-serif text-3xl gold-text mb-4">Our Story</h2>
              <p className="text-lg leading-relaxed">
                Nazara by Aisha was born from a deep passion for preserving traditional Indian
                craftsmanship while creating contemporary couture for the modern woman. Founded by
                designer Aisha, our atelier has become synonymous with luxury, heritage, and
                uncompromising quality.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl gold-text mb-4">The Designer</h2>
              <p className="text-lg leading-relaxed">
                Aisha's journey began in the heritage workshops of traditional artisans, where she
                learned the ancient techniques of zari work, meenakari, and hand embroidery. Today,
                she leads a team of master craftspeople who share her vision of creating wearable
                art that tells a story.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl gold-text mb-4">Our Craftsmanship</h2>
              <p className="text-lg leading-relaxed">
                Every Nazara creation requires between 300-650 hours of meticulous handwork. We use
                only authentic 24k gold thread, the finest silks, and heritage embroidery techniques
                that have been passed down through generations. Our artisans are the heart of our
                brand, and their dedication ensures that each piece is truly one-of-a-kind.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl gold-text mb-4">Our Philosophy</h2>
              <p className="text-lg leading-relaxed">
                We believe that luxury is in the details, the time invested, and the stories woven
                into every thread. Sustainability and ethical practices are at our core - we work
                directly with artisan communities, ensuring fair wages and preserving traditional
                crafts for future generations.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
