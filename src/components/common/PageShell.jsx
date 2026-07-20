import { motion } from 'framer-motion'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

function PageShell({ eyebrow, title, description, children }) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="app-container py-12 sm:py-16"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <SectionHeading description={description} eyebrow={eyebrow} title={title} />
      <Card className="mt-8">
        {children || <p className="text-ink-muted">This page is ready for the next implementation step.</p>}
      </Card>
    </motion.section>
  )
}

export default PageShell
