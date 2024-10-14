import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./../ui/Button";
import { Input } from "./../ui/Input";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import googleIcon from "./../../images/google.png";
export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-white p-3"
    >
      <div className="w-full border border-gray-300 border max-w-md p-8 space-y-8 bg-white rounded-xl ">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-black mb-2">
            Sign up for Badhai Bazaar
          </h2>
          <p className="text-center text-gray-600">Create your account</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Name"
              className="pl-10 w-full border-gray-300 focus:border-black focus:ring-black"
              required
            />
          </div>
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
          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
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
          >
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-600"
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
}
