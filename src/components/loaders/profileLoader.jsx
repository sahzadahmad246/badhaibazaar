import React from "react";
import { motion } from "framer-motion";

const ProfileLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      >
        <div className="text-center">
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-200"></div>
        </div>
        <div className="space-y-6">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </motion.div>
    </div>
  );
};

export default ProfileLoader;
