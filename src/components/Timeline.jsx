import { motion } from 'framer-motion';

export default function Timeline() {
  const experiences = [
    {
      year: "2026",
      badge: "Internship",
      title: "Software Developer Intern — SmartProcure (Coral Supply)",
      subtitle: "Coral Supply × NIA Innovator Journey Program",
      desc: "Selected for the NIA 'Innovator Journey' Program. Worked on SmartProcure by translating workflow needs into structured requirements, AI-assisted JSON experiments, QA notes, and clearer user journeys."
    },
    {
      year: "2026",
      badge: "Venture",
      title: "Co-Founder & Product Lead — Cosaki",
      subtitle: "SIT Innoventure",
      desc: "Co-founded a cosplay rental startup with one development co-founder. Led problem framing, user discovery, partner conversations, prioritization, and business direction while the MVP was tested with early users."
    },
    {
      year: "2026",
      badge: "Award",
      title: "Honorable Mention — Paw Guardian",
      subtitle: "NTU Hackathon 2026",
      desc: "A concept project exploring an empathetic digital and IoT rehabilitation experience. Contributed to inclusive UX thinking, prototyping, and communicating the solution through a technical pitch."
    },
    {
      year: "2025",
      badge: "Award",
      title: "1st Place & Popular Vote — Faculty Room Booking",
      subtitle: "SIT Hello World Hippo 2025",
      desc: "Frontend contributor in a multidisciplinary hackathon. Helped translate product and design direction into a working booking experience and collaborated across the team under a fixed timeline."
    },
    {
      year: "2025",
      badge: "Award",
      title: "Top 10 Finalists — Makro Pro AI Food Preservation",
      subtitle: "CP Axtra Mile Hackathon 2025 (Team: D-SY)",
      desc: "Led research and synthesis for a retail innovation challenge using 12 interviews, 44 survey responses, and onsite observation. The team was selected in the Top 10 of 113 teams."
    },
    {
      year: "2025",
      badge: "Hackathon",
      title: "Frontend Developer — Sun-Sola",
      subtitle: "SIT Hackathon 2025",
      desc: "Contributed to a marketplace concept in a 96-hour hackathon, learning unfamiliar tools while communicating system flows and helping the team work through integration constraints."
    }
  ];

  return (
    <section id="timeline" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800 bg-bg-main">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="font-mono text-[#6366F1] font-bold text-sm tracking-widest uppercase shrink-0">
            // 06 <span className="text-text-muted font-normal ml-2">EXPERIENCE_LOG</span>
          </div>
          <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
        </div>

        <div className="max-w-4xl ml-2 md:ml-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-100 dark:bg-gray-800/60 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gray-400 dark:border-gray-600 bg-bg-main group-hover:border-[#6366F1] group-hover:bg-[#6366F1] transition-all duration-300 z-10 ring-4 ring-bg-main group-hover:ring-[#e0e7ff] dark:group-hover:ring-[#6366F1]/20"></div>

                <div className="flex items-center gap-4 mb-3">
                  <span className="font-bold text-[#6366F1] font-mono text-sm">{exp.year}</span>
                  <span className="px-2.5 py-0.5 bg-[#f1f5f9] dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 text-[11px] font-mono rounded-md font-medium tracking-wide">
                    {exp.badge}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-[22px] font-bold text-text-primary mb-2 leading-tight">
                  {exp.title}
                </h3>
                
                <div className="text-[#8b5cf6] dark:text-[#818cf8] text-sm font-medium mb-4">
                  {exp.subtitle}
                </div>
                
                <p className="text-text-secondary leading-relaxed text-sm max-w-3xl">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
