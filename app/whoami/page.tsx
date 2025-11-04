"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoamiPage() {
  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-cyan-400">&gt; whoami</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回首页
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-black/60 border-2 border-green-400 p-8 mb-8">
          <p className="text-green-300 text-sm leading-relaxed space-y-3">
            <div>&gt; 执行个人信息.exe...</div>
            <div>&gt; 加载用户档案...</div>
            <div>&gt; 身份验证: 303</div>
            <div>&gt; 权限: 管理员</div>
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-black/60 border-2 border-green-600 p-6 hover:border-cyan-400 transition-all">
            <h2 className="text-lg font-bold text-cyan-400 mb-4">&gt; cat bio.txt</h2>
            <p className="text-green-300 text-sm leading-relaxed">
              你好，代码考古学家！我是
              303，一个在数字时光胶囊中漫步的开发者。我的热情是将过去的美学与现代技术融合，打造充满怀旧感的数字体验。每一行代码都是对往日的致敬，每一个项目都是时间的见证。
            </p>
          </section>

          <section className="bg-black/60 border-2 border-green-600 p-6 hover:border-cyan-400 transition-all">
            <h2 className="text-lg font-bold text-cyan-400 mb-4">&gt; skills --list</h2>
            <div className="space-y-3">
              <div className="text-green-300 text-sm">
                <div className="font-bold text-green-400">后端技术</div>
                <div className="text-green-500">Node.js | Python | TypeScript | 数据库设计</div>
              </div>
              <div className="text-green-300 text-sm">
                <div className="font-bold text-green-400">前端技术</div>
                <div className="text-green-500">React | Next.js | Tailwind | WebGL</div>
              </div>
              <div className="text-green-300 text-sm">
                <div className="font-bold text-green-400">工具与平台</div>
                <div className="text-green-500">Git | Docker | Linux | AWS</div>
              </div>
              <div className="text-green-300 text-sm">
                <div className="font-bold text-green-400">创意领域</div>
                <div className="text-green-500">UI/UX 设计 | 复古美学 | 像素艺术</div>
              </div>
            </div>
          </section>

          <section className="bg-black/60 border-2 border-green-600 p-6 hover:border-cyan-400 transition-all">
            <h2 className="text-lg font-bold text-cyan-400 mb-4">&gt; contact --info</h2>
            <div className="space-y-2 text-green-300 text-sm">
              <p>Email: 303@archive.dev</p>
              <p>GitHub: github.com/303</p>
              <p>Twitter: @303_terminal</p>
              <p>Discord: 303#2024</p>
            </div>
          </section>

          <section className="bg-black/60 border-2 border-green-600 p-6 hover:border-cyan-400 transition-all">
            <h2 className="text-lg font-bold text-cyan-400 mb-4">&gt; interests --explore</h2>
            <div className="text-green-300 text-sm leading-relaxed space-y-2">
              <p>✦ 复古计算文化与黑客美学</p>
              <p>✦ 像素艺术与数字化怀旧</p>
              <p>✦ 开源社区与技术分享</p>
              <p>✦ 音乐创作与声音设计</p>
              <p>✦ 网络考古与历史编程</p>
            </div>
          </section>
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
