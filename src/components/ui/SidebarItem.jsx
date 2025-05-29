"use client";
import { usePathname } from "next/navigation";
import LinkProgress from "./LinkProgress";

const SidebarItem = ({ item }) => {
  const pathname = usePathname();
  const firstPath = pathname.split("/")[1];
  const firstItem = item?.to?.split("/")[1];
  const isActive = firstPath === firstItem;

  const Tag = item.to ? LinkProgress : "button";

  return (
    <li
      className={`relative aspect-square ${
        isActive
          ? "bg-gray-100 dark:bg-[#36383b]"
          : "opacity-40 hover:opacity-100"
      } flex duration-200 last:mt-auto h-12 md:h-auto`}
    >
      <div
        className={`absolute duration-300 inset-0 w-[2px] ${
          isActive ? "bg-green-700" : "bg-transparent"
        }`}
      />
      <Tag
        href={item.to}
        onClick={item.onClick}
        className="flex-1 flex items-center justify-start px-6 md:p-0 md:justify-center gap-3"
      >
        <item.icon size={20} strokeWidth={1} />
        <span className="flex md:hidden">{item.title}</span>
      </Tag>
    </li>
  );
};

export default SidebarItem;
