"use client";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const breadcrumbMap = {
  "/": "Customers",
  "/products": "Products",
  "/orders": "Orders",
  "/blog": "Blog",
  "/settings": "Settings",
};

const Path = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <span className="opacity-60">Dashboard</span>
      <ChevronRight size={16} strokeWidth={1.5} />
      <span>{breadcrumbMap[pathname] || "Customers"}</span>
    </div>
  );
};

export default Path;
