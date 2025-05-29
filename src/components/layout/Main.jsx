"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CirclePlus, File, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { useColumns } from "@/context/ColumnContext";
import { TableSettings } from "../common";
import { Button, Table } from "../ui";
import { exportXLSX } from "@/lib/excelExporter";
import { formatDate } from "@/lib/formatter";

const Main = ({ title, desc, onAdd, onExport, data = [] }) => {
  const { columns, loadCurrentColumns } = useColumns();
  const storageKey = title.toLowerCase();

  const [page, setPage] = useState(1);
  const perPage = 6;

  const totalPages = Math.ceil(data.length / perPage);
  const currentData = data.slice((page - 1) * perPage, page * perPage);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    loadCurrentColumns(storageKey, data[0]);
  }, []);

  const currentColumns = columns[storageKey] || [];

  const handleExport = () => {
    const fileName = `${title} ${formatDate(new Date())}.csv`;
    exportXLSX(data, fileName);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col gap-4 p-4 md:p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center justify-start max-w-[136px] overflow-auto">
          {totalPages > 1 &&
            Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                icon={i + 1}
                onClick={() => setPage(i + 1)}
                className={`${
                  page === i + 1 ? "border-0 !bg-green-700 text-white" : ""
                } aspect-square flex items-center justify-center max-w-10 scale-95`}
              />
            ))}
        </div>
        <div className="flex items-center gap-4">
          <Button
            icon={<File size={16} strokeWidth={1} />}
            title={"Export"}
            isActive={false}
            onClick={handleExport}
          />
          <Button
            icon={<CirclePlus size={16} strokeWidth={1} />}
            title={"Add new"}
            isActive={true}
            onClick={onAdd}
          />
        </div>
      </div>
      <div className="bg-white dark:bg-[#27282b] flex-1 flex flex-col p-4 md:p-6 rounded-lg border border-gray-200 dark:border-[#fcfcfc1f]">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="opacity-60 my-2">{desc}</p>
          </div>
          <div className="relative">
            <Button
              icon={<Settings size={16} strokeWidth={1} />}
              title={"Settings"}
              isActive={false}
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              className={"relative z-10"}
            />
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4 }}
                  key={"menu"}
                  className="absolute top-[56px] right-0 z-10"
                >
                  <TableSettings
                    tableName={storageKey}
                    columns={currentColumns}
                  />
                </motion.div>
              )}
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={"backdrop"}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="fixed inset-0 z-5"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <Table
          name={storageKey}
          data={currentData}
          columns={currentColumns || []}
        />
      </div>
    </motion.div>
  );
};

export default Main;
