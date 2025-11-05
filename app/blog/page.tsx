"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/notion"

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-cyan-400">&gt; ls -la ~/blog/</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回首页
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {blogPosts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.properties.id.rich_text[0].plain_text}`}>
              <div className="group cursor-pointer bg-black/60 border-2 border-green-600 hover:border-cyan-400 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2 py-1 bg-green-600 text-black text-xs font-bold border border-green-400">
                    {post.properties.category.rich_text[0].plain_text}
                  </span>
                  <span className="text-green-500 text-xs">{post.properties.date.date.start}</span>
                </div>
                <h2 className="text-lg font-bold text-green-400 group-hover:text-cyan-400 transition-colors mb-2">
                  {post.properties.title.title[0].plain_text}
                </h2>
                <p className="text-green-300 text-sm mb-3">{post.properties.excerpt.rich_text[0].plain_text}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-500 text-xs">&gt; {post.properties.readTime.rich_text[0].plain_text}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t-2 border-green-400 bg-black/90 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="font-mono text-green-500 text-sm">&gt; © 2025 终端博客 v1.0 | 作者：303</p>
        </div>
      </footer>
    </div>
  )
}
