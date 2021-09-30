import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// common components
import { Hero } from 'components'

// components
import Project from './project/project'

// hooks
import { useProject } from 'hooks'

export function SingleProject() {
  const { id } = useParams()
  const history = useHistory()
  const project = useProject(id)

  useEffect(() => {
    if (!project) {
      history.replace('/not-found')
    }
  }, [project])

  return (
    <>
      <Hero
        title={project?.title}
        description={null}
      />
      {project && <Project data={project} />}
    </>
  )
}