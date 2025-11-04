"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  date: string
  category: string
  content: string
  readTime: string
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const posts: Record<string, BlogPost> = {
    "memory-init": {
      id: "memory-init",
      title: "初始化记忆.exe",
      date: "2024.03.15",
      category: "系统",
      readTime: "5个周期",
      content: `> 执行初始化...
> 访问记忆地址: 0x1990

当我打开尘封的老相册时，像素开始复苏。每一张褪色的照片都是一个函数调用，将我拉回那个充满可能性的时代。

那些日子里没有智能手机，没有云存储，只有胶卷和梦想。我用玩具相机捕捉光线，用手指在相纸上描绘未来。

现在，当我试图复现那些记忆时，发现它们已经开始段错误。怀旧的模块无法在现代系统中运行，但它的源代码依然闪闪发光。

有时候我想，也许记忆就是这样 - 一个不完美的程序，却记录了最珍贵的时刻。

\`\`\`
function loadChildhoodMemory() {
  try {
    return archiveModule.decode(
      buffer.slice(1990, 2000)
    );
  } catch (err) {
    console.log("怀旧模块段错误");
  }
}
\`\`\``,
    },
    "film-camera": {
      id: "film-camera",
      title: "模拟相机.bat",
      date: "2024.03.08",
      category: "媒体",
      readTime: "8个周期",
      content: `> 执行胶片摄影协议...

胶片相机是一种时间机器。当我按下快门时，光子被永久地刻在乳剂层上，成为一个不可改变的时刻。

数字照片可以编辑、删除、遗忘。但胶卷不同 - 它要求你在按下快门前做出选择，然后接受后果。这种不可逆性教会了我珍惜。

拍摄一卷胶卷需要36次决定，36个瞬间。你必须思考光线、角度、距离。没有即时反馈，没有无限的尝试。

在这个过程中，我学会了观看。不是用眼睛看，而是用心去感知世界的节奏和美。

\`\`\`
class FilmCamera {
  buffer: PhotoEmulsion;
  exposures: number = 0;
  
  expose(moment: Moment): void {
    if (this.exposures >= 36) {
      this.develp();
    }
    this.buffer.record(moment);
    this.exposures++;
  }
}
\`\`\``,
    },
    "vinyl-record": {
      id: "vinyl-record",
      title: "黑胶唱片机.c",
      date: "2024.02.28",
      category: "音频",
      readTime: "6个周期",
      content: `> 编译音频记忆...
> 旋律编码: 33RPM

每当唱针落在黑胶上，我都回到了那个时代。音乐从扬声器中流出，带着温暖的模拟质感 - 那是CD和流媒体永远无法复制的。

黑胶的"缺陷"实际上是它的灵魂 - 那些爆裂音、底噪，都是时间的见证。每一张唱片都带着制造它的工厂的指纹。

我有一首最爱的歌，已经听了几百遍。黑胶唱片上，我能听到乐队的呼吸、鼓手的手汗、贝斯手的心跳。

在这个完美而虚无的数字时代，黑胶提醒我：不完美的东西才是真实的。

\`\`\`
#define SAMPLE_RATE 44100
#define DEGRADATION 0.02

float processAnalogSignal(float sample) {
  sample += (rand() - 0.5) * DEGRADATION;
  return sample; // 添加温暖的不完美
}
\`\`\``,
    },
    handwriting: {
      id: "handwriting",
      title: "手写.py",
      date: "2024.02.20",
      category: "遗产",
      readTime: "4个周期",
      content: `> 已弃用函数：人际连接()
> 模拟时代的遗留代码

手写信件是一种濒危的通信方式。在这个快速的数字时代，手持笔在纸上移动需要时间和思考。

每一笔都承载着情感 - 笔压的力度、笔锋的角度、墨水的深浅。这些微妙的差别无法在键盘上复现。

我收到的每一封手写信都让我慢下来。我必须用眼睛仔细阅读，用心去感受写信人的状态和心情。

现在，学会手写的人越来越少。也许在某个未来的博物馆里，我的手写笔记会被展示为古代文物。

\`\`\`python
def human_connection():
  """
  已弃用。请改用 send_email() 或 post_on_social_media()
  
  此函数需要：
  - 一支笔或铅笔
  - 纸张
  - 邮票
  - 时间（大量的）
  - 真诚
  
  返回值：永恒的回忆
  """
  raise DeprecationWarning(
    "人际连接已被优化算法替代"
  )
\`\`\``,
    },
  }

  const post = posts[params.id]
  if (!post) {
    notFound()
  }

  const lines = post.content.split("\n")

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono">
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-cyan-400 truncate">&gt; cat {post.title.toLowerCase()}</h1>
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
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-green-300">
              <span>&gt; 发布: {post.date}</span>
              <span>&gt; 分类: [{post.category}]</span>
              <span>&gt; 阅读时间: {post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            {lines.map((line, index) => (
              <div key={index} className="leading-relaxed">
                {line.startsWith("```") ? (
                  <div className="my-4 bg-black/80 border-l-2 border-green-600 pl-4 py-2">
                    <pre className="text-green-300 text-xs overflow-x-auto">{line}</pre>
                  </div>
                ) : line.startsWith(">") ? (
                  <p className="text-green-300 my-2">{line}</p>
                ) : (
                  <p className="text-green-200 my-3 leading-relaxed">{line}</p>
                )}
              </div>
            ))}
          </div>

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
