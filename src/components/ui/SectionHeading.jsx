function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-google-blue">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h1>
      {description ? <p className="mt-4 text-base leading-7 text-ink-muted">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
