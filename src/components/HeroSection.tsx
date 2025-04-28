
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-petcare-purple/5 to-petcare-pink/10">
      <div className="section-container flex flex-col md:flex-row items-center py-16 md:py-24 gap-8">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Loving Care</span>
            <span className="bg-gradient-to-r from-petcare-purple to-petcare-pink bg-clip-text text-transparent">
              For Your Furry Friends
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg md:mx-0 mx-auto">
            Quality products for your beloved pets. From food to toys, we have everything to keep your pets happy and healthy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/products" className="pet-button flex items-center">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="px-6 py-2 rounded-full border border-petcare-purple/30 text-petcare-purple hover:bg-petcare-purple/10 transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-petcare-green text-green-800">Free Shipping</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-petcare-peach text-orange-800">100% Quality</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-petcare-blue text-blue-800">Pet-Friendly</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-full bg-petcare-pink/30 h-64 w-64 md:h-80 md:w-80 mx-auto overflow-hidden border-8 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Happy dog" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 -translate-x-8 translate-y-8 rounded-full bg-petcare-blue/30 h-32 w-32 overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Cat" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/4 translate-y-1/3 rounded-full bg-petcare-green/30 h-24 w-24 overflow-hidden border-4 border-white shadow-lg hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Hamster" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMEw2NDAgNzAgMCAwdjE0MGgxMjgwVjB6Ii8+PC9nPjwvc3ZnPg==')]" />
    </section>
  );
};

export default HeroSection;
