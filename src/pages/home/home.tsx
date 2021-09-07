// components
import { Hero, Features, ContactUs, Projects } from 'components'

export function Home () {
  return (
    <>
      <Hero fullScreen showLearnMore />
      <Features />
      <Projects />
      <ContactUs />
    </>
  )
}