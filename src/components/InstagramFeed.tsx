import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-bridal.jpg";
import sareeImage from "@/assets/product-saree-1.jpg";
import emeraldImage from "@/assets/product-emerald-1.jpg";
import champagneImage from "@/assets/product-champagne-1.jpg";
import detailImage from "@/assets/product-detail-1.jpg";

const instagramPosts = [
  { src: heroImage, alt: "Instagram post - Bridal collection" },
  { src: emeraldImage, alt: "Instagram post - Emerald lehenga" },
  { src: detailImage, alt: "Instagram post - Embroidery detail" },
  { src: champagneImage, alt: "Instagram post - Champagne gown" },
  { src: sareeImage, alt: "Instagram post - Ivory saree" },
  { src: heroImage, alt: "Instagram post - Couture collection" },
  { src: emeraldImage, alt: "Instagram post - Editorial shoot" },
  { src: champagneImage, alt: "Instagram post - Bridal wear" },
];

const InstagramFeed = () => {
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
            Follow Our Journey
          </h2>
          <a
            href="https://instagram.com/nazarabyaisha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            @nazarabyaisha
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/nazarabyaisha"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-secondary"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
