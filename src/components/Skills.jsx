import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, PenTool, Code, Wrench, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeSkills, setActiveSkills] = useState({});

  const toggleSkill = (categoryIdx, skill) => {
    setActiveSkills(prev => ({
      ...prev,
      [categoryIdx]: prev[categoryIdx] === skill ? null : skill
    }));
  };

  const skillData = {
    // [PRODUCT]
    "Design Thinking": "Applied Design Thinking across Cosaki and Coral Supply to validate product-market fit before committing to development.",
    "Product Development": "Led product strategy and revenue engineering for Cosaki, pivoting to a sustainable business model.",
    "Customer Journey Mapping": "Mapped out end-to-end Customer Journeys of commercial buyers at Makro wholesale centers to validate AI features.",
    "Lean Canvas": "Structured business cases and validated assumptions using Lean Canvas methodologies during SIT Innoventure and hackathons.",
    "Financial Planning & ROI": "Developed comprehensive financial plans, cost-benefit analyses, and ROI models for the Makro Pro AI food preservation feature.",
    "Pitching & Storytelling": "Crafted and delivered a high-impact, story-driven pitch to a panel of international judges at NTU Hackathon 2026.",
    "Requirement Definition": "Translated business and user needs into structured flows, system logic, and practical implementation direction across multidisciplinary projects.",
    "Prioritization": "Balanced user value, business viability, technical feasibility, and delivery constraints when shaping project scope.",
    
    // [UX]
    "User Research & Interviews": "Executed on-site ethnographic research at Makro wholesale centers and cosplay community field research for Cosaki.",
    "Information Architecture": "Simplified user flows and designed low-cognitive-load touch areas for stroke patients in Paw Guardian.",
    "Wireframing & Prototyping": "Translated raw user research into high-fidelity Figma designs, building pixel-perfect responsive web structures.",
    "Figma": "Partnered with frontend engineers to seamlessly translate high-fidelity Figma designs into pixel-perfect web structures.",
    "Draw.io": "Engineered a 'Lazy-Input & Data-Driven' system blueprint using Draw.io to align technical expectations across mentors and devs.",
    "Maze": "Conducted usability testing and validated UI/UX assumptions through rapid prototyping workflows.",

    // [DATA]
    "Data Analysis": "Used research findings, operational inputs, and business data to identify patterns and support solution decisions.",
    "KPI & Metric Definition": "Connected product ideas to measurable outcomes through cost, waste-reduction, usage, and business-impact indicators.",
    "Research Synthesis": "Converted interviews, observations, and desk research into themes, insights, and actionable opportunities.",
    "SQL / MySQL": "Worked with relational schemas and data flows to understand how product interfaces connect with stored information.",

    // [DELIVERY]
    "React": "Developed responsive and clean web marketplace interfaces using React, ensuring core transactional flows were highly intuitive.",
    "Tailwind CSS": "Built highly reusable UI components using Tailwind CSS, ensuring consistency across booking screens.",
    "JavaScript (ES6+)": "Programmed the core file-parsing engine, mathematical algorithm execution, and dynamic data binding using pure Vanilla JS.",
    "HTML / CSS": "Crafted a highly responsive, fast-loading, and clean user interface using native HTML5 and CSS3.",
    "Node.js": "Proactively self-taught and applied Node.js backend concepts to handle data routing constraints during the SIT Hackathon.",
    "MySQL": "Handled database schemas and data pipelines between the user interface and MySQL database layer under pressure.",
    "Stakeholder Alignment": "Communicated product logic and trade-offs across business, design, and technical perspectives.",
    "Project Planning": "Worked within fixed hackathon and internship timelines, translating scope into concrete deliverables.",
    "Documentation": "Created system flows, business cases, prototypes, and supporting materials to keep project direction understandable.",
    "Blocker Resolution": "Adapted scope and learned unfamiliar technologies to unblock delivery under time constraints.",

    // [TECH]
    "Git & GitHub": "Managed continuous integration of full-stack elements, debugging architectural data flows using Git version control.",
    "VS Code": "Utilized VS Code for rapid prototyping, debugging, and executing production-ready client-side architectures.",
    "Agile Mindset": "Iterated rapidly through 96-hour hackathons, adapting to unexpected integration blocks with a flexible Agile approach.",
    "Local Storage API": "Designed an efficient data-persistence layer utilizing Local Storage to save and manage user-configured master recipes completely on the client side."
  };

  const skillCategories = [
    {
      id: "[PRODUCT]",
      title: "Product & Business",
      icon: <Briefcase size={20} />,
      skills: ["Product Development", "Requirement Definition", "Prioritization", "Customer Journey Mapping", "Financial Planning & ROI", "Pitching & Storytelling"]
    },
    {
      id: "[DATA]",
      title: "Data & Insights",
      icon: <PenTool size={20} />,
      skills: ["Data Analysis", "KPI & Metric Definition", "Research Synthesis", "SQL / MySQL", "User Research & Interviews", "Financial Planning & ROI"]
    },
    {
      id: "[DELIVERY]",
      title: "Delivery & Collaboration",
      icon: <Code size={20} />,
      skills: ["Stakeholder Alignment", "Project Planning", "Documentation", "Blocker Resolution", "Agile Mindset", "Pitching & Storytelling"]
    },
    {
      id: "[TECH]",
      title: "Technology & Prototyping",
      icon: <Wrench size={20} />,
      skills: ["Figma", "Draw.io", "Wireframing & Prototyping", "JavaScript (ES6+)", "React", "SQL / MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-header mb-8">06 CAPABILITY_MATRIX</div>
        <p className="text-text-secondary text-base mb-12 max-w-2xl">
          Four connected capability areas, grounded in how I approach product and business problems. Select a skill to see the current evidence.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
              className="card p-8 flex flex-col gap-6 bg-white dark:bg-[#110f17]"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <div className="font-mono text-text-muted text-[11px] mb-1 font-semibold tracking-wider">{cat.id}</div>
                  <h3 className="text-xl font-bold text-text-primary tracking-tight">{cat.title}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-2">
                {cat.skills.map((skill, i) => {
                  const isActive = activeSkills[idx] === skill;
                  return (
                    <motion.span 
                      key={i} 
                      onClick={() => toggleSkill(idx, skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`pill-tag transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/20' 
                          : 'text-[#64748b] bg-[#f1f5f9] dark:bg-gray-800 dark:text-gray-400 hover:bg-[#6366F1]/20 hover:text-[#6366F1]'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>

              <AnimatePresence>
                {activeSkills[idx] && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800/50 flex gap-3 text-sm">
                      <ChevronRight size={16} className="text-[#6366F1] mt-0.5 shrink-0" />
                      <p className="text-text-secondary leading-relaxed">
                        <span className="text-[#6366F1] font-mono font-bold tracking-wider mr-2 uppercase text-[11px]">Evidence:</span>
                        {skillData[activeSkills[idx]]}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
