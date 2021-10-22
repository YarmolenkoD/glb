import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// styled components
import { breakpoints } from 'theme'
import { Container } from 'theme/elements'
import * as Elements from './elements'

// components
import { SwitchLanguage } from 'components'
import BurgerMenu from './burger-menu/burger-menu'

// hooks
import { useBreakpoint } from 'hooks'

// images
import { logo } from 'assets/images'

// data
import { NAVIGATION_ITEMS, IRenderItemProps, IExtraProps } from './data'

export function Navigation() {
  const { t } = useTranslation()
  const history = useHistory()
  const breakpoint = useBreakpoint()

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

  // const logoIcon = useMemo(() => breakpoint > breakpoints.phone ? textLogo : logo, [breakpoint])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.FlexContainer>
          <Elements.LogoContainer onClick={onLogoClick}>
            <Elements.LogoText>GL</Elements.LogoText>
            <Elements.Logo src={logo} alt="Global construction" />
            <Elements.LogoText>BAL CONSTRUCTION</Elements.LogoText>
          </Elements.LogoContainer>
          <SwitchLanguage />
        </Elements.FlexContainer>
        {
          breakpoint > breakpoints.phone ?
            <Elements.Nav>
              {NAVIGATION_ITEMS.map(renderItem)}
            </Elements.Nav>
            : <BurgerMenu items={NAVIGATION_ITEMS} />
        }
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}