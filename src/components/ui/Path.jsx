"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const breadcrumbMap = {
  customers: "Customers",
  products: "Products",
  orders: "Orders",
  blogs: "Blogs",
  settings: "Settings",
};

const Path = ({ className }) => {
  const pathname = usePathname();
  const page = pathname.split("/")[1];

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <span className="opacity-60">Dashboard</span>
      <ChevronRight size={16} strokeWidth={1.5} />
      <span>{breadcrumbMap[page] || "Overview"}</span>
    </div>
  );
};

export default Path;
