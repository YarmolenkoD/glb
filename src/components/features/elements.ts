import styled from 'styled-components'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => theme.palette.grayLightest};
`

export const InnerContainer = styled.div<any>`
  padding: 70px 0;
`

export const FeaturesList = styled.ul<any>`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 0;
  padding: 0;
  list-style-type: none;
`

export const FeatureItem = styled.li<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`

export const FeatureIconCircle = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
`

export const FeatureIcon = styled.img<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
`

export const FeatureTitle = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`

export const FeatureItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const FeatureListItem = styled.li`
  margin-bottom: 6px;
  font-size: 15px;
  text-align: center;
`
