const POSTS = [
  { tag: 'ADVISORY', title: 'Chained misconfigurations in a common SA banking API pattern', date: 'Jun 2026' },
  { tag: 'WRITEUP', title: 'From guest wifi to domain admin in one afternoon', date: 'Apr 2026' },
  { tag: 'RESEARCH', title: 'Why most phishing training doesn\u2019t change behaviour', date: 'Feb 2026' },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim">From the log</p>
        <h2 className="mt-3 font-display text-2xl font-700 tracking-tight sm:text-3xl">
          Recent writeups
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between group"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-widest text-amber-dim">{p.tag}</span>
                <span className="font-display text-lg group-hover:text-amber-dim transition-colors">
                  {p.title}
                </span>
              </div>
              <span className="font-mono text-xs text-slate">{p.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
