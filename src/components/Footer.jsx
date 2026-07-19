export default function Footer() {
  return (
    <footer className="bg-ink-soft py-8 text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} Telspace Africa. Hackers for hire, since 2002.</p>
        <p>Concept redesign — student project, not affiliated with Telspace Systems.</p>
      </div>
    </footer>
  )
}
