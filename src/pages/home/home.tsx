// components
import { Hero, Features, Projects, OurPrinciples } from 'components'

export function Home () {
  return (
    <>
      <Hero fullScreen showLearnMore />
      <Features />
      <Projects />
      <OurPrinciples />
    </>
  )
}