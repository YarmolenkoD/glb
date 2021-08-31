// styled components
import { Container } from './elements'

// components
import { Navigation, Hero, Features, Footer, ContactUs } from 'components'

export function Home () {
  return (
    <Container>
      <Navigation />
      <Hero />
      <Features />
      <ContactUs />
      <Footer />
    </Container>
  )
}