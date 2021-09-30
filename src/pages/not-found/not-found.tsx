// styled components
import * as Elements from './elements'
import { Container } from 'theme/elements'

// components
import { Hero } from 'components'

export function NotFound() {
  return (
    <>
      <Hero description={null} />
      <Container>
        <Elements.InnerContainer>
          <Elements.Title>Not Found</Elements.Title>
        </Elements.InnerContainer>
      </Container>
    </>
  )
}
