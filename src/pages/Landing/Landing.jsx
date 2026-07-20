import Features from './components/Features'
import Hero from './components/Hero'
import TechnologyPreview from './components/TechnologyPreview'
import Testimonials from './components/Testimonials'
import UpcomingEvents from './components/UpcomingEvents'
import WhatIsGDGoC from './components/WhatIsGDGoC'

function Landing() {
  return (
    <>
      <Hero />
      <WhatIsGDGoC />
      <Features />
      <TechnologyPreview />
      <UpcomingEvents />
      <Testimonials />
    </>
  )
}

export default Landing
