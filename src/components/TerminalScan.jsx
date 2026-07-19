import { useEffect, useState } from 'react'

const SCRIPT = [
  { t: 0, text: '$ recon --target=telspace.africa --mode=passive', cls: 'text-slate-400' },
  { t: 650, text: '[+] resolving host ... ok', cls: 'text-verify' },
  { t: 1150, text: '[+] tls handshake ... ok  (grade: A)', cls: 'text-verify' },
  { t: 1650, text: '[+] scanning attack surface ... 14 endpoints found', cls: 'text-paper/80' },
  { t: 2250, text: '[+] checking headers ... hsts, csp present', cls: 'text-verify' },
  { t: 2850, text: '[i] engagement type: authorized, client-approved', cls: 'text-amber' },
  { t: 3450, text: '[i] est. since 2002 · 20+ years of authorized testing', cls: 'text-amber' },
  { t: 4100, text: '$ status: clean scope. ready to engage_', cls: 'text-paper' },
]

export default function TerminalScan() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const timers = SCRIPT.map((line, i) =>
      setTimeout(() => setVisible(i + 1), line.t)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="w-full rounded-lg border border-white/10 bg-ink-soft/80 shadow-2xl shadow-black/40 overflow-hidden"
      role="img"
      aria-label="Simulated authorized security scan log showing a clean, passing result for telspace.africa"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-verify/70" />
        <span className="ml-2 font-mono text-xs text-slate-400">engagement.log</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[220px] sm:min-h-[240px]">
        {SCRIPT.slice(0, visible).map((line, i) => (
          <div key={i} className={`${line.cls} whitespace-pre-wrap break-words`}>
            {line.text}
          </div>
        ))}
        {visible < SCRIPT.length && (
          <span className="inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-amber" />
        )}
      </div>
    </div>
  )
}
