
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Product } from "../ProductCard";

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Omit<Product, "id">) => void;
  onCancel: () => void;
}

const ProductForm = ({ product, onSubmit, onCancel }: ProductFormProps) => {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price.toString() || "");
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");
  const [category, setCategory] = useState(product?.category || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !description || !price || !imageUrl || !category) {
      toast.error("Please fill in all fields");
      return;
    }
    
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error("Please enter a valid price");
      return;
    }
    
    onSubmit({
      name,
      description,
      price: priceValue,
      imageUrl,
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Product Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          rows={4}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="price" className="block text-sm font-medium">
            Price ($)
          </label>
          <Input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <Select
            value={category}
            onValueChange={(value) => setCategory(value)}
            required
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food">Pet Food</SelectItem>
              <SelectItem value="toys">Toys</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="health">Health & Care</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="imageUrl" className="block text-sm font-medium">
          Image URL
        </label>
        <Input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
          required
        />
      </div>
      
      <div className="pt-4 flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="pet-button">
          {product ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
