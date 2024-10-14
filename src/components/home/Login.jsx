import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./../ui/Button";
import { Input } from "./../ui/Input";
import { Mail, Lock, LogIn } from "lucide-react";
import googleIcon from "./../../images/google.png";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle manual login logic here
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Redirect to Google auth
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen p-3 "
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl border border-gray-300">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-black mb-2">
            Login to Badhai Bazaar
          </h2>
          <p className="text-center text-gray-600">Welcome back!</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="email"
              placeholder="Email"
              className="pl-10 w-full border-gray-300 focus:border-black focus:ring-black"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="password"
              placeholder="Password"
              className="pl-10 w-full border-gray-300 focus:border-black focus:ring-black"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            className="w-full border-gray-300 text-black hover:bg-gray-100"
            onClick={handleGoogleLogin} // Add click handler here
          >
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-600"
        >
          New to Badhai Bazaar?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-black font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
}
