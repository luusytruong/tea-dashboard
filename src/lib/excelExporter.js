import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const exportCSVFromData = (data, filename = "export.csv") => {
  if (!data || !data.length) return;

  const keys = Object.keys(data[0]);
  const delimiter = ";"; // đổi thành ";" nếu Excel bạn yêu cầu
  const csvContent = [
    keys.join(delimiter),
    ...data.map((row) =>
      keys
        .map((k) => `"${(row[k] ?? "").toString().replace(/"/g, '""')}"`)
        .join(delimiter)
    ),
  ].join("\n");

  // thêm BOM để Excel hiểu là UTF-8
  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportXLSX = async (data, filename = "export.xlsx") => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet 1");

  const keys = Object.keys(data[0]);

  // Add header
  worksheet.addRow(keys);

  // Add data
  data.forEach((row) => {
    worksheet.addRow(keys.map((k) => row[k]));
  });

  // Style header
  const headerRow = worksheet.getRow(1);
  headerRow.height = 20;
  headerRow.eachCell((cell) => {
    cell.value = cell.value
      .toString()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    cell.font = { bold: true };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "00a63e" },
    };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });

  // Auto-fit column width
  worksheet.columns.forEach((col, i) => {
    let maxLength = keys[i].length;
    col.eachCell?.({ includeEmpty: true }, (cell) => {
      const val = cell.value ? cell.value.toString() : "";
      if (val.length > maxLength) maxLength = val.length;
    });
    col.width = maxLength + 4; // +2 padding
  });

  // Zebra style (including empty cells)
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const fillColor = rowNumber % 2 === 0 ? "f6f3f4" : ""; // vàng rất nhạt

    for (let i = 1; i <= keys.length; i++) {
      const cell = row.getCell(i);
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: fillColor },
      };
      cell.alignment = { vertical: "middle", horizontal: "left" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    }
  });

  // Export
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), filename);
};
