import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="absolute inset-0" style={{ background: 'rgba(8,8,15,0.5)' }} />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
            Experience
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-14" style={{ color: 'var(--fg)' }}>
            Work
          </motion.h2>
        </motion.div>

        {resumeData.experience.map((exp) => (
          <motion.div
            key={exp.company}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="pb-14 mb-14"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16">
              <motion.div custom={0} variants={fadeUp}>
                <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{exp.period}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--subtle)' }}>{exp.location}</p>
              </motion.div>
              <div>
                <motion.p custom={1} variants={fadeUp} className="text-xl font-semibold mb-1" style={{ color: 'var(--fg)' }}>
                  {exp.role}
                </motion.p>
                <motion.p custom={2} variants={fadeUp} className="text-sm mb-5" style={{ color: '#818cf8' }}>
                  {exp.company}
                </motion.p>
                <div className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <motion.p key={j} custom={j + 3} variants={fadeUp} className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {bullet}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {resumeData.publications.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-6 md:p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
          >
            <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
              Publication
            </motion.p>
            {resumeData.publications.map((pub, i) => (
              <div key={i}>
                <motion.p custom={1} variants={fadeUp} className="text-base font-semibold leading-snug" style={{ color: 'var(--fg)' }}>
                  {pub.title}
                </motion.p>
                <motion.p custom={2} variants={fadeUp} className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                  {pub.authors}
                </motion.p>
                <motion.p custom={3} variants={fadeUp} className="text-xs mt-2" style={{ color: 'var(--subtle)' }}>
                  {pub.venue} · {pub.year}
                </motion.p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
