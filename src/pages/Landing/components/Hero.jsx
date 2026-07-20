import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../../../components/ui/Button'

function Hero() {
  return (
    <section className="overflow-hidden bg-surface">
      <div className="app-container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-google-blue">
            <Sparkles size={16} aria-hidden="true" />
            GDGoC LaunchPad
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Build. Learn. Connect.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            Your AI-powered guide to Google Developer Groups On Campus.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full sm:w-auto" to="/technologies">
                Explore Technologies
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full sm:w-auto" to="/login" variant="secondary">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.12, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="rounded-[2rem] border border-outline bg-surface p-5 shadow-soft-lg">
            <div className="rounded-[1.5rem] bg-surface-muted p-5">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 rounded-material bg-surface p-4 shadow-soft">
                  <span className="h-10 w-10 rounded-full bg-google-blue" />
                  <div className="flex-1">
                    <div className="h-3 w-3/4 rounded-full bg-outline" />
                    <div className="mt-2 h-3 w-1/2 rounded-full bg-outline" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-material bg-surface p-4 shadow-soft">
                    <div className="h-16 rounded-material bg-google-red/15" />
                    <div className="mt-4 h-3 rounded-full bg-outline" />
                  </div>
                  <div className="rounded-material bg-surface p-4 shadow-soft">
                    <div className="h-16 rounded-material bg-google-yellow/25" />
                    <div className="mt-4 h-3 rounded-full bg-outline" />
                  </div>
                </div>
                <div className="rounded-material bg-surface p-4 shadow-soft">
                  <div className="h-20 rounded-material bg-google-green/15" />
                  <div className="mt-4 h-3 w-2/3 rounded-full bg-outline" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
