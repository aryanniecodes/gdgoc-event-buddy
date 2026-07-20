import { Code2, Hammer, Network, Trophy, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../../../components/ui/Card'
import SectionHeading from '../../../components/ui/SectionHeading'

const gdgocHighlights = [
  {
    icon: Users,
    title: 'Community',
    description: 'Meet builders, designers, and curious peers who learn by creating together.',
  },
  {
    icon: Hammer,
    title: 'Workshops',
    description: 'Practice hands-on skills through guided sessions and campus learning circles.',
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Connect with students, mentors, speakers, and local developer communities.',
  },
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Turn ideas into prototypes through focused challenges and team collaboration.',
  },
  {
    icon: Code2,
    title: 'Google Technologies',
    description: 'Explore Firebase, Flutter, Gemini, Android, Google Cloud, and TensorFlow.',
  },
]

function WhatIsGDGoC() {
  return (
    <section className="app-container py-14 sm:py-18">
      <SectionHeading
        align="center"
        description="GDGoC brings campus developers together through practical learning, community support, and real projects."
        title="What is GDGoC?"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {gdgocHighlights.map((item) => {
          const Icon = item.icon

          return (
            <motion.div key={item.title} whileHover={{ y: -4 }}>
              <Card className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-material bg-blue-50 text-google-blue">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{item.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhatIsGDGoC
