
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Product } from "../ProductCard";
import ProductForm from "./ProductForm";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProductManagement = () => {
  // Mock initial products data
  const initialProducts = [
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
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddProduct = (productData: Omit<Product, "id">) => {
    const newProduct = {
      ...productData,
      id: Math.max(0, ...products.map((p) => p.id)) + 1
    };
    
    setProducts([...products, newProduct]);
    toast.success("Product added successfully");
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = (productData: Omit<Product, "id">) => {
    if (!productToEdit) return;
    
    const updatedProducts = products.map((product) =>
      product.id === productToEdit.id
        ? { ...productData, id: product.id }
        : product
    );
    
    setProducts(updatedProducts);
    toast.success("Product updated successfully");
    setProductToEdit(null);
    setIsEditDialogOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    toast.success("Product deleted successfully");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="pet-button">
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <ProductForm 
              onSubmit={handleAddProduct} 
              onCancel={() => setIsAddDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="toys">Toys</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="health">Health & Care</TabsTrigger>
        </TabsList>
        
        {["all", "food", "toys", "accessories", "health"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter((product) => category === "all" || product.category === category)
                    .map((product) => (
                      <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-4 py-3">{product.id}</td>
                        <td className="px-4 py-3">
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-12 h-12 rounded-md object-cover"
                          />
                        </td>
                        <td className="px-4 py-3 font-medium">{product.name}</td>
                        <td className="px-4 py-3 capitalize">{product.category}</td>
                        <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                        <td className="px-4 py-3 flex gap-2">
                          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => {
                                  setProductToEdit(product);
                                  setIsEditDialogOpen(true);
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            {productToEdit && productToEdit.id === product.id && (
                              <DialogContent className="sm:max-w-lg">
                                <DialogHeader>
                                  <DialogTitle>Edit Product</DialogTitle>
                                </DialogHeader>
                                <ProductForm 
                                  product={productToEdit}
                                  onSubmit={handleEditProduct} 
                                  onCancel={() => {
                                    setProductToEdit(null);
                                    setIsEditDialogOpen(false);
                                  }}
                                />
                              </DialogContent>
                            )}
                          </Dialog>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Product</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete "{product.name}"? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction 
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="bg-red-500 hover:bg-red-600"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              
              {products.filter((product) => category === "all" || product.category === category).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found in this category</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductManagement;
