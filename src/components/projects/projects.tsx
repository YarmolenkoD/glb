import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// components
import ScrollAnimation from 'react-animate-on-scroll'

// styled components
import { Container, SectionTitle, SecondaryButton } from 'theme/elements'
import * as Elements from './elements'

// hooks
import { useProjects } from 'hooks'

// types
import { IProject } from 'types'

// constants
import { FADE_ANIMATION_DURATION } from 'constant-variables'

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
  const { t } = useTranslation()

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
      key={`project-item-${item.id}-${index}`}
      bg={item?.images?.[0]}
    >
      <Elements.ProjectHoverBox>
        <Elements.ProjectTitle>{t(item.title)}</Elements.ProjectTitle>
      </Elements.ProjectHoverBox>
    </Elements.ProjectItem>
  }, [goToProject])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        {
          title && <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
            <SectionTitle>
              {t(title)}
            </SectionTitle>
          </ScrollAnimation>
        }
        <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
          <Elements.ProjectsList>
            {projects?.map(renderItem)}
          </Elements.ProjectsList>
        </ScrollAnimation>
        {
          button && <ScrollAnimation animateOnce duration={FADE_ANIMATION_DURATION} animateIn="fadeInUp">
            <Elements.ButtonContainer>
              <SecondaryButton onClick={button.onClick}>
                {t(button.title)}
              </SecondaryButton>
            </Elements.ButtonContainer>
          </ScrollAnimation>
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
