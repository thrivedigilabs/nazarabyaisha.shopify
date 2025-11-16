import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-bridal.jpg";
import sareeImage from "@/assets/product-saree-1.jpg";
import emeraldImage from "@/assets/product-emerald-1.jpg";
import champagneImage from "@/assets/product-champagne-1.jpg";
import detailImage from "@/assets/product-detail-1.jpg";
import gownBlack from "@/assets/lookbook/gown-black.jpg";
import gownYellow from "@/assets/lookbook/gown-yellow.jpg";
import lehengaDark from "@/assets/lookbook/lehenga-dark.jpg";
import lehengaGold1 from "@/assets/lookbook/lehenga-gold-1.jpg";
import lehengaGold2 from "@/assets/lookbook/lehenga-gold-2.jpg";
import lehengaOrange from "@/assets/lookbook/lehenga-orange.jpg";
import lehengaRedYellow from "@/assets/lookbook/lehenga-red-yellow.jpg";
import lehengaWhite from "@/assets/lookbook/lehenga-white.jpg";

const lookbookRow1 = [
  { src: heroImage, alt: "Bridal lehenga editorial shot" },
  { src: emeraldImage, alt: "Emerald velvet lehenga editorial" },
  { src: champagneImage, alt: "Champagne gold bridal gown editorial" },
  { src: lehengaRedYellow, alt: "Red and gold bridal lehenga" },
  { src: lehengaGold1, alt: "Golden bridal lehenga with intricate work" },
  { src: gownBlack, alt: "Elegant black gown editorial" },
];

const lookbookRow2 = [
  { src: sareeImage, alt: "Ivory organza saree editorial" },
  { src: detailImage, alt: "Close-up embroidery detail shot" },
  { src: gownYellow, alt: "Yellow gown editorial" },
  { src: lehengaDark, alt: "Dark luxury lehenga editorial" },
  { src: lehengaGold2, alt: "Gold bridal lehenga couture" },
  { src: lehengaOrange, alt: "Orange lehenga editorial shot" },
  { src: lehengaWhite, alt: "White bridal lehenga" },
];

const Lookbook = () => {
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
            Lookbook
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest editorial collections
          </p>
        </motion.div>

        {/* First Row Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {lookbookRow1.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative overflow-hidden rounded-2xl luxury-shadow">
                    <div className="aspect-[3/4] bg-secondary">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>

        {/* Second Row Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {lookbookRow2.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative overflow-hidden rounded-2xl luxury-shadow">
                    <div className="aspect-[3/4] bg-secondary">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Lookbook;
