import styled from 'styled-components'

// images
import { hero1, hero2, hero3 } from 'assets/images'

const SLIDER_IMAGES = [hero1, hero2, hero3]

const NAVIGATION_HEIGHT = 78

export const Wrapper = styled.header<any>`
  position: relative;
`


export const InnerContainer = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 750px;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  margin: 0 auto;
  text-align: center;
`

export const SliderContainer = styled.div<any>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & .slick-slider {
    height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  }
  & .slick-dots {
    bottom: 0;
    z-index: 20;
    & .slick-custom-dot {
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.line};
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    & .slick-active .slick-custom-dot {
      background: ${({ theme }) => theme.primary};
    }
  }
`

export const SliderItem = styled.div<any>`
  width: 100%;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  background: linear-gradient(-45deg, rgb(0, 0, 0, 0.5), rgb(96, 141, 253, 0.5)), 
  url(${({ item }) => SLIDER_IMAGES[item - 1]}) no-repeat center/cover fixed;
`

export const Title = styled.h1<any>`
  font-size: 82px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.textLighter};
`

export const Text = styled.p<any>`
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin: 0 0 60px;
  color: ${({ theme }) => theme.textLighter};
`
