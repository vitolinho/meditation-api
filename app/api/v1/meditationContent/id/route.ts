import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function GET(request: any) {
  const url = request.url
  const query = url.slice(50)
  if (!/^\d+$/.test(query)) {
    return new NextResponse("L'id doit être un chiffre.")
  }
  const id = Number(query)
  const prisma = new PrismaClient()
  const nbRows = await prisma.meditationContent.count()
  if (id > nbRows || id <= 0) return new NextResponse("L'id spécifié n'existe pas dans la base de données.")
  const data = await prisma.meditationContent.findUnique({
    where: {
      id: id
    }
  })
  return NextResponse.json(data)
}
