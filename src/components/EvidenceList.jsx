export default function EvidenceList({ title, items }) {
  return <section className="rounded-2xl bg-[#f8f7ff] p-6 dark:bg-[#1a1724]"><h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-text-muted">{title}</h2><ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EC4899]" />{item}</li>)}</ul></section>;
}
