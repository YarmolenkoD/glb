import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// images
import { logo } from 'assets/images'

const NAVIGATION_ITEMS = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'Our projects',
    isActive: (match, location) => location.pathname.match(/projects/)
  },
]

interface IExtraProps {
  isActive?: (match: any, location: any) => boolean
}

interface IRenderItemProps {
  isActive?: (match: any, location: any) => boolean
  title: string
  path: string
}

export function Navigation() {
  const history = useHistory()

  const onLogoClick = useCallback(() => {
    if (history?.location?.pathname === '/') {
      window.location.reload()
    } else {
      history.push('/')
    }
  }, [])

  const renderItem = ({ path, title, isActive }: IRenderItemProps) => {
    const extraProps: IExtraProps = {}

    if (isActive) {
      extraProps.isActive = isActive
    }

    return <Elements.Item>
      <Elements.Link
        exact
        to={path}
        activeClassName="active"
        {...extraProps}
      >
        {title}
      </Elements.Link>
    </Elements.Item>
  }

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.Logo onClick={onLogoClick} src={logo} />
        <Elements.Nav>
          {NAVIGATION_ITEMS.map(renderItem)}
        </Elements.Nav>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}