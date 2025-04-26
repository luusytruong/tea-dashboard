"use client";
import { usePathname } from "next/navigation";
import LinkProgress from "./LinkProgress";

const SidebarItem = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.to;

  return (
    <li
      className={`relative aspect-square ${
        isActive
          ? "bg-gray-100 dark:bg-[#3a3c40]"
          : "opacity-40 hover:opacity-100"
      } flex duration-200 nav-item h-12 md:h-auto`}
    >
      <div
        className={`absolute duration-300 inset-0 w-[2px] ${
          isActive ? "bg-green-700" : "bg-transparent"
        }`}
      ></div>
      <LinkProgress
        href={item.to}
        className="flex-1 flex items-center justify-start px-6 md:p-0 md:justify-center gap-3"
      >
        {item.icon}
        <span className="flex md:hidden">{item.title}</span>
      </LinkProgress>
    </li>
  );
};

export default SidebarItem;
