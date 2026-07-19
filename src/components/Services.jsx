const SERVICES = [
  {
    code: 'PT-01',
    name: 'Penetration Testing',
    desc: 'Network, web, mobile, and API testing against real attacker techniques, not just a scanner report.',
  },
  {
    code: 'RT-02',
    name: 'Red Teaming',
    desc: 'Full-scope, objective-based engagements that test people, process, and technology together.',
  },
  {
    code: 'SE-03',
    name: 'Social Engineering',
    desc: 'Phishing, vishing, and physical access assessments that measure real human risk.',
  },
  {
    code: 'CS-04',
    name: 'Configuration & Code Review',
    desc: 'Source code and infrastructure configuration audits to catch issues before they ship.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim">Services</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight sm:text-4xl">
            Engagements, not audits.
          </h2>
          <p className="mt-4 text-slate">
            Every engagement is scoped with the client, executed by hand, and reported
            in plain language leadership can act on.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.code} className="group bg-paper p-8 transition-colors hover:bg-ink hover:text-paper">
              <p className="font-mono text-xs tracking-widest text-amber-dim group-hover:text-amber">
                {s.code}
              </p>
              <h3 className="mt-3 font-display text-xl font-600">{s.name}</h3>
              <p className="mt-2 text-sm text-slate group-hover:text-paper/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
