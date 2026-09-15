export default function EvidenceList({ title, items }) {
  return <section className="evidence-panel"><h2>{title}</h2><ul>{items.map((item) => <li key={item}><span className="evidence-dot" aria-hidden="true" /><span>{item}</span></li>)}</ul></section>;
}
