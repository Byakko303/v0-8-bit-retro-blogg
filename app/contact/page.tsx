export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-mono neon-glow-green">/contact</h1>
      <p className="matrix-text">
        欢迎联系我。你可以通过下方方式与我取得联系：
      </p>
      <ul className="list-disc pl-6">
        <li>
          邮箱：<a className="underline" href="mailto:hello@chengyujie.com">hello@chengyujie.com</a>
        </li>
        <li>
          GitHub：<a className="underline" href="https://github.com/Byakko303" target="_blank" rel="noreferrer">@Byakko303</a>
        </li>
      </ul>
    </section>
  )
}

