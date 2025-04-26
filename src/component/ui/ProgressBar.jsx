"use client";

import useSidebar from "@/context/SidebarContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar, isFirstRender } = useSidebar();

  useEffect(() => {
    NProgress.done();
    !isFirstRender.current &&
      setTimeout(() => {
        isOpen && window.innerWidth < 768 && toggleSidebar();
      }, 200);
  }, [pathname]);

  return null;
}
