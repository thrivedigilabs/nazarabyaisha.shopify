import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/hero-bridal.jpg";
import emeraldImage from "@/assets/product-emerald-1.jpg";
import sareeImage from "@/assets/product-saree-1.jpg";
import champagneImage from "@/assets/product-champagne-1.jpg";
import detailImage from "@/assets/product-detail-1.jpg";

const collections = [
  {
    title: "Bridal Couture",
    pieces: 28,
    image: heroImage,
    link: "/collections?category=Bridal",
  },
  {
    title: "Lehengas",
    pieces: 45,
    image: emeraldImage,
    link: "/collections?category=Lehengas",
  },
  {
    title: "Sarees",
    pieces: 36,
    image: sareeImage,
    link: "/collections?category=Sarees",
  },
  {
    title: "Gowns",
    pieces: 22,
    image: champagneImage,
    link: "/collections?category=Gowns",
  },
  {
    title: "Occasion Wear",
    pieces: 34,
    image: detailImage,
    link: "/collections?category=Occasion",
  },
];

const CollectionCard = ({ collection, index }: { collection: typeof collections[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="h-full"
  >
    <Link to={collection.link} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl bg-black h-[400px] md:h-[450px]">
        <img
          src={collection.image}
          alt={`${collection.title} collection - luxury Indian couture`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-3xl md:text-4xl gold-text mb-2">
            {collection.title}
          </h3>
          <p className="text-gray-300 text-sm">
            {collection.pieces} pieces
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

const CollectionsPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 gold-text">
            Premium Collections
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated selection of luxury couture, each piece a masterpiece
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.title} collection={collection} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {collections.map((collection, index) => (
                <CarouselItem key={collection.title} className="basis-4/5">
                  <CollectionCard collection={collection} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;
