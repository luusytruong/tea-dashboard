"use client";
import {
  BookOpenText,
  ChartLine,
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
    icon: ChartLine,
    title: "Overview",
    to: "/",
  },
  {
    icon: Users,
    title: "Customers",
    to: "/customers",
  },
  {
    icon: Package,
    title: "Products",
    to: "/products",
  },
  {
    icon: Clipboard,
    title: "Orders",
    to: "/orders",
  },
  {
    icon: BookOpenText,
    title: "Blogs",
    to: "/blogs",
  },
  {
    icon: Settings,
    title: "Settings",
    to: "/settings",
  },
  {
    icon: LogOut,
    title: "Logout",
    onClick: () => {
      console.log("logout");
    },
  },
];

const Sidebar = () => {
  const { isOpen, isFirstRender } = useSidebar();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={isFirstRender.current ? false : { x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          exit={{ x: "-100%" }}
          className="bg-white md:dark:bg-[#27282b] dark:bg-[#1f2023] flex flex-col md:border-r border-gray-200 dark:border-[#fcfcfc1f] fixed z-[52] inset-y-0 max-w-[300px] w-full md:w-14"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center md:justify-center md:aspect-square gap-2 h-18 w-full p-4 md:p-0">
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
