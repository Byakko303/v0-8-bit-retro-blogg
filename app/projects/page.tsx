"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: "project-1",
      title: "像素艺术编辑器",
      description: "复古风格的图像编辑工具",
      tags: ["Canvas", "React", "图形"],
      link: "#",
    },
    {
      id: "project-2",
      title: "终端天气",
      description: "命令行风格的天气应用",
      tags: ["API", "Node.js", "数据"],
      link: "#",
    },
    {
      id: "project-3",
      title: "代码库浏览器",
      description: "可视化代码结构的工具",
      tags: ["TypeScript", "AST", "开发工具"],
      link: "#",
    },
    {
      id: "project-4",
      title: "8位游戏引擎",
      description: "使用TypeScript的复古游戏框架",
      tags: ["WebGL", "Game Dev", "TypeScript"],
      link: "#",
    },
    {
      id: "project-5",
      title: "网络爬虫",
      description: "分布式数据收集系统",
      tags: ["Python", "爬虫", "数据库"],
      link: "#",
    },
    {
      id: "project-6",
      title: "思维导图工具",
      description: "互动式知识组织平台",
      tags: ["算法", "可视化", "D3.js"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-cyan-400">&gt; find ~/projects/ -type f</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回首页
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-black/60 border-2 border-green-600 hover:border-cyan-400 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <h3 className="text-lg font-bold text-green-400 group-hover:text-cyan-400 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-green-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-black border border-green-600 text-green-400 text-xs font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
              <Button className="w-full bg-green-600 hover:bg-cyan-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
                查看详情 →
              </Button>
            </div>
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
