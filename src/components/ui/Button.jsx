import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-google-blue text-white shadow-soft hover:bg-blue-600 focus-visible:ring-google-blue',
  secondary:
    'border border-outline bg-surface text-ink shadow-sm hover:bg-surface-muted focus-visible:ring-google-blue',
  ghost: 'text-ink-muted hover:bg-surface-muted hover:text-ink focus-visible:ring-google-blue',
}

function Button({
  children,
  className = '',
  variant = 'primary',
  to,
  type = 'button',
  ...props
}) {
  const classes = [
    'inline-flex min-h-10 items-center justify-center gap-2 rounded-material px-4 py-2 text-sm font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variants[variant],
    className,
  ].join(' ')

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
