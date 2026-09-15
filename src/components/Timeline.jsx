import { motion } from 'framer-motion';

export default function Timeline() {
  const ongoingExperiences = [
    {
      year: "May 2026",
      badge: "Startup",
      title: "Co-Founder & Business Lead — Cosaki",
      subtitle: "SIT Innoventure · Startup continues",
      desc: "Co-founded a cosplay rental startup with one development co-founder. Led problem framing, user discovery, partner conversations, prioritization, and business direction while the MVP was tested with early users."
    },
  ];

  const completedExperiences = [
    {
      year: "Jun–Aug 2026",
      badge: "Internship",
      title: "Pakarang Supply — Software Developer Intern, SmartProcure",
      subtitle: "NIA Innovator Journey Program · Training Apr–May 2026 · Internship Jun–Aug 2026",
      desc: "Selected for the NIA 'Innovator Journey' Program. Worked on SmartProcure by translating workflow needs into structured requirements, AI-assisted JSON experiments, QA notes, and clearer user journeys."
    },
    {
      year: "May 2026",
      badge: "Award",
      title: "NTU Hackathon 2026",
      subtitle: "Honorable Mention — Paw Guardian",
      desc: "A concept project exploring an empathetic digital and IoT rehabilitation experience. Contributed to inclusive UX thinking, prototyping, and communicating the solution through a technical pitch."
    },
    {
      year: "Jul–Aug 2025",
      badge: "Competition",
      title: "CP Axtra Mile Hackathon 2025",
      subtitle: "Team D-SY · Top 10 of 113 teams",
      desc: "Led research and synthesis using 12 interviews, 44 survey responses, and onsite observation to refine a retail innovation opportunity."
    },
    {
      year: "Apr 2025",
      badge: "Hackathon",
      title: "SIT Hackathon 2025",
      subtitle: "4-day hackathon",
      desc: "Contributed to a time-bound marketplace concept, communicating system flows and helping the team work through integration constraints."
    },
    {
      year: "Jan–Feb 2025",
      badge: "Bootcamp + Hackathon",
      title: "SIT Hello World Hippo 2025",
      subtitle: "Bootcamp and Hackathon",
      desc: "Frontend contributor in a multidisciplinary team, helping translate product and design direction into a working booking experience under a fixed timeline."
    }
  ];

  return (
    <section id="timeline" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800 bg-bg-main">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="font-mono text-[#6366F1] font-bold text-sm tracking-widest uppercase shrink-0">
            // 07 <span className="text-text-muted font-normal ml-2">EXPERIENCE_LOG</span>
          </div>
          <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
        </div>

        <div className="max-w-4xl ml-2 md:ml-12 relative">
          <div>
            <h2 className="mb-8 text-2xl font-bold text-text-primary">Currently in progress</h2>
            <div className="relative space-y-16 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-[2px] before:rounded-full before:bg-gray-100 dark:before:bg-gray-800/60">
            {ongoingExperiences.map((exp, idx) => (
              <motion.div 
                key={`ongoing-${idx}`}
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
            <h2 className="mb-8 mt-20 text-2xl font-bold text-text-primary">Completed experience</h2>
            <div className="relative space-y-16 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-[2px] before:rounded-full before:bg-gray-100 dark:before:bg-gray-800/60">
            {completedExperiences.map((exp, idx) => (
              <motion.div 
                key={`completed-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-20 group"
              >
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-gray-400 dark:border-gray-600 bg-bg-main group-hover:border-[#6366F1] group-hover:bg-[#6366F1] transition-all duration-300 z-10 ring-4 ring-bg-main group-hover:ring-[#e0e7ff] dark:group-hover:ring-[#6366F1]/20"></div>
                <div className="flex items-center gap-4 mb-3"><span className="font-bold text-[#6366F1] font-mono text-sm">{exp.year}</span><span className="px-2.5 py-0.5 bg-[#f1f5f9] dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 text-[11px] font-mono rounded-md font-medium tracking-wide">{exp.badge}</span></div>
                <h3 className="text-xl md:text-[22px] font-bold text-text-primary mb-2 leading-tight">{exp.title}</h3>
                <div className="text-[#8b5cf6] dark:text-[#818cf8] text-sm font-medium mb-4">{exp.subtitle}</div>
                <p className="text-text-secondary leading-relaxed text-sm max-w-3xl">{exp.desc}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
