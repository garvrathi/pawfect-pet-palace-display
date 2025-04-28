
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10">
      <div className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-petcare-purple/20 text-petcare-purple px-3 py-1 rounded-full text-sm font-medium">
            Stay Updated
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get updates on new products, special discounts, and pet care tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="pet-button sm:flex-shrink-0">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
