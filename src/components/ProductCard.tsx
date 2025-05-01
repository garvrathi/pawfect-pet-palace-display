
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export interface Product {
  id: string; // Changed from number to string to match Supabase UUID
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  created_at?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log("Product image URL:", product.image_url);
  return (
    <div className="pet-card group">
      <div className="relative overflow-hidden h-56">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-product.png";
            (e.target as HTMLImageElement).classList.remove(
              "group-hover:scale-110",
            );
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="text-petcare-purple font-semibold">
            Rs. {product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-col space-y-2">
          <a href="/contact">
            <Button className="pet-button w-full">
              <Mail className="w-4 h-4 mr-2" /> Contact Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
