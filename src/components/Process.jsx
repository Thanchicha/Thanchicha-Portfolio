import { motion } from 'framer-motion';
import { Search, ChartNoAxesCombined, ListChecks, UsersRound, Rocket, Gauge } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discover', desc: 'Understand users, stakeholders, and the business context.', icon: Search },
  { id: '02', title: 'Analyze', desc: 'Turn research, data, and processes into clear insights.', icon: ChartNoAxesCombined },
  { id: '03', title: 'Define', desc: 'Shape requirements, priorities, and measurable outcomes.', icon: ListChecks },
  { id: '04', title: 'Align', desc: 'Create shared clarity across business, design, and development.', icon: UsersRound },
  { id: '05', title: 'Deliver', desc: 'Track progress, resolve blockers, and move ideas into action.', icon: Rocket },
  { id: '06', title: 'Measure', desc: 'Evaluate results, capture learnings, and improve the next iteration.', icon: Gauge },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800 bg-bg-main">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-header mb-8">03 HOW_I_WORK</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            From an unclear problem to a shared, actionable next step.
          </h2>
          <p className="text-text-secondary max-w-md leading-relaxed">
            A flexible product process that connects business needs, user evidence, data, and technical delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="card p-6 lg:p-7 bg-white dark:bg-[#110f17]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-text-muted">{step.id}</span>
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={19} />
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
