import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { getProductImage } from "@/utils/imageMapper";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden rounded-2xl bg-secondary luxury-shadow hover-scale aspect-[3/4]">
            {product.images[0] && getProductImage(product.images[0]) ? (
              <img
                src={getProductImage(product.images[0])}
                alt={product.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Image coming soon</p>
              </div>
            )}
            {product.discount && (
              <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                {product.discount}% OFF
              </div>
            )}
          </div>
        </Link>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover-scale"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          {product.sku}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl gold-text">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
