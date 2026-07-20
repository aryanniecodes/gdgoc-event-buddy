import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-muted">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
