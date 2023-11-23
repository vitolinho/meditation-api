import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function GET() {
  const prisma = new PrismaClient()
  const data = await prisma.meditationContent.findMany({
    where: {
      type: "video"
    }
  })
  return NextResponse.json(data)
}
