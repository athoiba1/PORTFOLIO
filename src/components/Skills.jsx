import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '../data/resume'

const categories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'cloudDevOps', label: 'Cloud & DevOps' },
  { key: 'csFundamentals', label: 'Fundamentals' },
  { key: 'systemsSecurity', label: 'Security' },
  { key: 'dataDesign', label: 'Data & Design' },
  { key: 'leadership', label: 'Leadership' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const skills = resumeData.skills[categories[active].key] || []

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
            Skills
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-10" style={{ color: 'var(--fg)' }}>
            Expertise
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              onClick={() => setActive(i)}
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
              style={{
                background: active === i ? '#6366f1' : 'rgba(255,255,255,0.04)',
                color: active === i ? '#fff' : 'var(--muted)',
                border: `1px solid ${active === i ? '#6366f1' : 'var(--border)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="px-4 py-2 text-sm rounded-lg border"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'rgba(255,255,255,0.02)' }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
