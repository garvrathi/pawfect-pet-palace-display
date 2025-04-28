
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Products = () => {
  // Mock products data
  const allProducts = [
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
    {
      id: 5,
      name: "Cat Litter Box",
      description: "Enclosed litter box with odor-control system and easy-clean features.",
      price: 49.99,
      imageUrl: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=500&auto=format&fit=crop",
      category: "accessories"
    },
    {
      id: 6,
      name: "Premium Cat Food",
      description: "Balanced nutrition for cats with high protein content and added taurine.",
      price: 24.99,
      imageUrl: "https://images.unsplash.com/photo-1599745422161-39de9addfb56?q=80&w=500&auto=format&fit=crop",
      category: "food"
    },
    {
      id: 7,
      name: "Dog Collar",
      description: "Durable and adjustable collar with reflective strips for night safety.",
      price: 14.99,
      imageUrl: "https://images.unsplash.com/photo-1603189406860-6405908018da?q=80&w=500&auto=format&fit=crop",
      category: "accessories"
    },
    {
      id: 8,
      name: "Pet Multivitamins",
      description: "Complete daily vitamin supplement for pets' overall health and immune system support.",
      price: 19.99,
      imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=500&auto=format&fit=crop",
      category: "health"
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search term and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-12">
          <div className="section-container">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl">
              Browse our selection of high-quality pet products designed to keep your furry friends happy, healthy, and comfortable.
            </p>
          </div>
        </div>
        
        <div className="section-container py-8">
          {/* Search and filters */}
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
                variant={selectedCategory === "accessories" ? "default" : "outline"}
                className={selectedCategory === "accessories" ? "pet-button" : ""}
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
          
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-3">No products found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
