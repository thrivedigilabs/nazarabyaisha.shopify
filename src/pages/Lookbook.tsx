import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import lookbook images
import lehenga1 from "@/assets/lookbook/lehenga-gold-1.jpg";
import lehenga2 from "@/assets/lookbook/lehenga-gold-2.jpg";
import gownBlack from "@/assets/lookbook/gown-black.jpg";
import lehengaWhite from "@/assets/lookbook/lehenga-white.jpg";
import lehengaOrange from "@/assets/lookbook/lehenga-orange.jpg";
import lehengaRedYellow from "@/assets/lookbook/lehenga-red-yellow.jpg";
import lehengaDark from "@/assets/lookbook/lehenga-dark.jpg";
import gownYellow from "@/assets/lookbook/gown-yellow.jpg";

type Category = "All" | "Gowns" | "Sarees" | "Lehengas";

interface LookbookImage {
  src: string;
  alt: string;
  category: "Gowns" | "Sarees" | "Lehengas";
  title: string;
}

const lookbookImages: LookbookImage[] = [
  { src: lehenga1, alt: "Gold embellished bridal lehenga", category: "Lehengas", title: "Gold Lehenga" },
  { src: lehenga2, alt: "Golden bridal lehenga with intricate work", category: "Lehengas", title: "Gold Bridal Lehenga" },
  { src: gownBlack, alt: "Elegant black evening gown", category: "Gowns", title: "Black Evening Gown" },
  { src: lehengaWhite, alt: "White bridal lehenga", category: "Lehengas", title: "White Lehenga" },
  { src: lehengaOrange, alt: "Orange embroidered lehenga", category: "Lehengas", title: "Orange Lehenga" },
  { src: lehengaRedYellow, alt: "Red and yellow bridal lehenga", category: "Lehengas", title: "Red & Yellow Lehenga" },
  { src: lehengaDark, alt: "Dark luxury bridal lehenga", category: "Lehengas", title: "Dark Bridal Lehenga" },
  { src: gownYellow, alt: "Yellow evening gown", category: "Gowns", title: "Yellow Gown" },
];

const Lookbook = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredImages =
    selectedCategory === "All"
      ? lookbookImages
      : lookbookImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 gold-text">
              Lookbook
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our exquisite collection of bridal wear through our editorial shoots
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as Category)}
            className="mb-12"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-muted/50">
              <TabsTrigger value="All" className="data-[state=active]:gold-text">
                All
              </TabsTrigger>
              <TabsTrigger value="Gowns" className="data-[state=active]:gold-text">
                Gowns
              </TabsTrigger>
              <TabsTrigger value="Sarees" className="data-[state=active]:gold-text">
                Sarees
              </TabsTrigger>
              <TabsTrigger value="Lehengas" className="data-[state=active]:gold-text">
                Lehengas
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl luxury-shadow"
              >
                <div className="aspect-[3/4] bg-secondary">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h3 className="font-serif text-xl text-foreground">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {filteredImages.map((image, index) => (
                  <CarouselItem key={`${image.src}-${index}`}>
                    <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                      <div className="aspect-[3/4] bg-secondary">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                        <h3 className="font-serif text-xl text-foreground">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Swipe to explore more
            </div>
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground">
                No items found in this category. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lookbook;
