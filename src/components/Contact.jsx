import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink py-24 text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight sm:text-4xl">
            Tell us what you need tested.
          </h2>
          <p className="mt-4 max-w-sm text-paper/70">
            Every engagement starts with a scoping conversation, not a sales call.
            Tell us about your environment and we'll come back with an approach.
          </p>
          <div className="mt-8 space-y-1 font-mono text-sm text-paper/60">
            <p>hello@telspace.africa</p>
            <p>+27 10 590 6163</p>
            <p>Hyde Park, Johannesburg</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {sent ? (
            <div className="rounded-md border border-verify/40 bg-verify/10 p-6 font-mono text-sm text-verify">
              Message received. We'll respond within one business day.
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="mb-1 block font-mono text-xs uppercase tracking-wider text-paper/60">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-md border border-paper/20 bg-ink-soft px-4 py-3 text-paper outline-none focus:border-amber"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-mono text-xs uppercase tracking-wider text-paper/60">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-paper/20 bg-ink-soft px-4 py-3 text-paper outline-none focus:border-amber"
                />
              </div>
              <div>
                <label htmlFor="scope" className="mb-1 block font-mono text-xs uppercase tracking-wider text-paper/60">
                  What do you need tested?
                </label>
                <textarea
                  id="scope"
                  rows={4}
                  required
                  className="w-full rounded-md border border-paper/20 bg-ink-soft px-4 py-3 text-paper outline-none focus:border-amber"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-amber py-3 font-mono text-sm uppercase tracking-wider text-ink transition-transform hover:scale-[1.01]"
              >
                Request an engagement
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
