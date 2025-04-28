
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/admin/LoginForm";
import ProductManagement from "@/components/admin/ProductManagement";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-lg text-gray-600">
                {isAuthenticated 
                  ? "Manage your pet products and inventory"
                  : "Login to access the admin dashboard"}
              </p>
            </div>
          </div>
        </div>
        
        <div className="section-container py-12">
          {isAuthenticated ? (
            <ProductManagement />
          ) : (
            <div className="flex justify-center">
              <LoginForm onLogin={(success) => setIsAuthenticated(success)} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
