"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "memory-init",
      title: "初始化记忆.exe",
      excerpt: "加载童年数据...怀旧模块段错误",
      date: "2024.03.15",
      category: "系统",
      readTime: "5个周期",
    },
    {
      id: "film-camera",
      title: "模拟相机.bat",
      excerpt: "执行胶片摄影协议...检测到缓冲区溢出",
      date: "2024.03.08",
      category: "媒体",
      readTime: "8个周期",
    },
    {
      id: "vinyl-record",
      title: "黑胶唱片机.c",
      excerpt: "编译音频记忆...旋律与心碎的堆栈跟踪",
      date: "2024.02.28",
      category: "音频",
      readTime: "6个周期",
    },
    {
      id: "handwriting",
      title: "手写.py",
      excerpt: "已弃用函数：人际连接() - 模拟时代的遗留代码",
      date: "2024.02.20",
      category: "遗产",
      readTime: "4个周期",
    },
  ]

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
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="group cursor-pointer bg-black/60 border-2 border-green-600 hover:border-cyan-400 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2 py-1 bg-green-600 text-black text-xs font-bold border border-green-400">
                    {post.category}
                  </span>
                  <span className="text-green-500 text-xs">{post.date}</span>
                </div>
                <h2 className="text-lg font-bold text-green-400 group-hover:text-cyan-400 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-green-300 text-sm mb-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-500 text-xs">&gt; {post.readTime}</span>
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
