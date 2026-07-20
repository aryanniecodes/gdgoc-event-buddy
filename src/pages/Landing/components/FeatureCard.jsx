import { motion } from 'framer-motion'
import Card from '../../../components/ui/Card'

function FeatureCard({ icon: Icon, title, description, tone = 'bg-blue-50 text-google-blue' }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Card className="h-full">
        <div className={`mb-5 grid h-12 w-12 place-items-center rounded-material ${tone}`}>
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-muted">{description}</p>
      </Card>
    </motion.div>
  )
}

export default FeatureCard
