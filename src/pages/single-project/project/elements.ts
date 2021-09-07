import styled from 'styled-components'


export const Container = styled.div<any>`
  
`

export const InnerContainer = styled.div<any>`
  display: flex;
  padding: 70px 0;
`

export const SliderWrapper = styled.div<any>`
   width: 60%;
   padding-right: 20px;
`

export const SliderContainer = styled.div<any>`
  width: 100%;
  margin-bottom: 20px;

  .slick-dots {
    bottom: 10px;
  }
  .slick-custom-dot {
    width: 20px;
    height: 4px;
    margin: 0 2px;
    background: ${({ theme }) => theme.line};
    cursor: pointer;
    transition: all 0.2s ease;
  }
  & .slick-active .slick-custom-dot {
    background: ${({ theme }) => theme.primary};
  }
`

export const SliderItem = styled.div<any>`
  width: 100%;
  height: 500px;
  background: url(${({ path }) => path}) no-repeat center/cover;
`

export const InfoContainer = styled.div<any>`
  width: 40%;
  padding-left: 20px;
`

export const Title = styled.h2<any>`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`

export const Description = styled.h2<any>`
  font-size: 18px;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
`

export const Country = styled.div<any>`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.textLight};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.palette.white};
  
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`
