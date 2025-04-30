import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="py-16">
          <FeaturedProducts />
        </div>
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
