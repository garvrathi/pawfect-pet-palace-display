
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";

const FeaturedProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Premium Dog Food",
      description: "High-quality nutritious dog food for all breeds with added vitamins and minerals.",
      price: 29.99,
      imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=500&auto=format&fit=crop",
      category: "food"
    },
    {
      id: 2,
      name: "Cat Tree House",
      description: "Multi-level cat tree with scratching posts, hammock and cozy hideaway spots.",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1591871937573-74dbce261b62?q=80&w=500&auto=format&fit=crop",
      category: "accessories"
    },
    {
      id: 3,
      name: "Interactive Dog Toy",
      description: "Mentally stimulating toy that dispenses treats as your dog plays.",
      price: 19.99,
      imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500&auto=format&fit=crop",
      category: "toys"
    },
    {
      id: 4,
      name: "Pet Grooming Kit",
      description: "Complete set of grooming tools for dogs and cats including brushes, clippers, and combs.",
      price: 34.99,
      imageUrl: "https://images.unsplash.com/photo-1635499829675-3282b954c3e8?q=80&w=500&auto=format&fit=crop",
      category: "health"
    },
  ]);

  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link to="/products" className="text-petcare-purple font-medium flex items-center hover:text-petcare-purple/70 transition-colors">
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
