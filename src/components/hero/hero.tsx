import Slider from 'react-slick'

// styled components
import { Container, LinkButton } from 'theme/elements'
import * as Elements from './elements'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="slick-custom-dot" />,
}

export const Hero = () => (
  <Elements.Wrapper>
    <Elements.SliderContainer>
      <Slider {...SLIDER_SETTINGS}>
        <Elements.SliderItem item={1} />
        <Elements.SliderItem item={2} />
        <Elements.SliderItem item={3} />
      </Slider>
    </Elements.SliderContainer>
    <Elements.InnerContainer>
      <Container>
        <Elements.Title>
          Global construction
        </Elements.Title>
        <Elements.Text>
          As one of the area’s highest-rated general contractors,
          we take immense pride in our work and that pride shines
          through in all of our projects. In each project we undertake,
          our primary goal is to maximize customer
          satisfaction through the quality of our work.
        </Elements.Text>
        <LinkButton to="/about-us">
          Learn more
        </LinkButton>
      </Container>
    </Elements.InnerContainer>
  </Elements.Wrapper>
)