export default function ProjectTraction({ items }) {
  if (!items?.length) return null;

  return (
    <section className="project-traction" aria-labelledby="early-traction">
      <p id="early-traction">Early traction</p>
      <div>
        {items.map(({ value, label }) => (
          <dl key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
