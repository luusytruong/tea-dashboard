"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { CirclePlus, File } from "lucide-react";
import Table from "../ui/Table";

const Main = ({ title, desc, onAdd, onExport, data, columns }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col gap-4 p-4 md:p-6"
    >
      <div className="flex items-center justify-between">
        <div>{/* bộ lọc */}</div>
        <div className="flex items-center gap-4">
          <Button
            icon={<File size={16} strokeWidth={1} />}
            title={"Export"}
            isActive={false}
            onClikc={onExport}
          />
          <Button
            icon={<CirclePlus size={16} strokeWidth={1} />}
            title={"Add new"}
            isActive={true}
            onClikc={onAdd}
          />
        </div>
      </div>
      <div className="bg-white dark:bg-[#2e3033] flex-1 flex flex-col p-4 md:p-6 rounded-lg border border-gray-200 dark:border-[#fcfcfc1f]">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="opacity-60 my-2">{desc}</p>
        <Table data={data} columns={columns} />
      </div>
    </motion.div>
  );
};

export default Main;
