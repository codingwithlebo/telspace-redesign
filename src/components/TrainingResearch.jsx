export default function TrainingResearch() {
  return (
    <section className="border-y border-ink/10 bg-paper-dim py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div id="training">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim">Training</p>
          <h2 className="mt-3 font-display text-2xl font-700 tracking-tight">
            We teach the offense we practice.
          </h2>
          <p className="mt-4 text-slate">
            Hands-on courses for security teams who want to think like an attacker,
            not just read about one. Built from real engagement findings, updated
            every year they run.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block font-mono text-sm uppercase tracking-wider text-ink underline decoration-amber decoration-2 underline-offset-4"
          >
            Ask about upcoming courses →
          </a>
        </div>

        <div id="research">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim">Research</p>
          <h2 className="mt-3 font-display text-2xl font-700 tracking-tight">
            Findings we publish on purpose.
          </h2>
          <p className="mt-4 text-slate">
            Vulnerability research and advisories from our own team's work in the
            field — because a security company that hides its findings isn't
            proving much.
          </p>
          <a
            href="#blog"
            className="mt-6 inline-block font-mono text-sm uppercase tracking-wider text-ink underline decoration-amber decoration-2 underline-offset-4"
          >
            Read the research log →
          </a>
        </div>
      </div>
    </section>
  )
}
