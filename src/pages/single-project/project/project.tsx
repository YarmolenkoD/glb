import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

// styled components
import * as Elements from './elements'
import { Container } from 'theme/elements'

// images
import Images from 'assets/images/data/projects'

// types
import { IProject } from 'types'

interface IProps {
  data: IProject|null
}

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: () => <div className="slick-custom-dot" />,
}

export default function Project (props: IProps) {
  const { t } = useTranslation()

  const { data: project } = props

  const images = useMemo(() => project ? Images[project.id] : [], [project])

  const renderSliderItem = useCallback((item, index) => {
    return <Elements.SliderItem
      key={`project-slider-item-${index}`}
      path={item}
    />
  }, [])

  const sliderSettings = useMemo(() => ({...SLIDER_SETTINGS, dots: images.length < 5 }), [images.length])

  const renderSlider = useCallback(() => {
    return <Elements.SliderWrapper>
      <Elements.SliderContainer>
        <Slider {...sliderSettings}>
          {images.map(renderSliderItem)}
        </Slider>
      </Elements.SliderContainer>
    </Elements.SliderWrapper>
  }, [renderSliderItem, images, sliderSettings])

  const renderInfo = useCallback(() => {
    return <Elements.InfoContainer>
      {!!project?.title && <Elements.Title>{project.title}</Elements.Title>}
      {!!project?.subTitle && <Elements.SubTitle>{t(project.subTitle)}</Elements.SubTitle>}
      {!!project?.description && <Elements.Description>{project.description}</Elements.Description>}
      {!!project?.type?.length && <Elements.Info>{t('Type of work')}: {project.type.map((el) => t(el)).join(', ')}</Elements.Info>}
      {!!project?.amount && <Elements.Info>{t('Amount')}: {t(project.amount)}</Elements.Info>}
      {!!project?.duration && <Elements.Info>{t('Duration')}: {project.duration} {t('Months')}</Elements.Info>}
      {!!project?.year && <Elements.Info>{t('Year')}: {t(project.year)}</Elements.Info>}
    </Elements.InfoContainer>
  }, [project])

  return (
    <Elements.Container>
      <Container>
        <Elements.InnerContainer>
          {project && renderSlider()}
          {project && renderInfo()}
        </Elements.InnerContainer>
      </Container>
    </Elements.Container>
  )
}