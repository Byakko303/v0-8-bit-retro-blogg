"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState("")
  const welcomeText = "> 欢迎来到终端博客 v1.0..."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= welcomeText.length) {
        setDisplayedText(welcomeText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const cards = [
    {
      href: "/blog",
      title: "> BLOG",
      subtitle: "文章存档",
      description: "深入已发布的记忆库",
    },
    {
      href: "/music",
      title: "> 303&CLAUDE",
      subtitle: "音乐电台",
      description: "收听过去的声波",
    },
    {
      href: "/projects",
      title: "> PROJECTS",
      subtitle: "作品集",
      description: "浏览构建的系统",
    },
    {
      href: "/whoami",
      title: "> WHOAMI",
      subtitle: "关于我",
      description: "执行个人信息查询",
    },
  ]

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-green-400 bg-black/90">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <pre className="text-green-400 text-xs md:text-sm mb-6 leading-tight overflow-x-auto">
              {`
 ████████╗███████╗██████╗ ███╗   ███╗██╗   ██╗███╗   ███╗ █████╗ ██╗
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║   ██║████╗ ████║██╔══██╗██║
    ██║   █████╗  ██████╔╝██╔████╔██║██║   ██║██╔████╔██║███████║██║
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║   ██║██║╚██╔╝██║██╔══██║██║
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║██║  ██║███████╗
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝
              `}
            </pre>
            <h1 className="font-mono text-xl md:text-3xl font-bold text-cyan-400 mb-4 glitch">~/303-终端博客$</h1>
            <p className="font-mono text-sm text-green-300 h-6">
              {displayedText}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="group cursor-pointer h-full">
                <div className="relative h-full bg-black/60 border-2 border-green-600 hover:border-cyan-400 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 group-hover:border-cyan-400 transition-colors"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 group-hover:border-cyan-400 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 group-hover:border-cyan-400 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 group-hover:border-cyan-400 transition-colors"></div>

                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-green-400 transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-sm text-green-500 mb-4">[{card.subtitle}]</p>
                    <p className="text-green-300 text-sm leading-relaxed mb-6">{card.description}</p>
                    <Button className="bg-green-600 hover:bg-cyan-500 text-black font-bold px-4 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50">
                      执行
                    </Button>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-cyan-400 transition-opacity duration-300"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-green-400 bg-black/90 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="font-mono text-green-500 text-sm">&gt; © 2025 终端博客 v1.0 | 作者：303</p>
          <p className="font-mono text-green-600 text-xs mt-2">[状态] 系统运行中...</p>
        </div>
      </footer>
    </div>
  )
}
