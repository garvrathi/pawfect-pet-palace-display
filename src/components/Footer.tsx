
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-petcare-purple/5 border-t border-petcare-purple/10">
      <div className="section-container pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Petcare4sure</h3>
            <p className="text-sm text-gray-600">
              Quality products for your beloved pets, delivering comfort, joy, and care.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="hover:text-petcare-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-petcare-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-petcare-purple transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-petcare-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-petcare-purple transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-petcare-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-petcare-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/products/food" className="hover:text-petcare-purple transition-colors">Pet Food</Link>
              </li>
              <li>
                <Link to="/products/toys" className="hover:text-petcare-purple transition-colors">Toys</Link>
              </li>
              <li>
                <Link to="/products/accessories" className="hover:text-petcare-purple transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/products/health" className="hover:text-petcare-purple transition-colors">Health & Care</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin size={18} className="flex-shrink-0 text-petcare-purple" />
                <span>123 Pet Street, Pawville, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone size={18} className="flex-shrink-0 text-petcare-purple" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail size={18} className="flex-shrink-0 text-petcare-purple" />
                <span>info@petcare4sure.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-petcare-purple/10 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Petcare4sure. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-petcare-pink" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
