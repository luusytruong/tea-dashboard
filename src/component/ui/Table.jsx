import { Ellipsis } from "lucide-react";
import Avatar from "./Avatar";
import Button from "./Button";
import { formatDate, formatPrice } from "@/utils/format";

const TableRowAction = ({ onView, onEdit, onDelete }) => (
  <div className="w-full flex justify-end">
    <Button icon={<Ellipsis size={16} />} className={"!p-2 border-none"} />
  </div>
);

const TableRow = ({ row, columns }) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-[#3a3c40]">
    {columns?.map((col, index) => (
      <td
        key={index}
        className={`p-4 ${col.mobile ? "" : "hidden md:table-cell"} ${
          col.action ? "text-right" : ""
        }`}
      >
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
        ) : col.action ? (
          <TableRowAction />
        ) : (
          row[col.key]
        )}
      </td>
    ))}
  </tr>
);

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full mt-6 text-left">
        <thead>
          <tr className="border-b border-gray-100 dark:border-[#fcfcfc10]">
            {columns?.map((col, index) => (
              <th
                key={index}
                className={`p-4 font-medium opacity-60 ${
                  col.mobile ? "" : "hidden md:table-cell"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-[#fcfcfc10]">
          {data?.map((row, index) => (
            <TableRow key={index} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
