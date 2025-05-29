import { buildUpdateSQL, getOne, updateOne } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const info = await getOne(
      `SELECT 
        name, 
        description, 
        email, 
        phone, 
        address, 
        facebook,
        instagram, 
        youtube 
      FROM site_info 
      WHERE id=?`,
      [1]
    );
    return NextResponse.json({ status: true, data: info });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ status: false, message: err });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { sql, args } = buildUpdateSQL("site_info", data, "id = ?", [1]);
    const isComplete = await updateOne(sql, args);
    return NextResponse.json({
      status: isComplete,
      message: isComplete ? "Sửa thành công" : "Sửa thất bại",
    });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ status: false, message: err });
  }
}
