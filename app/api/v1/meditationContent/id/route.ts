import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import he from "he"

export async function GET(request: any) {
  const url = request.url
  const query = url.slice(62)
  if (!/^\d+$/.test(query)) {
    return new NextResponse("L'id doit être un chiffre.")
  }
  const id = Number(query)
  const prisma = new PrismaClient()
  const nbRows = await prisma.meditationContent.count()
  if (id > nbRows || id <= 0) return new NextResponse("L'id spécifié n'existe pas dans la base de données.")
  const data: any = await prisma.meditationContent.findUnique({
    where: {
      id: id
    }
  })
  const codedData = {
    id: data?.id,
    title: he.encode(data.title),
    description: he.encode(data.description),
    category: he.encode(data.category),
    type: he.encode(data.type),
    url: he.encode(data.url)
  }
  const cspHeader = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';"
  return new NextResponse(JSON.stringify(codedData), {
    headers: {
      "Content-Type": "application/json",
      "Content-Security-Policy": cspHeader
    }
  })
}
