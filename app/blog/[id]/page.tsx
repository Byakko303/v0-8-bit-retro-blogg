import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/notion"

function renderRichText(richText: any[]) {
  return richText.map((t: any, i: number) => {
    const text = t.plain_text || ""
    const href = t.href
    if (href) {
      return (
        <a key={i} href={href} className="text-cyan-400 underline hover:text-cyan-300" target="_blank" rel="noreferrer">
          {text}
        </a>
      )
    }
    return <span key={i}>{text}</span>
  })
}

function Block({ block }: { block: any }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-green-200 my-3 leading-relaxed">{renderRichText(block.paragraph.rich_text)}</p>
    case "heading_1":
      return <h2 className="text-2xl font-bold text-cyan-400 my-4">{renderRichText(block.heading_1.rich_text)}</h2>
    case "heading_2":
      return <h3 className="text-xl font-bold text-cyan-400 my-3">{renderRichText(block.heading_2.rich_text)}</h3>
    case "heading_3":
      return <h4 className="text-lg font-bold text-cyan-400 my-2">{renderRichText(block.heading_3.rich_text)}</h4>
    case "bulleted_list_item":
      return <li className="list-disc ml-6 text-green-200">{renderRichText(block.bulleted_list_item.rich_text)}</li>
    case "numbered_list_item":
      return <li className="list-decimal ml-6 text-green-200">{renderRichText(block.numbered_list_item.rich_text)}</li>
    case "quote":
      return <blockquote className="text-green-300 my-3 border-l-2 border-green-600 pl-3">{renderRichText(block.quote.rich_text)}</blockquote>
    case "code": {
      const rt = block.code.rich_text || []
      return (
        <div className="my-4 bg-black/80 border-l-2 border-green-600 pl-4 py-2">
          <pre className="text-green-300 text-xs overflow-x-auto">{rt.map((t: any) => t.plain_text).join("")}</pre>
        </div>
      )
    }
    case "divider":
      return <hr className="border-green-700 my-4" />
    case "callout": {
      const rt = block.callout.rich_text || []
      const icon = block.callout.icon?.emoji || "⚠️"
      return (
        <div className="my-3 bg-black/60 border-2 border-green-700 p-3 flex gap-2 items-start">
          <span className="text-cyan-400">{icon}</span>
          <div className="text-green-200">{renderRichText(rt)}</div>
        </div>
      )
    }
    case "toggle": {
      const rt = block.toggle.rich_text || []
      const children = block.children || []
      return (
        <details className="my-3">
          <summary className="cursor-pointer text-green-300">{renderRichText(rt)}</summary>
          <div className="mt-2">
            {children.map((child: any) => (
              <Block key={child.id} block={child} />
            ))}
          </div>
        </details>
      )
    }
    case "image": {
      const img = block.image
      const url = img?.type === "external" ? img.external.url : img?.file?.url
      const caption = (img?.caption || []).map((t: any) => t.plain_text).join("")
      if (!url) return null
      return (
        <figure className="my-4 border border-green-700 p-2 bg-black/60">
          <img src={url} alt={caption || "image"} className="max-w-full h-auto" />
          {caption && <figcaption className="text-green-500 text-xs mt-1">{caption}</figcaption>}
        </figure>
      )
    }
    default:
      return null
  }
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const data = await getBlogPostBySlug(params.id)
  if (!data) {
    notFound()
  }

  const page = (data as any).page
  const blocks = (data as any).blocks || []

  const title = page?.properties?.title?.title?.[0]?.plain_text || params.id
  const date = page?.properties?.date?.date?.start || ""
  const category = page?.properties?.category?.rich_text?.[0]?.plain_text || ""
  const readTime = page?.properties?.readTime?.rich_text?.[0]?.plain_text || ""

  // 合并列表项为单个 <ul>/<ol>
  const rendered = [] as any[]
  let listBuffer: { type: "bulleted" | "numbered"; items: any[] } | null = null
  for (const b of blocks) {
    if (b.type === "bulleted_list_item") {
      if (!listBuffer || listBuffer.type !== "bulleted") listBuffer = { type: "bulleted", items: [] }
      listBuffer.items.push(b)
      continue
    }
    if (b.type === "numbered_list_item") {
      if (!listBuffer || listBuffer.type !== "numbered") listBuffer = { type: "numbered", items: [] }
      listBuffer.items.push(b)
      continue
    }
    // flush listBuffer
    if (listBuffer) {
      if (listBuffer.type === "bulleted") {
        rendered.push(
          <ul key={`ul-${rendered.length}`} className="my-3">
            {listBuffer.items.map((it: any) => (
              <Block key={it.id} block={it} />
            ))}
          </ul>
        )
      } else {
        rendered.push(
          <ol key={`ol-${rendered.length}`} className="my-3">
            {listBuffer.items.map((it: any) => (
              <Block key={it.id} block={it} />
            ))}
          </ol>
        )
      }
      listBuffer = null
    }
    rendered.push(<Block key={b.id} block={b} />)
  }
  if (listBuffer) {
    if (listBuffer.type === "bulleted") {
      rendered.push(
        <ul key={`ul-end`} className="my-3">
          {listBuffer.items.map((it: any) => (
            <Block key={it.id} block={it} />
          ))}
        </ul>
      )
    } else {
      rendered.push(
        <ol key={`ol-end`} className="my-3">
          {listBuffer.items.map((it: any) => (
            <Block key={it.id} block={it} />
          ))}
        </ol>
      )
    }
  }

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-cyan-400 truncate">&gt; cat {title.toLowerCase()}</h1>
          <Link href="/blog">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-black/60 border-2 border-green-400 p-8">
          <header className="mb-8 pb-6 border-b-2 border-green-600">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">{title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-green-300">
              <span>&gt; 发布: {date}</span>
              <span>&gt; 分类: [{category}]</span>
              <span>&gt; 阅读时间: {readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">{rendered}</div>

          <footer className="mt-12 pt-6 border-t-2 border-green-600">
            <div className="flex gap-4">
              <Link href="/blog">
                <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 border border-green-400">
                  &lt; 返回列表
                </Button>
              </Link>
              <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 border border-green-400">
                分享文章 &gt;
              </Button>
            </div>
          </footer>
        </article>
      </main>

      <footer className="border-t-2 border-green-400 bg-black/90 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="font-mono text-green-500 text-sm">&gt; © 2025 终端博客 v1.0 | 作者：303</p>
        </div>
      </footer>
    </div>
  )
}
