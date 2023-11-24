import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import he from "he"

export async function GET(request: any) {
  const url = request.url
  const query = url.slice(51)
  if (!/^\d+$/.test(query)) {
    return new NextResponse("L'id doit être un chiffre.")
  }
  const id = Number(query)
  const prisma = new PrismaClient()
  const nbRows = await prisma.meditationCategory.count()
  if (id > nbRows || id <= 0) return new NextResponse("L'id spécifié n'existe pas dans la base de données.")
  const data: any = await prisma.meditationCategory.findUnique({
    where: {
      id: id
    }
  })
  const escapedData = {
    id: data?.id,
    name: he.encode(data.name),
    description: he.encode(data.description)
  }
  const cspHeader = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';"
  return new NextResponse(JSON.stringify(escapedData), {
    headers: {
      "Content-Type": "application/json",
      "Content-Security-Policy": cspHeader
    }
  })
}
