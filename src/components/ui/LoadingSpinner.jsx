function LoadingSpinner({ label = 'Loading' }) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-ink-muted">
      <div
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-outline border-t-google-blue"
      />
      <p className="text-sm font-medium">{label}</p>
    </div>
  )
}

export default LoadingSpinner
