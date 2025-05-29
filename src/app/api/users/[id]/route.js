import { buildUpdateSQL, getOne, updateOne } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    const data = await getOne(
      `SELECT 
        id, 
        full_name, 
        email, 
        phone, 
        avatar, 
        city, 
        district, 
        ward, 
        address, 
        role, 
        created_at 
      FROM users 
      WHERE id=?`,
      [id]
    );
    return NextResponse.json({ status: true, data });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ status: false, message: err });
  }
}

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const data = await request.json();
    const { sql, args } = buildUpdateSQL("users", data, "id = ?", [id]);
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
