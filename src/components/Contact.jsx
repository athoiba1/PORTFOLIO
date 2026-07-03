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

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="absolute inset-0" style={{ background: 'rgba(8,8,15,0.6)' }} />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#818cf8' }}>
            Contact
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--fg)' }}>
            Let's talk
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-sm max-w-md mb-10" style={{ color: 'var(--muted)' }}>
            Currently open to opportunities in systems engineering, cloud infrastructure, and backend development.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <motion.a
            custom={0}
            variants={fadeUp}
            href={`mailto:${resumeData.email}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: '#6366f1', color: '#fff' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email
          </motion.a>
          <motion.a
            custom={1}
            variants={fadeUp}
            href={resumeData.github}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105"
            style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
          >
            GitHub
          </motion.a>
          <motion.a
            custom={2}
            variants={fadeUp}
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105"
            style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p custom={0} variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#818cf8' }}>
            Certifications
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i + 1}
                variants={fadeUp}
                className="p-4 rounded-xl border transition-colors duration-200"
                style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{cert.name}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--subtle)' }}>{cert.issuer} · {cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-xs"
          style={{ color: 'var(--subtle)' }}
        >
          © {new Date().getFullYear()} Nambram Athoiba Khuman
        </motion.p>
      </div>
    </section>
  )
}
