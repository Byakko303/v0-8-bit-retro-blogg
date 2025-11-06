import { NextRequest, NextResponse } from "next/server"
import { getBlogPostBySlug } from "@/lib/notion"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug") || ""
  if (!slug) {
    return NextResponse.json({ error: "missing slug" }, { status: 400 })
  }

  const data = await getBlogPostBySlug(slug)
  if (!data) {
    return NextResponse.json({ found: false, message: "page not found or no permission" }, { status: 404 })
  }

  const page: any = (data as any).page
  const blocks: any[] = (data as any).blocks || []
  const title = page?.properties?.title?.title?.[0]?.plain_text || slug

  const typeCount: Record<string, number> = {}
  for (const b of blocks) {
    typeCount[b.type] = (typeCount[b.type] || 0) + 1
  }

  return NextResponse.json({
    found: true,
    slug,
    title,
    blockCount: blocks.length,
    types: typeCount,
    sample: blocks.slice(0, 3).map((b) => ({ id: b.id, type: b.type })),
  })
}
