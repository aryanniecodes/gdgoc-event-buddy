import { Bot, BrainCircuit, Cloud, Database, MonitorSmartphone, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import SectionHeading from '../../../components/ui/SectionHeading'

const technologies = [
  {
    icon: Database,
    name: 'Firebase',
    description: 'Build app backends with authentication, databases, hosting, and cloud services.',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: MonitorSmartphone,
    name: 'Flutter',
    description: 'Create beautiful cross-platform apps from a single expressive codebase.',
    color: 'bg-blue-50 text-google-blue',
  },
  {
    icon: Bot,
    name: 'Gemini',
    description: 'Explore multimodal AI concepts and future mentor-style developer workflows.',
    color: 'bg-slate-100 text-ink-muted',
  },
  {
    icon: Smartphone,
    name: 'Android',
    description: 'Learn mobile fundamentals and build polished experiences for Android devices.',
    color: 'bg-green-50 text-google-green',
  },
  {
    icon: Cloud,
    name: 'Google Cloud',
    description: 'Understand scalable infrastructure, APIs, deployment, and cloud-native tools.',
    color: 'bg-red-50 text-google-red',
  },
  {
    icon: BrainCircuit,
    name: 'TensorFlow',
    description: 'Start exploring machine learning workflows, models, and applied AI projects.',
    color: 'bg-blue-50 text-google-blue',
  },
]

function TechnologyPreview() {
  return (
    <section className="app-container py-14 sm:py-18">
      <SectionHeading
        description="Preview the Google ecosystem topics that future learning paths can expand into."
        eyebrow="Technologies"
        title="Explore what you can build with"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
          const Icon = technology.icon

          return (
            <motion.div key={technology.name} whileHover={{ y: -4 }}>
              <Card className="flex h-full flex-col">
                <div className={`grid h-14 w-14 place-items-center rounded-material ${technology.color}`}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{technology.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">{technology.description}</p>
                <Button className="mt-6 w-fit" to="/technologies" variant="secondary">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default TechnologyPreview
