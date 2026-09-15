import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, UserRound, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portrait, studioImage } from '../content/visuals';
import { WORK_ROLES } from '../utils/workExplorer';

function PortraitFrame() {
  const curveId = useId();
  return <figure className="portrait-frame">
    <div className="portrait-placeholder">
      {portrait.imageUrl ? <img src={portrait.imageUrl} alt={portrait.alt} /> : <>
        <div className="portrait-rings" aria-hidden="true"><span /><span /><span /></div>
        <UserRound size={100} strokeWidth={1} aria-hidden="true" />
        <div className="portrait-placeholder-label"><strong>Your photo here</strong><span>ใส่ภาพถ่ายของคุณตรงนี้</span></div>
      </>}
    </div>
    <div className="availability-stamp" aria-label="Open to internships">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="56" fill="var(--bg-card)" stroke="var(--primary)" />
        <circle cx="60" cy="60" r="42" fill="none" stroke="var(--primary)" strokeDasharray="2 4" opacity=".55" />
        <path id={curveId} d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" fill="none" />
        <text fontSize="8.8" fontWeight="700" letterSpacing="1.1" fill="var(--text-primary)"><textPath href={`#${curveId}`} textLength="282" lengthAdjust="spacing">OPEN TO INTERNSHIPS · BANGKOK · </textPath></text>
        <path d="M60 40l4 16 16 4-16 4-4 16-4-16-16-4 16-4Z" fill="var(--primary)" />
      </svg>
    </div>
    <figcaption>{portrait.imageUrl ? 'Thanchicha Hempichit' : 'Portrait placeholder · replace with your real photo'}</figcaption>
  </figure>;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return <section id="hero" className="portfolio-hero">
    <div className="hero-layout">
      <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
        <p className="hero-status"><span aria-hidden="true" /> Available for internships <span className="hero-location">Bangkok, Thailand</span></p>
        <div className="hero-intro"><Sparkles size={20} aria-hidden="true" /> Business curiosity. Technical perspective.</div>
        <h1 className="hero-name"><span>THANCHICHA</span><span>HEMPICHIT</span></h1>
        <div className="hero-pills"><span>Product &amp; Business</span><span>Data &amp; Technology</span></div>
        <p className="hero-description">Digital Service Innovation student connecting business needs, users, data, and technology. I turn research into requirements, prototypes, and practical product decisions.</p>
        <div className="hero-interests"><p>Interested in</p><div>{WORK_ROLES.map((role) => <Link key={role.slug} to={`/work?role=${role.slug}`}>{role.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div></div>
        <a href="#projects" className="hero-cta">Explore my work <ArrowDown size={18} aria-hidden="true" /></a>
      </motion.div>
      <motion.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .1 }}><PortraitFrame /></motion.div>
    </div>
    <div className="hero-work-preview">
      <figure className="studio-preview"><img src={studioImage} alt="AI concept image of a laptop and phone with illustrative product dashboards" fetchPriority="high" /><figcaption>AI concept image · temporary visual</figcaption></figure>
      <div className="hero-work-intro"><p>From learning to building.</p><h2>Startup discovery.<br />Real team projects.<br />Hands-on experiments.</h2></div>
      <div className="hero-project-links"><Link to="/work/cosaki"><span>Startup</span><strong>Cosaki</strong><ArrowUpRight size={22} aria-hidden="true" /></Link><Link to="/work/smartprocure"><span>Internship</span><strong>SmartProcure</strong><ArrowUpRight size={22} aria-hidden="true" /></Link><Link to="/work/hello-world"><span>Hackathon · 1st Place</span><strong>Hello World HIPPO</strong><ArrowUpRight size={22} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
