function SkillList({ title, skills, onSkillSelect }) {
  return (
    <section aria-labelledby={`role-${title.toLowerCase().replace(' ', '-')}`}>
      <h3 id={`role-${title.toLowerCase().replace(' ', '-')}`}>{title}</h3>
      <div className="role-toolkit-list">
        {skills.map((skill) => (
          <button key={skill} type="button" onClick={() => onSkillSelect(skill)} aria-label={`Filter projects by ${skill}`}>
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function RoleToolkit({ roleLabel, toolkit, projectCount, onSkillSelect }) {
  return (
    <aside className="role-toolkit" aria-labelledby="role-toolkit-title">
      <div className="role-toolkit-intro">
        <p className="role-toolkit-eyebrow">ROLE_TOOLKIT</p>
        <h2 id="role-toolkit-title">{roleLabel} Toolkit</h2>
        <p className="role-toolkit-proof">Skills evidenced across {projectCount} relevant {projectCount === 1 ? 'project' : 'projects'}.</p>
      </div>
      <div className="role-toolkit-groups">
        <SkillList title="Hard skills" skills={toolkit.hard} onSkillSelect={onSkillSelect} />
        <div className="role-toolkit-soft">
          <SkillList title="Soft skills" skills={toolkit.soft} onSkillSelect={onSkillSelect} />
          <p className="role-toolkit-evidence"><span>Evidence</span>{toolkit.evidence}</p>
        </div>
      </div>
    </aside>
  );
}
