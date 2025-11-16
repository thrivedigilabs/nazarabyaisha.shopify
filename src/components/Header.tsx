import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-serif text-2xl gold-text tracking-wide">
              NAZARA BY AISHA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/collections" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Collections
            </Link>
            <Link to="/bridal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Bridal
            </Link>
            <Link to="/lookbook" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Lookbook
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist">
              <Heart className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <button>
              <ShoppingBag className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 flex flex-col gap-4">
                <Link
                  to="/collections"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  to="/bridal"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bridal
                </Link>
                <Link
                  to="/lookbook"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lookbook
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
