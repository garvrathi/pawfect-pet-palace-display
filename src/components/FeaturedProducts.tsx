import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(4); // Get only 4 featured products

        if (error) throw error;

        // Map Supabase data to match your Product type
        const formattedProducts =
          data?.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.image_url, // Map from image_url to imageUrl
            category: product.category,
          })) || [];

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Loading state (optional)
  if (isLoading) {
    return (
      <section className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="text-petcare-purple font-medium flex items-center hover:text-petcare-purple/70 transition-colors"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg h-80 animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link
          to="/products"
          className="text-petcare-purple font-medium flex items-center hover:text-petcare-purple/70 transition-colors"
        >
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
