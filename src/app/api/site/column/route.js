import { getOne, updateOne } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getOne("SELECT columns FROM site_info WHERE id=?", [1]);
    return NextResponse.json({ status: true, data: data?.columns });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ status: false, message: err });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const isComplete = await updateOne(
      "UPDATE site_info SET columns = ? WHERE id = ?",
      [JSON.stringify(data), 1]
    );
    return NextResponse.json({
      status: isComplete,
      message: isComplete ? "Sửa thành công" : "Sửa thất bại",
    });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json({ status: false, message: err });
  }
}
