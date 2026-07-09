import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function ProfessionalStrengths() {
  const strengths = [
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
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-xl">
            <Zap size={24} />
          </div>
          <div className="font-mono text-text-muted text-sm uppercase tracking-widest">
            PROFESSIONAL_STRENGTHS
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((str, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-8 bg-white dark:bg-[#110f17] flex flex-col"
            >
              <h4 className="text-lg font-bold text-text-primary mb-4">{str.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                {str.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
