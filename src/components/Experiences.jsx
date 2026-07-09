import { Award, Trophy } from 'lucide-react';

export default function Experiences() {
  const experiences = [
    { title: "Co-Founder & Product Lead", event: "Cosaki (SIT Innoventure)", date: "2025 - Present", badge: "Startup" },
    { title: "Software Developer Intern", event: "Coral Supply", date: "2026", badge: "Internship" },
    { title: "Honorable Mention", event: "NTU Hackathon (Project: Paw Guardian)", date: "2026", badge: "Award" },
    { title: "1st Place & Popular Vote", event: "SIT Hello World Hippo", date: "2025", badge: "1st Place" },
    { title: "Top 10 Finalists", event: "CP Axtra Mile Hackathon (Team: D-SY)", date: "2025", badge: "Finalist" },
    { title: "Frontend Developer", event: "SIT Hackathon (Project: Sun-Sola)", date: "2025", badge: "Hackathon" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-primary">Key Experiences & Activities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card card-border-gradient p-6 hover-glow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="badge-award">
                    <Trophy size={14} />
                    {exp.badge}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-2">{exp.title}</h3>
                <p className="text-textSecondary text-sm font-medium mb-4">{exp.event}</p>
              </div>
              <div className="text-textMuted text-xs font-semibold">
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
