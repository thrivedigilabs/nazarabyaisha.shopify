import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Phone, Award, Truck, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { getProductImage } from "@/utils/imageMapper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import AppointmentModal from "@/components/AppointmentModal";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success("Added to cart!");
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/911234567890?text=Hi, I'm interested in ${product.title} (${product.sku})`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          {" / "}
          <Link to="/collections" className="hover:text-primary">Collections</Link>
          {" / "}
          <span>{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Images */}
          <div className="flex gap-4">
            {/* Thumbnails filmstrip */}
            <div className="flex flex-col gap-3 w-20">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-primary scale-105"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={getProductImage(img)}
                    alt={`${product.title} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main hero image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="flex-1 aspect-[3/4] bg-secondary rounded-2xl overflow-hidden luxury-shadow"
            >
              {product.images[selectedImage] && getProductImage(product.images[selectedImage]) ? (
                <img
                  src={getProductImage(product.images[selectedImage])}
                  alt={product.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="aspect-[3/4] flex items-center justify-center">
                  <p className="text-muted-foreground">Image preview</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT: Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl mb-2 gold-text">
                {product.title}
              </h1>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                SKU: {product.sku}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl gold-text">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="px-2 py-1 bg-primary text-black text-sm rounded-full">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-3">Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? "border-primary scale-105 bg-primary/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium">Size</p>
                <button className="text-sm text-primary hover:underline">Size Chart</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg border-2 transition-all text-sm ${
                      selectedSize === size
                        ? "border-primary scale-105 bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full gold-gradient text-black font-serif text-lg hover-scale gold-glow-hover rounded-xl"
            >
              Add to Cart
            </Button>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                onClick={() => setAppointmentOpen(true)}
                variant="outline"
                className="border-primary text-primary"
              >
                <Phone className="mr-2 h-4 w-4" />
                Speak to our Stylist
              </Button>
              <Button onClick={handleWhatsApp} variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>

            {/* Rewards */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              Earn {product.rewardPoints} reward points
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Shipping worldwide
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                COD available
              </div>
            </div>

            {/* Gift Box Banner */}
            <div className="bg-accent border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-sm">
                🎁 This product arrives in our signature premium gift box
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
                <TabsTrigger value="customization" className="flex-1">Customization</TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 text-muted-foreground">
                <p>{product.description}</p>
                <p className="mt-4">
                  Fabric sourced from heritage mills. Handcrafted over {product.craftsmanshipHours}+ hours by master artisans using traditional techniques passed down through generations.
                </p>
              </TabsContent>
              <TabsContent value="customization" className="mt-4 text-muted-foreground">
                {product.customizable ? (
                  <p>
                    This piece can be fully customized to your measurements and preferences. Our artisans can adjust colors, embroidery patterns, and silhouette details to create your perfect garment.
                  </p>
                ) : (
                  <p>This piece is available in standard sizes only.</p>
                )}
              </TabsContent>
              <TabsContent value="shipping" className="mt-4 text-muted-foreground">
                <p>
                  Worldwide shipping available. Standard delivery: 7-10 business days. Express delivery: 3-5 business days. All pieces are carefully packaged in our signature premium gift box.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Bottom Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-6 w-6 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-2">Video Call</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try virtually with our styling experts
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary">
              Book Now
            </Button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
              <Award className="h-6 w-6 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-2">Customise</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Make it your perfect size and style
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary">
              Contact Us
            </Button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-6 w-6 text-black" />
            </div>
            <h3 className="font-serif text-xl mb-2">Need it Sooner?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Express delivery available
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <AppointmentModal open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    </div>
  );
};

export default ProductDetail;
