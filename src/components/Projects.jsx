import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Code, FileText, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      title: "Cosaki",
      type: "SIT Innoventure",
      timeline: "2026 - Present",
      badge: "[Startup]",
      desc: "A peer-to-peer cosplay rental marketplace replacing fragmented, high-risk traditional rental networks with a secure, automated marketplace platform designed for long-term business viability.",
      problem: "The cosplay rental market was plagued by two critical frictions: renters (mostly budget-constrained students) faced massive financial barriers from traditional double-security deposits, while rental shops suffered from a broken third-party agent system causing overlapping bookings, unfulfilled orders, and zero financial accountability for damages.",
      analysis: "Through rigorous field research and social listening within the cosplay community, I validated active operational pain points on both supply and demand sides. I then designed a dual-structured revenue model: a centralized Cosaki Damage Protection Fee replacing expensive deposits, paired with an Advanced Filter Search engine that eliminates the need for unreliable sub-agents entirely.",
      solution: "Engineered a revenue model pivot introducing the Cosaki Insurance Fund for guaranteed shop compensation. Designed an e-KYC Verification pipeline for identity gatekeeping. Built an Advanced Filter Search using body measurements and fandom tags cross-referenced with live availability calendars. Currently in MVP Build & Delivery stage targeting a validated beachhead market.",
      code: `// Cosaki Damage Protection Revenue Model
const revenueFlow = {
  renter: 'damage_protection_fee',  // small, affordable
  shop: 'transaction_commission',   // % per successful rental
  fund: 'cosaki_insurance_fund',    // guaranteed shop payout
};

// Advanced filter: cross-ref body measurements + availability
const searchOutfits = (filters, availabilityCalendar) => 
  inventory.filter(item => 
    matchesMeasurements(item, filters.bodyMeasurements) && 
    !isBooked(item, availabilityCalendar, filters.dates)
  );`,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", caption: "Team pitch at SIT Innoventure" },
        { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", caption: "Business model canvas workshop" },
        { url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop", caption: "Co-founder strategy meeting" }
      ],
      tags: ["Business Analysis", "System Logic Design", "Revenue Engineering", "Market Validation", "Figma", "Draw.io"]
    },
    {
      title: "Coral Supply",
      type: "3-Month Internship (NIA Innovator Journey Program)",
      timeline: "June 2026 - Present",
      badge: "[Internship]",
      desc: "SmartProcure — a specialized B2B feature within the Pakarang Supply marketplace that eradicates food waste across hospitality clients and suppliers through automated demand forecasting.",
      problem: "Massive food waste is fundamentally driven by 'The Fear of Shortage.' Head Chefs consistently over-order by default to avoid running out of food during banquets, leading to severe leftover waste. Meanwhile, suppliers are blind to data, unable to predict upcoming demand, resulting in excessive cold-storage inventory costs and high spoilage rates.",
      analysis: "Through field research and process mapping of hotel kitchens, I identified the need for a 'Lazy-Input & Data-Driven' system. Chefs work in hot, fast-paced environments with zero time to type complex inventory logs. The solution required frictionless data extraction directly from their existing workflows.",
      solution: "Engineered a 'Zero Data Entry' portal that parses room occupancy files (PDF/Excel) with client-side PII sanitation. Developed a Smart Forecasting Algorithm with a Safety Buffer Slider, allowing chefs to adjust for walk-ins while automatically deducting leftover inventory. Built completely on Vanilla JavaScript (ES6+) and Local Storage for ultra-fast, zero-dependency kitchen workflows.",
      code: `// Smart Forecasting Algorithm (Vanilla JS)
function calcRecommendedOrder(guestCount, gramsPerHead, bufferRate, leftOverStock) {
  const base = (guestCount * gramsPerHead) / 1000;
  const buffered = base * (1 + bufferRate / 100);
  return Math.max(0, buffered - leftOverStock);
} `,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", caption: "Data Dashboard & Analytics" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", caption: "B2B Procurement Flow" },
        { url: "https://images.unsplash.com/photo-1507238692062-5a04ecddef8f?q=80&w=800&auto=format&fit=crop", caption: "System architecture mapping" }
      ],
      tags: ["Vanilla JavaScript (ES6+)", "HTML5", "CSS3", "Local Storage API", "Draw.io", "System Architecture"]
    },
    {
      title: "Faculty Room Booking",
      type: "SIT Hello World Hippo 2025",
      timeline: "2025",
      badge: "[1st Place]",
      desc: "A complete UX/UI and functional redesign of the faculty's room booking system, transformed into a high-performance, user-centric marketplace-style web application.",
      problem: "Tasked with rewriting and modernizing the faculty's outdated room booking flow under a strict 7-day deadline, balancing technical feasibility with a seamless user experience for a multidisciplinary team.",
      analysis: "Instead of just translating visuals, I acted as a bridge between the design blueprint and backend API functionalities. I focused heavily on building reusable room discovery layouts and availability status interfaces to optimize performance for smooth user navigation.",
      solution: "Partnered with a frontend engineer to translate high-fidelity Figma designs into pixel-perfect responsive structures using React and Tailwind CSS. Collaborated with backend teammates to ensure dynamic rendering of real-time booking slots. Won 1st Place & Popular Vote.",
      code: `// Component Optimization: Reusable UI
const RoomCard = ({ room, isAvailable }) => (
  <div className={\`p-4 rounded-xl \${
    isAvailable ? 'bg-green-50' : 'bg-red-50'
  }\`}>
    <h4 className="font-bold">{room.name}</h4>
    <StatusBadge status={room.status} />
  </div>
);`,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", caption: "Hackathon pitching day" },
        { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", caption: "Team brainstorming" },
        { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop", caption: "Figma to Code execution" }
      ],
      tags: ["React", "Tailwind CSS", "Booking System Architecture", "UI/UX Alignment", "Rapid Prototyping"]
    },
    {
      title: "Paw Guardian",
      type: "NTU Hackathon 2026",
      timeline: "2026",
      badge: "[Honorable Mention]",
      desc: "An empathetic IoT hardware and software ecosystem designed to assist stroke patients in physical rehabilitation through gamified therapeutic exercises.",
      problem: "Tasked with breaking down the physical and cognitive limitations of recovering stroke patients into actionable hardware and software requirements to create an engaging, autonomous rehabilitation process.",
      analysis: "Researched and applied Inclusive Design principles to map out the application's interface. Simplified user flows, optimized typography, and designed large, high-contrast, low-cognitive-load touch areas to ensure accessibility for patients with partial paralysis.",
      solution: "Leveraged Unity to build a 2D pixel-art gamified environment, utilizing C# scripting to wire core menu logic and real-time movement feedback tracking. Delivered a high-impact technical pitch focusing on social impact and healthcare scalability, winning Honorable Mention.",
      code: `// Game & Logic Prototyping (Unity & C#)
public void UpdateTherapyProgress(float movementData) {
  if (movementData >= targetThreshold) {
    playerScore += 10;
    TriggerPositiveFeedback();
    // Inclusive UX: Large, high-contrast visual cues
  }
}`,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", caption: "IoT device testing" },
        { url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop", caption: "Patient rehabilitation demo" },
        { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop", caption: "Data processing metrics" }
      ],
      tags: ["Inclusive Design (UX/UI)", "IoT Ecosystem Mapping", "Technical Pitching", "Unity & C# Prototyping"]
    },
    {
      title: "Makro Pro AI Food Preservation",
      type: "CP Axtra Mile Hackathon 2025",
      timeline: "2025",
      badge: "[Top 10 Finalists]",
      desc: "A strategic, AI-driven food preservation feature conceptualized for integration into the Makro Pro wholesale application to minimize food spoilage and optimize inventory costs for B2B commercial buyers.",
      problem: "Identifying and validating sustainability features within the wholesale grocery supply chain to design a data-driven system that analyzes purchasing patterns and suggests optimal food preservation actions.",
      analysis: "Led a cross-functional team to execute on-site user interviews and ethnographic research directly at Makro wholesale centers. Mapped out end-to-end Customer Journeys of commercial buyers to validate whether conceptualized AI features solved real-world inventory risks.",
      solution: "Translated raw user research into a structured business case with comprehensive financial plans and ROI models. Proved how minimizing food spoilage correlates with increased profit margins, securing Top 10 Finalists.",
      code: `# AI Food Preservation - ROI Model
def calc_roi(baseline_waste_kg, reduction_rate, cost_per_kg):
  waste_saved = baseline_waste_kg * reduction_rate
  cost_saved = waste_saved * cost_per_kg
  # Validated via on-site Makro field research
  return {
    'waste_saved_kg': waste_saved,
    'annual_cost_saving': cost_saved
  }`,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", caption: "Field research at Makro" },
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", caption: "Business case presentation" },
        { url: "https://images.unsplash.com/photo-1507238692062-5a04ecddef8f?q=80&w=800&auto=format&fit=crop", caption: "ROI validation modeling" }
      ],
      tags: ["Business Case Validation", "Customer Journey Mapping", "Financial & ROI Modeling", "Data Discovery", "Cross-Functional Leadership"]
    },
    {
      title: "SIT Hackathon — Sun-Sola",
      type: "SIT Hackathon 2025",
      timeline: "2025",
      badge: "[Hackathon]",
      desc: "A functional, end-to-end web marketplace prototype developed from scratch under extreme time and resource constraints to validate a rapid product launch concept.",
      problem: "Tasked with building and deploying a working web marketplace prototype from scratch within a strict 96-hour absolute deadline under extreme time and resource constraints.",
      analysis: "While initially serving as a frontend specialist, unexpected integration blocks required me to step up and rapidly bridge data pipelines between the user interface and the database layer to save the project timeline.",
      solution: "Proactively self-taught and applied Node.js backend concepts and MySQL database schemas on the fly. Managed continuous integration of full-stack elements, successfully deploying a completely working prototype with live dynamic data rendering before the deadline.",
      code: `// 96-hr rapid full-stack integration (self-taught)
// Frontend -> Backend bridge built on-the-fly
app.get('/api/listings', async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM listings WHERE active = 1 ORDER BY created_at DESC'
  );
  res.json(rows);
});`,
      links: [
        { label: "View Source Code", url: "#", icon: "github" },
        { label: "Technical Documentation", url: "#", icon: "doc" }
      ],
      gallery: [
        { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", caption: "96-hour marathon coding" },
        { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", caption: "API integration setup" },
        { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", caption: "Demo deployment" }
      ],
      tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Agile Delivery", "Full-Stack Integration"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.timeline.includes(filter);
  });

  return (
    <section id="projects" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800 overflow-hidden bg-bg-main">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pr-4 gap-6">
          <div className="section-header">05 CASE_STUDIES</div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {['All', '2026', '2025'].map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`font-mono text-[11px] md:text-sm tracking-widest uppercase px-4 py-1.5 md:py-2 rounded-full transition-colors border ${filter === f ? 'bg-text-primary text-bg-main border-text-primary dark:bg-white dark:text-black dark:border-white font-bold' : 'bg-transparent text-text-muted border-gray-200 dark:border-gray-800 hover:text-text-primary hover:border-gray-400 dark:hover:border-gray-600'}`}
              >
                {f}
              </button>
            ))}
            <div className="font-mono text-text-muted text-[11px] md:text-sm tracking-widest ml-4 hidden md:block">{filteredProjects.length} ITEMS</div>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar px-4 -mx-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.title}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[420px] md:min-w-[480px] max-w-[480px] h-[600px] card flex flex-col snap-center bg-white dark:bg-[#110f17] group relative transition-transform duration-300 shadow-sm cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute -top-3 right-8 px-4 py-1 rounded-md bg-[#fce7f3] dark:bg-[#831843] text-[#be185d] dark:text-[#fbcfe8] font-mono text-[13px] font-bold border border-[#fbcfe8] dark:border-[#be185d] z-10 shadow-sm flex items-center gap-2">
                <span className="text-[#ec4899]">•</span>{project.badge}
              </div>

              {/* Graphic/Code Top Half */}
              <div className="h-64 rounded-t-2xl border-b border-gray-100 dark:border-gray-800 flex overflow-hidden">
                {/* Wireframe Left */}
                <div className="w-[35%] bg-[#f8fafc] dark:bg-[#0f172a] flex flex-col items-center justify-center p-4 border-r border-gray-100 dark:border-gray-800 relative group-hover:bg-[#f1f5f9] transition-colors duration-500">
                  <div className="w-full h-[85%] bg-white dark:bg-[#1e293b] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
                    <div className="h-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center px-2.5 gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fca5a5]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fcd34d]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]"></div>
                    </div>
                    <div className="p-2 flex gap-2 h-full">
                      <div className="flex-1 border border-gray-100 dark:border-gray-600 rounded flex flex-col p-1.5 gap-2">
                        <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-full h-8 bg-[#9D85FF]/20 rounded-md"></div>
                        <div className="w-1/2 h-1 bg-gray-100 dark:bg-gray-700 rounded-full mt-auto"></div>
                      </div>
                      <div className="flex-1 border border-gray-100 dark:border-gray-600 rounded flex flex-col p-1.5 gap-2">
                        <div className="w-1/2 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                        <div className="w-5/6 h-1 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-2 flex gap-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="w-6 h-1.5 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-[#9D85FF]/50 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>
                
                {/* Code Right */}
                <div className="w-[65%] bg-[#fdf2f8] dark:bg-[#4c0519]/40 p-5 overflow-hidden relative">
                  <pre className="font-mono text-[10px] md:text-[11px] text-[#9d174d] dark:text-[#f472b6] whitespace-pre-wrap leading-[1.6]">
                    {project.code}
                  </pre>
                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="px-4 py-2 bg-white dark:bg-[#110f17] rounded-full shadow-lg font-mono text-xs font-bold text-[#be185d] dark:text-[#f472b6] flex items-center gap-2">
                      VIEW DEEP DIVE <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Bottom Half */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start font-mono text-text-muted text-[11px] font-semibold mb-4 uppercase tracking-wider">
                  <span>{project.type}</span>
                  <span>{project.timeline}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1.5 bg-[#f1f5f9] dark:bg-gray-800/60 text-[#64748b] dark:text-gray-400 text-[10px] md:text-[11px] font-mono rounded-md font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
          
          {/* End of projects indicator */}
          <div className="min-w-[250px] flex flex-col items-center justify-center snap-center px-8 text-center group">
            <div className="font-mono text-sm text-text-muted mb-4 tracking-widest">// END_OF_PROJECTS</div>
            <a href="#timeline" className="text-xl font-bold text-[#6366F1] flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
              Continue to Timeline <ArrowRight size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-text-muted text-[10px] font-semibold tracking-widest mt-4 justify-center md:justify-end opacity-50 uppercase">
          SCROLL TO BROWSE <ArrowRight size={14} />
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#110f17] rounded-2xl shadow-2xl overflow-y-auto hide-scrollbar border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
              >
                <X size={24} className="text-gray-500" />
              </button>

              <div className="p-8 md:p-12 lg:p-16">
                {/* Header */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fce7f3] dark:bg-[#831843]/30 text-[#be185d] dark:text-[#fbcfe8] font-mono text-sm font-bold border border-[#fbcfe8] dark:border-[#be185d]/30 mb-8">
                  <span className="text-[#ec4899]">•</span>{selectedProject.badge}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tight">{selectedProject.title}</h2>
                <div className="font-mono text-text-secondary text-sm md:text-base tracking-wider mb-14 uppercase">
                  {selectedProject.type} — <span className="opacity-70">{selectedProject.timeline}</span>
                </div>

                {/* Deep Dive */}
                <div className="font-mono text-text-muted text-xs font-semibold tracking-widest uppercase mb-8 flex items-center gap-4">
                  // SYSTEM_DEEP_DIVE
                </div>

                <div className="space-y-12 mb-16">
                  {/* Problem */}
                  <div className="flex gap-6 md:gap-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#c7d2fe] dark:border-[#6366F1]/30 bg-[#e0e7ff]/30 dark:bg-[#6366F1]/10 text-[#6366F1] font-mono font-bold text-lg flex items-center justify-center shrink-0">01</div>
                    <div>
                      <h4 className="text-[#6366F1] font-mono text-xs font-bold tracking-widest uppercase mb-3 pt-1 md:pt-2">PROBLEM</h4>
                      <p className="text-text-secondary leading-relaxed text-base">{selectedProject.problem}</p>
                    </div>
                  </div>
                  
                  {/* Analysis */}
                  <div className="flex gap-6 md:gap-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#c7d2fe] dark:border-[#6366F1]/30 bg-[#e0e7ff]/30 dark:bg-[#6366F1]/10 text-[#6366F1] font-mono font-bold text-lg flex items-center justify-center shrink-0">02</div>
                    <div>
                      <h4 className="text-[#6366F1] font-mono text-xs font-bold tracking-widest uppercase mb-3 pt-1 md:pt-2">ANALYSIS</h4>
                      <p className="text-text-secondary leading-relaxed text-base">{selectedProject.analysis}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-6 md:gap-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#c7d2fe] dark:border-[#6366F1]/30 bg-[#e0e7ff]/30 dark:bg-[#6366F1]/10 text-[#6366F1] font-mono font-bold text-lg flex items-center justify-center shrink-0">03</div>
                    <div>
                      <h4 className="text-[#6366F1] font-mono text-xs font-bold tracking-widest uppercase mb-3 pt-1 md:pt-2">SOLUTION</h4>
                      <p className="text-text-secondary leading-relaxed text-base">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Code block */}
                <div className="font-mono text-text-muted text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-4 mt-20">
                  // SYSTEM_LOGIC
                </div>
                
                <div className="w-full bg-[#f8fafc] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 mb-10 overflow-x-auto shadow-sm">
                  <pre className="font-mono text-[13px] md:text-sm text-[#475569] dark:text-[#94a3b8] whitespace-pre-wrap leading-[1.7]">
                    {selectedProject.code}
                  </pre>
                </div>

                {/* Related Links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-16">
                    {selectedProject.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg text-[13px] font-mono font-semibold text-text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        {link.icon === 'github' ? <Code size={16} /> : <FileText size={16} />}
                        {link.label} <ExternalLink size={14} className="ml-1 opacity-50" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Activity Gallery */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <>
                    <div className="font-mono text-text-muted text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-4">
                      // ACTIVITY_GALLERY
                    </div>
                    {/* Custom scrollbar class or standard Tailwind scroll-snap */}
                    <div className="flex overflow-x-auto gap-4 pb-4 mb-12 snap-x rounded-xl" style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}>
                      {selectedProject.gallery.map((img, i) => (
                        <div key={i} className="min-w-[280px] md:min-w-[320px] h-48 md:h-56 relative rounded-xl overflow-hidden snap-center group border border-gray-200 dark:border-gray-800 shrink-0 bg-gray-100 dark:bg-gray-900">
                          <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono font-medium truncate">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Tech Stack */}
                <div className="font-mono text-text-muted text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-4">
                  // TECH_STACK
                </div>

                <div className="flex flex-wrap gap-3 pb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-[#f1f5f9] dark:bg-gray-800 text-[#64748b] dark:text-gray-300 text-xs font-mono rounded-lg font-medium tracking-wide border border-gray-200 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
