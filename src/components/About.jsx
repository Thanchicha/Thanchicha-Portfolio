import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      id: "01",
      title: "Business–Tech Translator",
      desc: "I connect business goals with technical realities, turning stakeholder needs into clear requirements and shared language for delivery teams."
    },
    {
      id: "02",
      title: "Structured Problem Solver",
      desc: "I break ambiguous problems into evidence, assumptions, priorities, and practical next steps that a team can act on."
    },
    {
      id: "03",
      title: "Evidence-Led Thinker",
      desc: "I use user research, data, and rapid prototypes to test assumptions and support product and business decisions."
    },
    {
      id: "04",
      title: "Hands-On Collaborator",
      desc: "I learn new tools quickly, communicate across disciplines, and stay involved from early discovery through execution and iteration."
    }
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-header mb-16">02 ABOUT_ME</div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="max-w-3xl text-xl md:text-2xl lg:text-3xl text-text-primary leading-[1.5] font-normal tracking-[0.01em]">
            I work at the intersection of business, users, data, and technology. I enjoy turning complex problems into clear product direction, aligning people around practical decisions, and helping teams move from an idea to a solution that creates measurable value.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 card p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            {/* Background shape */}
            {/* Using bg-primary/5 to fix Tailwind v4 opacity syntax (avoids solid color bug) */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 font-mono text-text-muted text-sm uppercase tracking-widest mb-10">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <GraduationCap size={20} />
                </div>
                EDUCATION
              </div>
              
              <h3 className="text-4xl font-bold text-text-primary mb-3">KMUTT</h3>
              <p className="text-text-secondary text-base mb-8 max-w-xs leading-relaxed">
                King Mongkut's University of Technology Thonburi<br/>
                School of Information Technology (SIT)
              </p>
            </div>
            
            <div className="flex flex-col w-full font-mono text-xs md:text-sm relative z-10 mt-8">
              <div className="text-primary font-bold text-sm md:text-base mb-2">B.A. (Digital Service Innovation)</div>
              
              <div className="flex items-end justify-between w-full mb-2">
                <div className="text-text-muted">GPA</div>
                <div className="text-primary font-bold">3.78 <span className="text-primary/50">/ 4.00</span></div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-primary/20 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '94.5%' }}></div>
              </div>
              
              <div className="text-text-muted">
                2024 — Present <span className="opacity-70 ml-2">(Expected Graduation: 2028)</span>
              </div>

              <div className="mt-7 rounded-xl border border-[#9D85FF]/30 bg-[#9D85FF]/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8b5cf6]">Recognition</div>
                <h4 className="mt-2 text-sm font-bold text-text-primary">Academic Excellence Scholarship — SIT, KMUTT</h4>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">Awarded in 2025 and 2026 in recognition of academic performance.</p>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 font-mono text-text-muted text-sm uppercase tracking-widest pl-2">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <CheckCircle2 size={20} />
              </div>
              CORE_VALUES
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 h-full">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                  className="card p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  <div className="font-mono text-primary mb-4 text-sm">{value.id}</div>
                  <h4 className="text-lg font-bold text-text-primary mb-3 leading-snug">{value.title}</h4>
                  <p className="text-text-secondary leading-relaxed text-sm flex-grow">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
