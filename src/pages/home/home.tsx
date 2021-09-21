// components
import { Hero, Features, Projects } from 'components'

export function Home () {
  return (
    <>
      <Hero fullScreen showLearnMore />
      <Features />
      <Projects />
    </>
  )
}