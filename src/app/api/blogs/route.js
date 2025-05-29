import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await query("SELECT * FROM blogs ORDER BY updated_at DESC");
    return NextResponse.json({ status: true, data });
  } catch (err) {
    console.error("Failed while fetching blog:", err);
    return NextResponse.json({ status: false, message: err });
  }
}
