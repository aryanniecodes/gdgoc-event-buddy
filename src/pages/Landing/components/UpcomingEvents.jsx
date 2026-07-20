import { CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import SectionHeading from '../../../components/ui/SectionHeading'

const events = [
  {
    title: 'Flutter Workshop',
    date: 'August 12, 2026',
    difficulty: 'Beginner',
    description: 'Design and build your first responsive Flutter interface with guided exercises.',
  },
  {
    title: 'Firebase Bootcamp',
    date: 'August 19, 2026',
    difficulty: 'Intermediate',
    description: 'Learn how Firebase can support app prototypes with hosted backend services.',
  },
  {
    title: 'Gemini AI Workshop',
    date: 'August 26, 2026',
    difficulty: 'Beginner',
    description: 'Explore AI product thinking and prepare for a future Gemini-powered mentor flow.',
  },
]

function UpcomingEvents() {
  return (
    <section className="bg-surface py-14 sm:py-18">
      <div className="app-container">
        <SectionHeading
          align="center"
          description="Static sample events for the landing page. Registration logic will come later."
          eyebrow="Events"
          title="Upcoming events"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <motion.div key={event.title} whileHover={{ y: -4 }}>
              <Card className="flex h-full flex-col">
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-google-blue">
                  <CalendarDays size={18} aria-hidden="true" />
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-ink">{event.title}</h3>
                <p className="mt-2 w-fit rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-ink-muted">
                  {event.difficulty}
                </p>
                <p className="mt-4 flex-1 text-sm leading-6 text-ink-muted">{event.description}</p>
                <Button className="mt-6 w-fit" variant="secondary">
                  Register
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
