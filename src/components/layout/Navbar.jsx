import { Menu, Rocket, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../../data/navigationLinks'
import Button from '../ui/Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'rounded-material px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'bg-blue-50 text-google-blue' : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-outline bg-surface/95 backdrop-blur">
      <nav className="app-container flex min-h-16 items-center justify-between gap-4">
        <NavLink className="flex items-center gap-2 font-bold text-ink" to="/" onClick={() => setIsOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-material bg-google-blue text-white shadow-soft">
            <Rocket size={20} aria-hidden="true" />
          </span>
          <span>GDGoC LaunchPad</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <NavLink className={linkClass} key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/login">Login</Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-material text-ink hover:bg-surface-muted md:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-outline bg-surface md:hidden">
          <div className="app-container flex flex-col gap-2 py-4">
            {navigationLinks.map((link) => (
              <NavLink className={linkClass} key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Button className="mt-2" to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
