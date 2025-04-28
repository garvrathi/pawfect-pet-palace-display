
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/admin/LoginForm";
import ProductManagement from "@/components/admin/ProductManagement";
import { supabase } from "@/integrations/supabase/client";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on load
  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        // Get current session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          // Verify admin role
          const { data: roleData, error: roleError } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .maybeSingle();
            
          if (!roleError && roleData?.role === 'admin') {
            setIsAuthenticated(true);
          } else {
            // Sign out if not admin
            await supabase.auth.signOut();
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          // On auth change, verify admin role
          const { data: roleData, error: roleError } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .maybeSingle();
            
          setIsAuthenticated(!roleError && roleData?.role === 'admin');
        } else {
          setIsAuthenticated(false);
        }
      }
    );

    checkSession();

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-petcare-purple"></div>
            </div>
          ) : isAuthenticated ? (
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
