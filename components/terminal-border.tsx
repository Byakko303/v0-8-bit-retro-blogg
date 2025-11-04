"use client"

import type React from "react"

interface TerminalBorderProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function TerminalBorder({ children, title, className = "" }: TerminalBorderProps) {
  return (
    <div className={`bg-black/60 border-2 border-green-400 p-6 ${className}`}>
      {title && <div className="text-cyan-400 font-bold mb-4 text-sm">&gt; {title}</div>}
      <div className="text-green-300">{children}</div>
    </div>
  )
}
