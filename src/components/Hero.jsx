import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const marqueeText = "Product Discovery ★ Business Analysis ★ Data-Informed Decisions ★ Cross-Functional Delivery ★ Technical Communication ★ ".repeat(4);

  return (
    <section id="hero" className="h-[100dvh] w-full relative overflow-hidden flex flex-col bg-bg-main">
      
      {/* Decorative Stamp (Top Right) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[5%] top-[15%] opacity-40 pointer-events-none hidden lg:block z-0"
      >
        <svg viewBox="0 0 100 100" className="w-[160px] h-[160px]">
          <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none"/>
          <text fontSize="9.5" className="font-bold font-mono fill-[#EC4899]" letterSpacing="1.5">
            <textPath href="#curve" startOffset="0" textLength="251" lengthAdjust="spacing">
              OPEN TO INTERNSHIPS • OPEN TO INTERNSHIPS • 
            </textPath>
          </text>
          {/* Sparkle icon in center */}
          <path d="M 50 35 L 52 45 L 62 47 L 52 49 L 50 59 L 48 49 L 38 47 L 48 45 Z" className="fill-[#EC4899]" />
        </svg>
      </motion.div>
      
      {/* Pink Dot Decorative */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] bottom-[25%] w-8 h-8 rounded-full bg-[#EC4899] blur-sm hidden lg:block z-0"
      />

      {/* Main Content Area - taking full height minus navbar (approx) and marquee */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col flex-grow justify-center pb-12 pt-24 lg:pt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 md:gap-5"
        >
          {/* Status Pill */}
          <motion.div variants={itemVariants} className="flex justify-between items-start font-mono text-[12px] md:text-sm text-text-secondary w-full max-w-[320px] md:max-w-none mb-4 md:mb-0">
            <div className="flex items-start md:items-center gap-3">
              <div className="relative flex h-2 w-2 mt-1.5 md:mt-0 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9D85FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9D85FF]"></span>
              </div>
              <span className="leading-snug">Available for Internships <span className="hidden md:inline mx-3 opacity-30">|</span><br className="md:hidden" /> Bangkok, Thailand</span>
            </div>
          </motion.div>

          {/* Massive Typography */}
          <motion.div variants={itemVariants} className="flex flex-col leading-[0.85] uppercase tracking-tighter w-full lg:-ml-2 mt-2 md:mt-4 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -left-2 top-[10%] md:-left-6 md:top-[15%] lg:-left-12 lg:top-[20%] text-[#9D85FF] opacity-90 z-20 pointer-events-none hidden sm:block"
            >
              <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" />
              </svg>
            </motion.div>
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8rem] xl:text-[9rem] font-black text-gradient whitespace-nowrap relative z-10">THANCHICHA</h1>
            <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8rem] xl:text-[9rem] font-extrabold text-outline mt-1 whitespace-nowrap relative z-10">HEMPICHIT</h1>
          </motion.div>

          {/* Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-primary text-[#0B0A0F] font-bold text-xs md:text-sm shadow-glow">Product & Business</span>
            <span className="text-text-muted">×</span>
            {/* Fix Tailwind v4 opacity syntax: bg-[#EC4899]/10 border-[#EC4899]/30 */}
            <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-[#EC4899]/10 text-[#EC4899] font-bold text-xs md:text-sm border border-[#EC4899]/30">Data & Technology</span>
          </motion.div>

          {/* Description and CTA */}
          <motion.div variants={itemVariants} className="max-w-3xl lg:w-1/2 mt-6 relative flex flex-col items-start gap-8">
            <p className="text-[15px] sm:text-base lg:text-[19px] text-gray-400 dark:text-gray-300 leading-relaxed font-medium">
              I turn ambiguous business and user problems into structured requirements, data-informed decisions, and practical digital solutions—working comfortably across business and technical teams.
            </p>
            
            <a href="#projects" className="bg-gradient-to-r from-[#9D85FF] to-[#FFA3B5] text-[#0B0A0F] font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 shadow-glow inline-flex items-center justify-center gap-2 group text-sm md:text-base">
              Explore Case Studies 
              <motion.span 
                animate={{ y: [0, 4, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-1"
              >
                ↓
              </motion.span>
            </a>

            {/* Inline Scroll Indicator aligned right */}
            <div className="absolute bottom-0 md:-bottom-4 right-0 flex flex-col items-center text-text-muted font-mono text-[10px] gap-1 opacity-70">
              <span>SCROLL</span>
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                ↓
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Marquee Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-bg-main bg-opacity-50 py-2.5 flex z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap font-mono text-[10px] md:text-xs text-text-muted tracking-widest uppercase font-semibold"
        >
          {marqueeText}
        </motion.div>
      </div>
    </section>
  );
}
