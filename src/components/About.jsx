import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="absolute inset-0" style={{ background: 'rgba(8,8,15,0.7)', backdropFilter: 'blur(2px)' }} />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
            About
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: 'var(--fg)' }}>
            Background
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-base md:text-lg leading-relaxed max-w-3xl mb-16" style={{ color: 'var(--muted)' }}>
            {resumeData.summary}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: 'Education',
              lines: [
                { text: resumeData.education[0].degree, bold: true },
                { text: resumeData.education[0].school },
                { text: `${resumeData.education[0].period} · GPA ${resumeData.education[0].gpa}`, small: true },
              ],
            },
            {
              label: 'Focus',
              lines: resumeData.education[0].details.split(', ').slice(0, 5).map(d => ({ text: d })),
            },
            {
              label: 'Published',
              lines: [
                { text: resumeData.publications[0].title, bold: true },
                { text: resumeData.publications[0].venue },
                { text: `${resumeData.publications[0].year}`, small: true },
              ],
            },
          ].map((col) => (
            <motion.div
              key={col.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="p-6 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
            >
              <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
                {col.label}
              </motion.p>
              <div className="space-y-2">
                {col.lines.map((line, li) => (
                  <motion.p
                    key={li}
                    custom={li + 1}
                    variants={fadeUp}
                    className={line.bold ? 'text-sm font-semibold' : line.small ? 'text-xs' : 'text-sm'}
                    style={{ color: line.bold ? 'var(--fg)' : line.small ? 'var(--subtle)' : 'var(--muted)' }}
                  >
                    {line.text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
