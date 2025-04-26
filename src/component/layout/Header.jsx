"use client";
import Path from "../ui/Path";
import Avatar from "../ui/Avatar";
import { PanelLeft, Search } from "lucide-react";
import Button from "../ui/Button";
import useSidebar from "@/context/SidebarContext";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-[#fcfcfc1f] p-4 bg-white dark:bg-[#1f2023]">
      <Path className={"hidden md:flex"} />
      <Button
        icon={<PanelLeft size={16} strokeWidth={1.5} />}
        className={"block md:hidden h-10 aspect-square mr-4"}
        onClick={toggleSidebar}
      />
      <div className="flex items-center gap-4 flex-1 justify-end">
        <form
          action="#"
          className="relative flex items-center gap-2 max-w-[400px] md:max-w-[240px] w-full"
        >
          <Search size={16} className="absolute left-3" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 ps-10 py-2 pr-2 w-full rounded-lg border border-gray-200 dark:border-[#fcfcfc1f] bg-white dark:bg-[#2e3033]"
          />
        </form>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
