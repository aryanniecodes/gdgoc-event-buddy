import Button from '../components/ui/Button'
import PageShell from '../components/common/PageShell'

function NotFound() {
  return (
    <PageShell
      description="The route you opened does not exist in GDGoC LaunchPad."
      eyebrow="404"
      title="Page Not Found"
    >
      <Button to="/">Return Home</Button>
    </PageShell>
  )
}

export default NotFound
