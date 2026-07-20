import { ArrowRight } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import SectionHeading from '../../components/ui/SectionHeading'

function Landing() {
  return (
    <section className="app-container py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            description="A clean React foundation for GDGoC event discovery, learning paths, bookmarks, and future AI mentor features."
            eyebrow="React + Vite Starter"
            title="GDGoC LaunchPad"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/dashboard">
              View Dashboard
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/technologies" variant="secondary">
              Explore Technologies
            </Button>
          </div>
        </div>

        <Card>
          <div className="grid gap-4">
            <div className="h-3 rounded-full bg-google-blue" />
            <div className="h-3 rounded-full bg-google-red" />
            <div className="h-3 rounded-full bg-google-yellow" />
            <div className="h-3 rounded-full bg-google-green" />
          </div>
          <p className="mt-6 text-sm leading-6 text-ink-muted">
            Placeholder launch surface only. Product features and data integrations come later.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Landing
