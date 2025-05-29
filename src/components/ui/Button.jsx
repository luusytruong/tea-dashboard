"use client";
import { motion } from "framer-motion";

const Button = ({
  icon,
  title,
  isActive,
  isDisable,
  className,
  onClick,
  titleClassName,
  children,
}) => {
  return (
    <motion.button
      onTap={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className={`px-3 py-2 rounded-lg ${
        isActive
          ? "bg-green-700 text-white"
          : "bg-white dark:bg-[#27282b] border border-gray-200 dark:border-[#fcfcfc1f]"
      } flex items-center gap-2 h-10 ${
        isDisable ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      } ${className}`}
      disabled={isDisable}
    >
      {icon}
      {title && (
        <span className={`hidden md:block ${titleClassName}`}>{title}</span>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
