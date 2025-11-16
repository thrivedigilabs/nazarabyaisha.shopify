import { useState } from "react";
import { Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under ₹1L", min: 0, max: 100000 },
    { label: "₹1L - ₹1.5L", min: 100000, max: 150000 },
    { label: "Above ₹1.5L", min: 150000, max: Infinity },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const selectedRange = priceRanges.find((r) => r.label === selectedPriceRange);
    const priceMatch =
      !selectedRange ||
      selectedRange.label === "All" ||
      (product.price >= selectedRange.min && product.price < selectedRange.max);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 gold-text">Luxury Couture Collection</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover exquisite handcrafted pieces that celebrate heritage and elegance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-xl mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-serif text-xl mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(range.label)}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedPriceRange === range.label
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <p className="text-muted-foreground">Showing {filteredProducts.length} pieces</p>
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-8">
                    {/* Category Filter */}
                    <div>
                      <h3 className="font-serif text-lg mb-4">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setFilterOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded transition-colors ${
                              selectedCategory === category
                                ? "bg-primary text-primary-foreground font-medium"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                      <h3 className="font-serif text-lg mb-4">Price Range</h3>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <button
                            key={range.label}
                            onClick={() => {
                              setSelectedPriceRange(range.label);
                              setFilterOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded transition-colors ${
                              selectedPriceRange === range.label
                                ? "bg-primary text-primary-foreground font-medium"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop product count */}
            <p className="text-muted-foreground mb-6 hidden lg:block">Showing {filteredProducts.length} pieces</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
