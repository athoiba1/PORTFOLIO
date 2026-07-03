import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
            Projects
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-14" style={{ color: 'var(--fg)' }}>
            Selected Work
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resumeData.projects.map((project) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="group p-6 md:p-7 rounded-2xl border transition-all duration-300"
              style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <motion.div custom={0} variants={fadeUp} className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--fg)' }}>
                    {project.name}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--subtle)' }}>
                    {project.period}
                  </p>
                </motion.div>
                {project.link && project.link !== '#' && (
                  <motion.a
                    custom={1}
                    variants={fadeUp}
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200"
                    style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#6366f1'
                      e.currentTarget.style.color = '#6366f1'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--muted)'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </motion.a>
                )}
              </div>

              <motion.p custom={2} variants={fadeUp} className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
                {project.description}
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-xs font-medium rounded-md border"
                    style={{ borderColor: 'var(--border)', color: 'var(--subtle)' }}
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              <div className="space-y-1.5">
                {project.highlights.map((highlight, j) => (
                  <motion.p key={j} custom={j + 4} variants={fadeUp} className="text-xs leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    {highlight}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
