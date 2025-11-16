import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Wishlist = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-8 gold-text">Wishlist</h1>
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">Your wishlist is empty</p>
          <p className="text-sm text-muted-foreground mt-2">
            Add items you love to see them here
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
