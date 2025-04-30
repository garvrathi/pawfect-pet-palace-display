import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProductCard, { Product } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from("products").select("*");

        if (error) throw error;

        // Map Supabase data to match your Product interface
        const formattedProducts =
          data?.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image_url: product.image_url, // Map from image_url to imageUrl
            category: product.category,
          })) || [];

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-12">
            <div className="section-container">
              <h1 className="text-4xl font-bold mb-4">Our Products</h1>
              <p className="text-gray-600 max-w-2xl">
                Browse our selection of high-quality pet products...
              </p>
            </div>
          </div>

          <div className="section-container py-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search skeleton */}
              <div className="relative flex-grow h-10 bg-gray-100 rounded-md animate-pulse"></div>
              {/* Category filter skeletons */}
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-16 bg-gray-100 rounded-md animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Products grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg h-80 animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-12">
          <div className="section-container">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl">
              Browse our selection of high-quality pet products designed to keep
              your furry friends happy, healthy, and comfortable.
            </p>
          </div>
        </div>

        <div className="section-container py-8">
          {/* Search and filters - unchanged CSS */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={selectedCategory === "all" ? "pet-button" : ""}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "food" ? "default" : "outline"}
                className={selectedCategory === "food" ? "pet-button" : ""}
                onClick={() => setSelectedCategory("food")}
              >
                Food
              </Button>
              <Button
                variant={selectedCategory === "toys" ? "default" : "outline"}
                className={selectedCategory === "toys" ? "pet-button" : ""}
                onClick={() => setSelectedCategory("toys")}
              >
                Toys
              </Button>
              <Button
                variant={
                  selectedCategory === "accessories" ? "default" : "outline"
                }
                className={
                  selectedCategory === "accessories" ? "pet-button" : ""
                }
                onClick={() => setSelectedCategory("accessories")}
              >
                Accessories
              </Button>
              <Button
                variant={selectedCategory === "health" ? "default" : "outline"}
                className={selectedCategory === "health" ? "pet-button" : ""}
                onClick={() => setSelectedCategory("health")}
              >
                Health
              </Button>
            </div>
          </div>

          {/* Products grid - unchanged CSS */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-3">No products found</p>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
