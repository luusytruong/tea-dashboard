"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const InputField = ({
  label,
  error,
  icon: Icon,
  children,
  className = "",
  helpText,
  ...props
}) => {
  // Kiểm tra nếu là select hoặc textarea
  const isSelectOrTextarea = props.as === "select" || props.as === "textarea";
  const Component = isSelectOrTextarea ? props.as : "input";

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="font-medium opacity-60">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div
        className={`relative w-full rounded-lg border dark:border-[#fcfcfc1f] h-12 ${
          error ? "border-red-400" : "border-gray-200"
        } ${className}`}
      >
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80"
            size={16}
            strokeWidth={1}
          />
        )}
        <Component
          {...props}
          className={`w-full px-4 py-3 bg-transparent rounded-lg focus:outline-none relative z-5 ${
            Icon ? "pl-10" : ""
          }`}
        >
          {children}
        </Component>
      </div>
      {helpText && <p className="mt-1 text-sm">{helpText}</p>}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-xs mt-1 flex items-center"
        >
          <AlertCircle size={12} className="mr-1" /> {error}
        </motion.p>
      )}
    </div>
  );
};

export default InputField;
