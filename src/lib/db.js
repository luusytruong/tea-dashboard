import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Thực thi truy vấn SQL an toàn với tham số
 * @param {string} sql - Câu SQL với dấu ?
 * @param {Array<any>} params - Tham số truyền vào
 * @returns {Promise<{ data: any, meta?: any }>}
 */
export async function query(sql, params = []) {
  try {
    const [result] = await pool.query(sql, params);
    const command = sql.trim().split(" ")[0].toUpperCase();

    if (command === "SELECT") {
      return { data: result };
    }

    // Các lệnh còn lại: INSERT, UPDATE, DELETE
    return {
      data: null,
      meta: {
        affectedRows: result.affectedRows,
        insertId: result.insertId ?? null,
        changedRows: result.changedRows ?? null,
      },
    };
  } catch (err) {
    console.error("❌ DB QUERY ERROR:", err.message);
    console.error("→ SQL:", sql);
    console.error("→ PARAMS:", params);
    throw err;
  }
}

/**
 * Build câu UPDATE SQL và mảng param từ object
 * @param {string} table - tên bảng
 * @param {object} data - object dữ liệu cần update
 * @param {string} whereClause - phần WHERE, ví dụ: 'id = ?'
 * @param {Array<any>} whereParams - mảng giá trị cho WHERE
 * @returns {{ sql: string, params: Array<any> }}
 */
export function buildUpdateSQL(table, data, whereClause, whereParams = []) {
  const keys = Object.keys(data);
  const setClause = keys.map((key) => `${key} = ?`).join(", ");
  const args = [...Object.values(data), ...whereParams];

  const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;
  return { sql, args };
}

// Giữ nguyên pool & query như đã có ở trên

// Lấy 1 bản ghi duy nhất
export async function getOne(sql, params = []) {
  const { data } = await query(sql, params);
  return data[0] || null;
}

// Chèn và trả về ID
export async function insertOne(sql, params = []) {
  const { meta } = await query(sql, params);
  return meta.insertId || null;
}

// Cập nhật và trả về true/false
export async function updateOne(sql, params = []) {
  const { meta } = await query(sql, params);
  return meta.affectedRows > 0;
}

// Xóa và xác nhận true/false
export async function deleteOne(sql, params = []) {
  const { meta } = await query(sql, params);
  return meta.affectedRows > 0;
}
