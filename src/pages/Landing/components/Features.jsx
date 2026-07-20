import { Bookmark, Bot, CalendarDays, Code2, Route } from 'lucide-react'
import SectionHeading from '../../../components/ui/SectionHeading'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: Bot,
    title: 'AI Mentor',
    description: 'A reserved space for future AI-powered guidance, learning support, and project direction.',
    tone: 'bg-blue-50 text-google-blue',
  },
  {
    icon: Code2,
    title: 'Google Technologies',
    description: 'Discover core Google developer tools through beginner-friendly topic previews.',
    tone: 'bg-red-50 text-google-red',
  },
  {
    icon: CalendarDays,
    title: 'Community Events',
    description: 'Find workshops, bootcamps, and campus sessions designed for hands-on participation.',
    tone: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Route,
    title: 'Learning Paths',
    description: 'Follow structured pathways from first concepts to confident project building.',
    tone: 'bg-green-50 text-google-green',
  },
  {
    icon: Bookmark,
    title: 'Bookmarks',
    description: 'Save useful technologies, events, and learning resources for quick access later.',
    tone: 'bg-slate-100 text-ink-muted',
  },
]

function Features() {
  return (
    <section className="bg-surface py-14 sm:py-18">
      <div className="app-container">
        <SectionHeading
          align="center"
          description="A focused set of surfaces for learning, exploration, and community participation."
          eyebrow="Features"
          title="Everything starts with a clear path"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
