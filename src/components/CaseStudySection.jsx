export default function CaseStudySection({ heading, body, bullets, highlight, flow }) {
  return (
    <section className="border-b border-gray-200 py-10 dark:border-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-text-primary">{heading}</h2>
      {body && <p className="max-w-3xl text-base leading-relaxed text-text-secondary">{body}</p>}
      {highlight && <p className="case-study-highlight">{highlight}</p>}
      {bullets?.length > 0 && <ul className="case-study-bullets">{bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
      {flow?.length > 0 && <div className="case-study-flow" aria-label={`${heading} process`}>{flow.map((step, index) => <span key={step}>{step}{index < flow.length - 1 && <b aria-hidden="true">→</b>}</span>)}</div>}
    </section>
  );
}
