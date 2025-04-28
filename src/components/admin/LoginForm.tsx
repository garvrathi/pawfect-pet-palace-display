
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

interface LoginFormProps {
  onLogin: (success: boolean) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple mock authentication (replace with actual authentication)
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        toast.success("Login successful!");
        onLogin(true);
      } else {
        toast.error("Invalid credentials");
        onLogin(false);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
      <div className="text-center mb-6">
        <div className="bg-petcare-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <LogIn className="h-8 w-8 text-petcare-purple" />
        </div>
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <p className="text-gray-600 mt-1">Sign in to access the admin panel</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="pet-button w-full"
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            <span className="block font-medium mb-1">Demo Credentials</span>
            Username: admin | Password: password
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
