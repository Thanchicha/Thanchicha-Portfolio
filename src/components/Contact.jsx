import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="contact" className="pt-24 pb-8 px-6 border-t border-gray-200 dark:border-gray-800 relative bg-bg-main overflow-hidden">
      
      {/* Ambient Animated Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#6366F1] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex items-center gap-4 mb-32 md:mb-40">
          <div className="font-mono text-[#6366F1] font-bold text-sm tracking-widest uppercase shrink-0">
            // 06 <span className="text-text-muted font-normal ml-2">CONTACT</span>
          </div>
          <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800"></div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-[14vw] md:text-[10rem] lg:text-[12rem] font-black text-[#0B0A0F] dark:text-white hover:text-[#6366F1] dark:hover:text-[#9D85FF] transition-colors duration-300 leading-[0.85] tracking-normal md:tracking-tight mb-4 uppercase cursor-default"
          >
            Let's Build
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium mb-16 md:mb-24"
          >
            something innovative together!
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-center gap-4 md:gap-6 mb-20 md:mb-28 w-full max-w-[1200px]"
          >
            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="/Thanchicha_Hempichit_Resume.pdf" download className="px-6 py-4 md:px-8 bg-[#6366F1] hover:bg-[#4f46e5] text-white rounded-lg font-mono font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#6366F1]/25 w-full sm:w-auto whitespace-nowrap">
              <Download size={20} />
              Download Resume (PDF)
            </motion.a>
            
            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="mailto:thanchicha.hemp@gmail.com" className="px-6 py-4 md:px-8 bg-white/50 dark:bg-[#110f17]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-[#6366F1] dark:hover:border-[#6366F1] hover:text-[#6366F1] text-text-primary rounded-lg font-mono font-medium text-sm md:text-base flex items-center justify-center gap-3 transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap">
              <Mail size={20} />
              Send an Email
            </motion.a>
            
            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="tel:+66909789503" className="px-6 py-4 md:px-8 bg-white/50 dark:bg-[#110f17]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-[#6366F1] dark:hover:border-[#6366F1] hover:text-[#6366F1] text-text-primary rounded-lg font-mono font-medium text-sm md:text-base flex items-center justify-center gap-3 transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap">
              <Phone size={20} />
              (+66) 90-978-9503
            </motion.a>
            
            <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="https://github.com/Thanchicha" target="_blank" rel="noreferrer" className="px-6 py-4 md:px-8 bg-white/50 dark:bg-[#110f17]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-[#6366F1] dark:hover:border-[#6366F1] hover:text-[#6366F1] text-text-primary rounded-lg font-mono font-medium text-sm md:text-base flex items-center justify-center gap-3 transition-colors shadow-sm w-full sm:w-auto whitespace-nowrap">
              <GithubIcon size={20} />
              GitHub <ArrowUpRight size={18} className="text-text-muted ml-1" />
            </motion.a>
          </motion.div>
          
          {/* Small Metadata */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400 mb-16 md:mb-24"
          >
            <a href="https://linkedin.com/in/thanchicha" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#6366F1] transition-colors group">
              <LinkedinIcon size={16} className="group-hover:scale-125 transition-transform" /> LinkedIn
            </a>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8b5cf6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8b5cf6]"></span>
              </span>
              Bangkok, Thailand
            </div>
            <a href="mailto:thanchicha.hemp@gmail.com" className="hover:text-[#6366F1] transition-colors">
              thanchicha.hemp@gmail.com
            </a>
            <a href="tel:+66909789503" className="hover:text-[#6366F1] transition-colors hidden sm:inline-block">
              (+66) 90-978-9503
            </a>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
