import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// components
import { SwitchLanguage } from 'components'

// images
import { textLogo } from 'assets/images'

const NAVIGATION_ITEMS = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'Our projects',
    isActive: (match, location) => location.pathname.match(/projects/),
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
  const { t } = useTranslation()
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
        {t(title)}
      </Elements.Link>
    </Elements.Item>
  }

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.LogoContainer>
          <Elements.Logo onClick={onLogoClick} src={textLogo} alt="GlB construction" />
          <SwitchLanguage />
        </Elements.LogoContainer>
        <Elements.Nav>
          {NAVIGATION_ITEMS.map(renderItem)}
        </Elements.Nav>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}