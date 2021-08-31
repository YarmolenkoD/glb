// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// images
import { logo } from 'assets/images'

const NAVIGATION_ITEMS = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/about-us',
    title: 'About us',
  },
  {
    path: '/projects',
    title: 'Our projects',
  },
  {
    path: '/contact-us',
    title: 'Contact us',
  },
]

export function Navigation() {

  const renderItem = ({ path, title }) => {
    return <Elements.Item>
      <Elements.Link to={path} activeClassName="active">
        {title}
      </Elements.Link>
    </Elements.Item>
  }

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.Logo src={logo}/>
        <Elements.Nav>
          {NAVIGATION_ITEMS.map(renderItem)}
        </Elements.Nav>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}