"use client";
import { motion } from "framer-motion";

const Button = ({ icon, title, isActive, isDisable, className, onClick }) => {
  return (
    <motion.button
      onTap={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className={`px-3 py-2 rounded-lg ${
        isActive
          ? "bg-green-700 text-white"
          : "bg-white dark:bg-[#2e3033] border border-gray-200 dark:border-[#fcfcfc1f]"
      } flex items-center gap-2 ${className}`}
      disabled={isDisable}
    >
      {icon}
      {title && <span className="hidden md:block">{title}</span>}
    </motion.button>
  );
};

export default Button;
