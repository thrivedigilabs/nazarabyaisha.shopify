import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "My bridal lehenga was beyond my dreams. The craftsmanship and attention to detail was extraordinary. Every stitch told a story of heritage and artistry.",
  },
  {
    name: "Ananya Mehta",
    quote: "Aisha's designs are truly unique. I felt like royalty on my wedding day. The entire experience, from consultation to the final piece, was exceptional.",
  },
  {
    name: "Riya Kapoor",
    quote: "The entire experience was luxurious. From consultation to the final fitting, everything was perfect. The garment exceeded all my expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 gold-text">
            Our Brides Speak
          </h2>
          <p className="text-lg text-muted-foreground">
            Cherished moments from brides who chose Nazara
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 hover-scale"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Name */}
              <p className="font-serif text-xl gold-text">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
