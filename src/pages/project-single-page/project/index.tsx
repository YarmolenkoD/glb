// styled components
import * as Elements from './elements'
import { Container } from 'theme/elements'

interface IProps {
  id: number
}

export default function Project (props: IProps) {
  return (
    <Elements.Container>
      <Container>
        <Elements.InnerContainer>

        </Elements.InnerContainer>
      </Container>
    </Elements.Container>
  )
}