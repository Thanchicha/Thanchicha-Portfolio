import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, Zap } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      id: "01",
      title: "Tech-Savvy Communicator",
      desc: "Having a foundational background in frontend development and database structures, I act as an effective translator between business stakeholders and developers—ensuring requirements are seamlessly converted into scalable system designs."
    },
    {
      id: "02",
      title: "Analytical & Systemic Thinker",
      desc: "I thrive on breaking down complex, chaotic problems into clean, structured logic, processes, and functional system architectures."
    },
    {
      id: "03",
      title: "User-Centric Design",
      desc: "Every decision starts with the user. I validate assumptions through user research and prototyping before committing to implementation."
    },
    {
      id: "04",
      title: "Continuous Learning",
      desc: "Staying current with emerging technologies, frameworks, and methodologies through hands-on building and hackathon participation."
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
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-primary leading-[1.4] font-normal tracking-tight">
            I am passionate about bridging the gap between business goals and technical systems. My core focus is on creating meaningful digital products and processes that not only solve real-world problems for users but also drive sustainable growth and system efficiency for organizations.
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

        {/* Professional Strengths */}
        <div className="mt-24">
          <div className="flex items-center gap-3 font-mono text-text-muted text-sm uppercase tracking-widest pl-2 mb-10">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Zap size={20} />
            </div>
            PROFESSIONAL_STRENGTHS
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Business Analysis (BA)",
                desc: "Full-cycle requirement elicitation, stakeholder mapping, and business case validation with traceability from goal to shipped feature."
              },
              {
                title: "System Logic Design",
                desc: "Designing scalable system architectures with clear data flow, conflict-resolution logic, and well-defined API contracts."
              },
              {
                title: "Frontend Development",
                desc: "Building responsive, accessible interfaces with React, Tailwind CSS, and Vanilla JS — from component libraries to full-stack integration."
              },
              {
                title: "Revenue Engineering",
                desc: "Translating market research and user empathy into sustainable revenue models, financial plans, and ROI analyses."
              }
            ].map((str, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                className="card p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                <h4 className="text-lg font-bold text-text-primary mb-4">{str.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  {str.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
