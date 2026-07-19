const STATS = [
  { value: '20+', label: 'years in operation' },
  { value: '500+', label: 'engagements delivered' },
  { value: '14', label: 'countries served' },
  { value: '0', label: 'findings kept from clients' },
]

export default function TrustStrip() {
  return (
    <section className="bg-ink py-12 text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-700 text-amber">{s.value}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
