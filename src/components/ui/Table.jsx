"use client";

import Avatar from "./Avatar";
import { formatDate, formatPrice } from "@/lib/formatter";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

const TableRow = ({ row, columns, onClick }) => (
  <tr
    className="hover:bg-gray-100 dark:hover:bg-[#3a3c40] cursor-pointer h-[90px]"
    onClick={onClick}
  >
    {columns?.map((col, index) => (
      <td key={index} className={`p-4 ${col.visible ? "" : "hidden"}`}>
        <div className="truncate max-w-sm flex items-center">
          {col.img ? (
            <Avatar
              fullName={row.full_name || row.name}
              imageUrl={row.avatar || row.image}
              square={true}
              className={"w-14 h-14"}
            />
          ) : col.mark ? (
            <span className="bg-green-700 text-white text-xs uppercase px-2.5 py-1 rounded-full">
              {row[col.key]}
            </span>
          ) : col.price ? (
            formatPrice(row[col.key])
          ) : col.date ? (
            formatDate(row[col.key])
          ) : (
            row[col.key]
          )}
        </div>
      </td>
    ))}
  </tr>
);

const Table = ({ name = "", data, columns }) => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full mt-6 text-left">
        <thead>
          <tr className="border-b border-gray-100 dark:border-[#fcfcfc10]">
            {columns &&
              columns.map((col, index) => (
                <th
                  key={index}
                  className={`${
                    col.visible ? "" : "hidden"
                  } p-4 font-medium opacity-60 whitespace-nowrap `}
                >
                  {col.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-[#fcfcfc10]">
          {data &&
            data.map((row, index) => (
              <TableRow
                key={index}
                row={row}
                columns={columns}
                onClick={() => {
                  nProgress.start();
                  router.push(`/${name}/${row.id}`);
                }}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
