"use client";
import {
  BookOpenText,
  Clipboard,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";
import SidebarItem from "../ui/SidebarItem";
import { AnimatePresence, motion } from "framer-motion";
import useSidebar from "@/context/SidebarContext";

const sidebar = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Customers",
    to: "/",
  },
  {
    icon: <Package size={20} strokeWidth={1.5} />,
    title: "Products",
    to: "/products",
  },
  {
    icon: <Clipboard size={20} strokeWidth={1.5} />,
    title: "Orders",
    to: "/orders",
  },
  {
    icon: <BookOpenText size={20} strokeWidth={1.5} />,
    title: "Blog",
    to: "/blog",
  },
  {
    icon: <Settings size={20} strokeWidth={1.5} />,
    title: "Settings",
    to: "/settings",
  },
  {
    icon: <LogOut size={20} strokeWidth={1.5} />,
    title: "Logout",
    to: "/logout",
  },
];

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          exit={{ x: "-100%" }}
          className="bg-white md:dark:bg-[#2e3033] dark:bg-[#1f2023] flex flex-col md:border-r border-gray-200 dark:border-[#fcfcfc1f] fixed z-50 inset-y-0 max-w-[300px] w-full md:w-14"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center md:justify-center md:aspect-square gap-2 w-full p-4 md:p-0">
              <img src="/logo.webp" alt="logo" className="w-10 md:w-8" />
              <img src="/name.webp" alt="name" className="h-4 md:hidden" />
            </div>
            <ul className="flex flex-col flex-1">
              {sidebar.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
