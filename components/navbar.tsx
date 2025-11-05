"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-mono text-sm md:text-base">
          ~/303-终端博客.exe
        </Link>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/music">Music</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/whoami">Whoami</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Contact</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

