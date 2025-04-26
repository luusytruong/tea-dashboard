"use client";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768;
    }
    return false;
  });
  const isFirstRender = useRef(true);

  const toggleSidebar = () => setIsOpen((o) => !o);

  useEffect(() => {
    isFirstRender.current = false;
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, isFirstRender }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isFirstRender.current ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onTap={() => {
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          ></motion.div>
        )}
      </AnimatePresence>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export default useSidebar;
