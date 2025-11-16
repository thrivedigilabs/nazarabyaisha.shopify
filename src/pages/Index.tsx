import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CollectionsPreview from "@/components/CollectionsPreview";
import DesignerVision from "@/components/DesignerVision";
import Lookbook from "@/components/Lookbook";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CollectionsPreview />
        <DesignerVision />
        <Lookbook />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
