
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Paw, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-petcare-purple/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Paw className="h-8 w-8 text-petcare-purple mr-2 animate-bounce-slow" />
              <span className="font-display text-xl font-bold bg-gradient-to-r from-petcare-purple to-petcare-pink bg-clip-text text-transparent">
                Petcare4sure
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-petcare-purple transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-petcare-purple transition-colors">
              Products
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-petcare-purple transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-petcare-purple transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/admin" className="font-medium text-sm text-gray-500 hover:text-petcare-purple transition-colors mr-4">
              Admin
            </Link>
            <Button variant="ghost" className="rounded-full p-2">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-petcare-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-petcare-pink/20 hover:text-petcare-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-petcare-pink/20 hover:text-petcare-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-petcare-pink/20 hover:text-petcare-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-petcare-pink/20 hover:text-petcare-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/admin" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-petcare-pink/20 hover:text-petcare-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
