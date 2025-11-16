import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bridal-new.jpg";
import mobileHeroImage from "@/assets/hero-mobile-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mobile Background Image - Portrait oriented with face clearly visible */}
      <div className="absolute inset-0 md:hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={mobileHeroImage}
          alt="Luxury bridal lehenga with intricate zari embroidery and traditional jewelry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent/20" />
      </div>

      {/* Desktop Background Image - Horizontal gradient */}
      <div className="hidden md:block absolute inset-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroImage}
          alt="Luxury bridal lehenga with intricate zari embroidery and traditional jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 min-h-screen flex items-end md:items-center pb-12 md:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:max-w-2xl lg:max-w-xl text-center md:text-left"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 gold-text leading-tight">
            Couture for the Modern Royal
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-4 md:mb-6 font-light">
            Where Heritage Meets Contemporary Luxury
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
            Exquisite handcrafted couture celebrating Indian artistry. Each piece tells a story of timeless elegance and meticulous craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/collections" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gold-gradient text-black font-serif text-base md:text-lg hover-scale gold-glow-hover rounded-xl px-8"
              >
                Explore the Collection
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-white hover:bg-primary/10 font-serif text-base md:text-lg hover-scale rounded-xl px-8"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
