import { motion } from 'framer-motion'
import Card from '../../../components/ui/Card'
import SectionHeading from '../../../components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Aarav Mehta',
    course: 'B.Tech Computer Science',
    testimonial: 'LaunchPad makes the GDGoC ecosystem feel approachable. I can quickly see what to learn next.',
    color: 'bg-google-blue',
  },
  {
    name: 'Nisha Rao',
    course: 'BCA Data Science',
    testimonial: 'The event previews and technology cards are exactly the kind of structure I want before joining workshops.',
    color: 'bg-google-red',
  },
  {
    name: 'Kabir Sen',
    course: 'B.Tech Information Technology',
    testimonial: 'It feels like a clear starting point for students who want to build with Google technologies.',
    color: 'bg-google-green',
  },
]

function Testimonials() {
  return (
    <section className="app-container py-14 sm:py-18">
      <SectionHeading
        align="center"
        description="Fictional student voices showing the intended tone for future community stories."
        eyebrow="Testimonials"
        title="Built for student momentum"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((student) => (
          <motion.div key={student.name} whileHover={{ y: -4, scale: 1.01 }}>
            <Card className="h-full">
              <div className="flex items-center gap-4">
                <div className={`grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white ${student.color}`}>
                  {student.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-bold text-ink">{student.name}</h3>
                  <p className="text-sm text-ink-muted">{student.course}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-ink-muted">"{student.testimonial}"</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
