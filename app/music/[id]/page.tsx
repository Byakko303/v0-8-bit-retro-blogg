"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface Song {
  id: string
  title: string
  duration: string
  artist: string
  lyrics: string
}

export default function MusicDetailPage({ params }: { params: { id: string } }) {
  const songs: Record<string, Song> = {
    "song-1": {
      id: "song-1",
      title: "回到未来",
      duration: "3:45",
      artist: "303 & Claude",
      lyrics: `[第一段]
像素在夜晚闪烁
代码编织梦的边界
我们穿过时间的隧道
回到那个充满可能的时刻

[副歌]
回到未来，回到过去
时间在我们手中旋转
所有的选择都交织在一起
在无限的循环中闪耀

[第二段]
电流在血管中流动
思想变成光的信号
我们登上信息的高塔
俯瞰人生的所有岔路

[桥段]
如果我们能够回头
是否会改变什么
但改变也许本身
就是时间最美的礼物

[结尾副歌]
回到未来，回到过去
时间在我们手中旋转
所有的记忆都闪闪发光
在这永恒的瞬间中`,
    },
    "song-2": {
      id: "song-2",
      title: "像素心碎",
      duration: "4:12",
      artist: "303 & Claude",
      lyrics: `[第一段]
8位的心碎
16色的悲伤
你的笑容像马里奥跳过的金币
消失在我无法到达的地方

[副歌]
像素心碎成碎片
掉进了二进制的黑洞
我计算过我们的概率
却无法编写我们的结局

[第二段]
你是Contra中的秘技
我追寻但永不知晓
每一次重启都会让我忘记
为什么我要守护这个游戏

[桥段]
如果爱情可以存档
我会反复读取这一刻
但生活没有读取功能
只有删除和遗忘

[结尾]
在游戏结束时
我们的故事
变成了一个经典的EasterEgg
没有人再会找到它`,
    },
    "song-3": {
      id: "song-3",
      title: "霓虹雨夜",
      duration: "3:28",
      artist: "303 & Claude",
      lyrics: `[第一段]
霓虹灯在雨中溶解
城市的脉搏闪烁着频率
我们在这个赛博朋克的夜晚
寻找模拟世界的温度

[副歌]
霓虹雨夜，数字的寂寞
我们在虚拟中触碰真实
每个像素都是一个故事
每根线条都是一条命运

[第二段]
全息图在雾中舞蹈
算法谱写着陌生的节奏
我看不清你的表情
只有屏幕反射的光

[桥段]
在这个充满噪音的世界
我们试图找到信号
那些关于你的数据
永远无法转换成感觉

[结尾]
当雨停止下落
霓虹灯也将熄灭
但在我的硬盘里
你永远闪烁`,
    },
    "song-4": {
      id: "song-4",
      title: "编码梦想",
      duration: "4:55",
      artist: "303 & Claude",
      lyrics: `[第一段]
夜幕降临，键盘开始歌唱
代码像诗歌般流淌
我将梦想编译成可执行文件
等待它在现实中运行

[副歌]
编码梦想，一行一行
构建一个属于我的世界
Bug和Feature交织在一起
每一次修复都是成长

[第二段]
咖啡因推动着思维的转轴
算法优化了我的灵魂
我在循环中找到了意义
在递归中看到了无限

[桥段]
如果代码是语言
我用它诠释爱与孤独
如果函数是生活
我调用了每一个美好的时刻

[第三段]
黎明时分，代码还在运行
我依然坐在屏幕前
看着窗外的天空渐亮
想起为什么我选择了这条路

[结尾副歌]
编码梦想，永不停歇
用技术点亮黑暗
在无穷无尽的创造中
我找到了自己

[尾声]
return dream.compile();`,
    },
  }

  const song = songs[params.id]
  if (!song) {
    notFound()
  }

  const lyricLines = song.lyrics.split("\n")

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-cyan-400 truncate">&gt; 歌词: {song.title}</h1>
          <Link href="/music">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 border border-green-400 text-sm">
              返回
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-black/60 border-2 border-green-400 p-8">
          <header className="mb-8 pb-6 border-b-2 border-green-600">
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">♪ {song.title}</h1>
            <div className="text-sm text-green-300 space-y-1">
              <div>&gt; 艺术家: {song.artist}</div>
              <div>&gt; 时长: {song.duration}</div>
              <div>&gt; 状态: 正在播放...</div>
            </div>
          </header>

          {/* Audio player visualization */}
          <div className="my-8 bg-black/80 border-2 border-green-600 p-4">
            <div className="flex gap-1 h-16 items-end justify-center">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-green-400 to-cyan-400 animate-pulse"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Lyrics */}
          <div className="my-8 bg-black/80 border-l-2 border-green-400 pl-6 py-4">
            {lyricLines.map((line, index) => (
              <p
                key={index}
                className={`leading-relaxed my-2 ${
                  line.startsWith("[")
                    ? "text-cyan-400 font-bold"
                    : line.startsWith("return")
                      ? "text-yellow-400"
                      : "text-green-200"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <footer className="mt-12 pt-6 border-t-2 border-green-600">
            <div className="flex gap-4">
              <Link href="/music">
                <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 border border-green-400">
                  &lt; 返回列表
                </Button>
              </Link>
              <Button className="bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 border border-green-400">
                下载 MP3 &gt;
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
