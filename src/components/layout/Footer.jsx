import { AtSign, Globe2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigationLinks } from '../../data/navigationLinks'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline bg-surface">
      <div className="app-container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="text-lg font-bold text-ink">GDGoC LaunchPad</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink-muted">
            A starter foundation for student developers to explore events, technologies, and guidance.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-ink">Quick Links</h2>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
            {navigationLinks.map((link) => (
              <Link className="hover:text-google-blue" key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-ink">Social</h2>
          <div className="mt-3 flex gap-3 text-ink-muted">
            <a aria-label="GitHub placeholder" className="rounded-material p-2 hover:bg-surface-muted hover:text-ink" href="#social">
              <Globe2 size={20} aria-hidden="true" />
            </a>
            <a aria-label="LinkedIn placeholder" className="rounded-material p-2 hover:bg-surface-muted hover:text-ink" href="#social">
              <AtSign size={20} aria-hidden="true" />
            </a>
            <a aria-label="Email placeholder" className="rounded-material p-2 hover:bg-surface-muted hover:text-ink" href="#social">
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-outline py-4">
        <p className="app-container text-sm text-ink-muted">
          Copyright {year} GDGoC LaunchPad. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
