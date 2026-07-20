import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

const Landing = lazy(() => import('./pages/Landing/Landing'))
const Login = lazy(() => import('./pages/Login/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const Technologies = lazy(() => import('./pages/Technologies/Technologies'))
const Events = lazy(() => import('./pages/Events/Events'))
const Mentor = lazy(() => import('./pages/Mentor/Mentor'))
const Bookmarks = lazy(() => import('./pages/Bookmarks/Bookmarks'))
const About = lazy(() => import('./pages/About/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner label="Loading page" />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
