import { NextResponse } from "next/server"

export async function GET () {
  return NextResponse.json({ data : "weeee", video : "https://www.youtube.com/watch?v=nWjVZ0fEjko" })
}