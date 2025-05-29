// scripts/generate-exports.js
import fs from "fs";
import path from "path";

const BASE_DIR = "src/components"; // Thư mục chính

function isValid(file) {
  return /\.(js|jsx|ts|tsx)$/.test(file) && file !== "index.js";
}

function buildExport(file) {
  const name = path.basename(file, path.extname(file));
  return `export { default as ${name} } from "./${name}";`;
}

// Hàm tìm tất cả các component trong một thư mục và các thư mục con
function findComponentsRecursively(
  folderPath,
  maxDepth = -1,
  currentDepth = 0
) {
  let components = [];

  try {
    const files = fs.readdirSync(folderPath);

    // Lọc ra các file component trong thư mục hiện tại
    files.forEach((file) => {
      const fullPath = path.join(folderPath, file);

      if (fs.statSync(fullPath).isFile() && isValid(file)) {
        components.push(file);
      } else if (
        fs.statSync(fullPath).isDirectory() &&
        (maxDepth === -1 || currentDepth < maxDepth)
      ) {
        // Đệ quy vào thư mục con nếu chưa đạt độ sâu tối đa
        const subComponents = findComponentsRecursively(
          fullPath,
          maxDepth,
          currentDepth + 1
        );
        components = components.concat(
          subComponents.map((c) => path.join(file, c))
        );
      }
    });
  } catch (error) {
    console.error(`❌ Error scanning ${folderPath}: ${error.message}`);
  }

  return components;
}

// Hàm tạo index.js cho các thư mục con trực tiếp
function generateIndexForDirectSubdirs() {
  try {
    const subdirs = fs.readdirSync(BASE_DIR).filter((item) => {
      const fullPath = path.join(BASE_DIR, item);
      return fs.statSync(fullPath).isDirectory();
    });

    console.log(
      `🔍 Đã tìm thấy ${subdirs.length} thư mục con trong ${BASE_DIR}`
    );

    subdirs.forEach((subdir) => {
      const subdirPath = path.join(BASE_DIR, subdir);

      // Tìm tất cả các component trong thư mục con này và các thư mục con của nó
      const components = findComponentsRecursively(subdirPath);

      if (components.length > 0) {
        // Tạo các export cho các component trực tiếp
        const directComponents = components
          .filter((c) => !c.includes(path.sep))
          .map(buildExport)
          .join("\n");

        // Tạo các export cho các component trong thư mục con
        const nestedComponents = components
          .filter((c) => c.includes(path.sep))
          .map((c) => {
            const dirName = path.dirname(c);
            const fileName = path.basename(c, path.extname(c));
            return `export { default as ${fileName} } from "./${dirName}/${fileName}";`;
          })
          .join("\n");

        // Kết hợp tất cả các export
        const allExports =
          [directComponents, nestedComponents].filter(Boolean).join("\n") +
          "\n";

        // Ghi vào file index.js
        fs.writeFileSync(path.join(subdirPath, "index.js"), allExports, "utf8");
        console.log(
          `✅ Created index.js for ${subdirPath} with ${components.length} components`
        );
      } else {
        console.log(`⚠️ Không tìm thấy component nào trong ${subdirPath}`);
      }
    });
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

function main() {
  // Kiểm tra xem thư mục BASE_DIR có tồn tại không
  if (!fs.existsSync(BASE_DIR)) {
    console.error(`❌ Thư mục ${BASE_DIR} không tồn tại!`);
    console.log(`💡 Gợi ý: Kiểm tra lại cấu trúc thư mục của dự án.`);
    console.log(
      `   Có thể bạn đang sử dụng 'src/component' thay vì 'src/components'?`
    );
    return;
  }

  try {
    console.log(
      `🔍 Bắt đầu tạo file index.js cho các thư mục con trực tiếp của ${BASE_DIR}...`
    );
    generateIndexForDirectSubdirs();
    console.log(`✅ Hoàn thành`);
  } catch (error) {
    console.error(`❌ Lỗi: ${error.message}`);
  }
}

main();
