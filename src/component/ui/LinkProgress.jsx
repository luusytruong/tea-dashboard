"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

export default function LinkProgress({ href, children, ...props }) {
  const pathname = usePathname();

  const handleClick = () => {
    href !== pathname && NProgress.start();
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
