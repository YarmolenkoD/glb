// components
import { Hero } from 'components'
import { ProjectsInfiniteList } from './projects-infinite-list/projects-infinite-list'

export function Projects () {
  return (
    <>
      <Hero
        title="Our Projects"
        description={null}
      />
      <ProjectsInfiniteList />
    </>
  )
}