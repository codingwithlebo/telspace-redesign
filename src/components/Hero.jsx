import TerminalScan from './TerminalScan'

export default function Hero() {
  return (
    <section id="top" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Offensive security · Est. 2002
          </p>
          <h1 className="font-display text-5xl font-700 leading-[1.05] tracking-tight sm:text-6xl">
            We break in
            <br />
            before they do.
          </h1>
          <p className="mt-6 max-w-md text-lg text-paper/70">
            Authorized penetration testing, red teaming, and security research for
            organisations across Africa that would rather find their flaws first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-amber px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition-transform hover:scale-[1.02]"
            >
              Request an engagement
            </a>
            <a
              href="#services"
              className="rounded-md border border-paper/20 px-6 py-3 font-mono text-sm uppercase tracking-wider text-paper/80 transition-colors hover:border-paper/50"
            >
              See what we test
            </a>
          </div>
        </div>

        <TerminalScan />
      </div>
    </section>
  )
}
