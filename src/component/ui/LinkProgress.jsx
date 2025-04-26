"use client";

import useSidebar from "@/context/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

export default function LinkProgress({ href, children, ...props }) {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();

  const handleClick = () => {
    isOpen && window.innerWidth < 768 && toggleSidebar();
    href !== pathname && NProgress.start();
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
