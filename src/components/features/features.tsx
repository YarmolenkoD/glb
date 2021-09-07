import { useCallback } from 'react'

// styled components
import { Container, SectionTitle } from 'theme/elements'
import * as Elements from './elements'

// images
import { home, hook, skyline, stairs } from 'assets/images'

const SERVICES_ITEMS = [
  {
    icon: skyline,
    title: 'Build',
    list: [
      'Residence',
      'Villa',
      'Hotel',
      'Shopping Center',
      'Hospital',
      'Airport',
    ]
  },
  {
    icon: stairs,
    title: 'Infrastructure',
    list: [
      'Road',
      'Bridge',
      'Metro',
      'City water treatment systems',
      'Dam',
    ]
  },
  {
    icon: hook,
    title: 'Electromechanic',
    list: [
      'Power plants',
      'Gas systems',
      'City Main water networks',
      'City Main sewer networks',
      'Fire systems',
      'Automation systems',
      'Air conditioning systems',
    ]
  },
  {
    icon: home,
    title: 'Architectural design',
    list: [
      'Restoration',
      'Project design',
      'Interior architecture',
      'Landscape',
    ]
  },
]

export function Features() {

  const renderListItem = useCallback((item, index) => {
    return <Elements.FeatureListItem key={`feature-list-item-${index}`}>
      - {item}
    </Elements.FeatureListItem>
  }, [])

  const renderItem = useCallback(({ icon, list, title }, index) => {
    return <Elements.FeatureItem key={`feature-item-${index}`}>
      <Elements.FeatureIconCircle>
        <Elements.FeatureIcon src={icon} />
      </Elements.FeatureIconCircle>
      <Elements.FeatureTitle>{title}</Elements.FeatureTitle>
      <Elements.FeatureItemList>
        {list.map(renderListItem)}
      </Elements.FeatureItemList>
    </Elements.FeatureItem>
  }, [renderListItem])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <SectionTitle>
          Features
        </SectionTitle>
        <Elements.FeaturesList>
          {SERVICES_ITEMS.map(renderItem)}
        </Elements.FeaturesList>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}