import { useState } from 'react'

const LINKS = ['Services', 'Training', 'Research', 'Blog']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2 font-display text-xl font-700 tracking-tight">
          <span>telspace</span>
          <span className="rounded bg-ink px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-widest text-amber">
            AFRICA
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-wider text-slate hover:text-ink transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-amber hover:border-amber hover:text-ink"
          >
            Request Engagement
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-xs uppercase tracking-wider"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-slate"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md border border-ink bg-ink px-4 py-2 text-center font-mono text-sm uppercase tracking-wider text-paper"
            >
              Request Engagement
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
