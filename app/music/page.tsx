"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MusicPage() {
  const songs = [
    {
      id: "song-1",
      title: "回到未来",
      duration: "3:45",
      description: "关于时间旅行的数字梦想",
    },
    {
      id: "song-2",
      title: "像素心碎",
      duration: "4:12",
      description: "8位爱情故事",
    },
    {
      id: "song-3",
      title: "霓虹雨夜",
      duration: "3:28",
      description: "赛博朋克回忆录",
    },
    {
      id: "song-4",
      title: "编码梦想",
      duration: "4:55",
      description: "程序员的夜晚",
    },
  ]

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-cyan-400">&gt; 303&CLAUDE RADIO</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回首页
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-black/60 border-2 border-green-400 p-8 mb-8">
          <p className="text-green-300 text-sm leading-relaxed">
            &gt; 电台信号：在线
            <br />
            &gt; 当前模式：经典重放
            <br />
            &gt; 播放列表：已加载
          </p>
        </div>

        <div className="space-y-4">
          {songs.map((song) => (
            <Link key={song.id} href={`/music/${song.id}`}>
              <div className="group cursor-pointer bg-black/60 border-2 border-green-600 hover:border-cyan-400 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 group-hover:text-cyan-400 transition-colors">
                      ♪ {song.title}
                    </h3>
                    <p className="text-green-300 text-sm mt-1">{song.description}</p>
                  </div>
                  <span className="text-green-500 text-sm ml-4">{song.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 h-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-0.5 bg-green-500 opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform ml-4">→</span>
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
