import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-10">
      <div className="max-w-4xl">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.2)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#6366f1' }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#6366f1' }} />
            </span>
            Available for hire
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92]"
          style={{ color: 'var(--fg)' }}
        >
          {resumeData.name}
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-lg md:text-xl mt-5 max-w-xl" style={{ color: 'var(--muted)' }}>
          {resumeData.title}
        </motion.p>

        <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp} className="text-sm mt-3 max-w-lg leading-relaxed" style={{ color: 'var(--subtle)' }}>
          {resumeData.tagline}
        </motion.p>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mt-10">
          <a
            href={`mailto:${resumeData.email}`}
            className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: '#6366f1', color: '#fff' }}
          >
            Contact me
          </a>
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener"
            className="px-6 py-3 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105"
            style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
          >
            GitHub
          </a>
        </motion.div>

        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mt-16 text-xs" style={{ color: 'var(--subtle)' }}>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {resumeData.location}
          </span>
          <span style={{ color: 'var(--border)' }}>|</span>
          <a href={resumeData.linkedin} target="_blank" rel="noopener" className="hover:underline" style={{ color: 'var(--muted)' }}>LinkedIn</a>
        </motion.div>
      </div>
    </section>
  )
}
