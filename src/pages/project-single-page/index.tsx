// common components
import { Navigation, Hero, Footer } from 'components'

// components
import Project from './project'

export function ProjectSinglePage () {
  const id = 1
  return (
    <>
      <Navigation />
      <Hero />
      <Project id={id} />
      <Footer />
    </>
  )
}