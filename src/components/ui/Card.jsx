function Card({ children, className = '' }) {
  return (
    <article
      className={[
        'rounded-material border border-outline bg-surface p-6 shadow-soft transition-shadow hover:shadow-soft-lg',
        className,
      ].join(' ')}
    >
      {children}
    </article>
  )
}

export default Card
