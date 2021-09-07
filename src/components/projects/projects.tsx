import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

// styled components
import { Container, SectionTitle, SecondaryButton } from 'theme/elements'
import * as Elements from './elements'

// hooks
import { useProjects } from 'hooks'

// types
import { IProject } from 'types'

interface IButton {
  title: string
  onClick?: () => void
}

interface IProps {
  title?: string|null
  button?: IButton|null
}

interface IProjectsData {
  projects: IProject[]
}

export function Projects(props: IProps) {
  const { title, button } = props

  const history = useHistory()
  const { projects }: IProjectsData = useProjects({ initialPage: 1, count: 6 })

  const goToProjects = useCallback(() => {
    history.push('/projects')
  }, [])

  if (button && !button.onClick) {
    button.onClick = goToProjects
  }

  const goToProject = useCallback((id) => {
    history.push(`/projects/${id}`)
  }, [])

  const renderItem = useCallback((item, index) => {
    return <Elements.ProjectItem
      onClick={goToProject.bind(null, item.id)}
      key={`project-item-${index}`}
      bg={item?.images?.[0]}
    >
      <Elements.ProjectHoverBox>
        <Elements.ProjectTitle>{item.title}</Elements.ProjectTitle>
      </Elements.ProjectHoverBox>
    </Elements.ProjectItem>
  }, [goToProject])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        {
          title && <SectionTitle>
            {title}
          </SectionTitle>
        }
        <Elements.ProjectsList>
          {projects?.map(renderItem)}
        </Elements.ProjectsList>
        {
          button && <Elements.ButtonContainer>
            <SecondaryButton onClick={button.onClick}>
              {button.title}
            </SecondaryButton>
          </Elements.ButtonContainer>
        }
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}

Projects.defaultProps = {
  title: 'Our Projects',
  button: {
    title: 'View more',
  }
} as IProps
