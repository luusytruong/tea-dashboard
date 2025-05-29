"use client";

import { useColumns } from "@/context/ColumnContext";
import { Switch } from "../ui";
import { useEffect } from "react";

const TableSettingItem = ({ tableName, col, onClick }) => {
  return (
    <tr className="">
      <td className="p-4">{col.label}</td>
      <td className="p-4 text-right">
        <Switch
          isChecked={col.visible}
          setIsChecked={(e) => {
            onClick(tableName, col.key, e);
          }}
        />
      </td>
    </tr>
  );
};

const TableSettings = ({ tableName, columns, className }) => {
  const { updateColumnVisibility } = useColumns();
  const theads = ["Label", "Visible"];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={
        className +
        " overflow-y-auto shadow-xl max-w-[300px] max-h-[300px] bg-white dark:bg-[#27282b] rounded-lg border border-gray-200 dark:border-[#fcfcfc1f]"
      }
    >
      <div className="flex flex-col gap-2">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100 dark:border-[#fcfcfc10]">
              {theads.map((head, index) => (
                <th
                  key={index}
                  className="p-4 font-medium opacity-60 whitespace-nowrap text-left"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-[#fcfcfc10]">
            {columns.map((col, index) => (
              <TableSettingItem
                key={index}
                col={col}
                tableName={tableName}
                onClick={updateColumnVisibility}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSettings;
