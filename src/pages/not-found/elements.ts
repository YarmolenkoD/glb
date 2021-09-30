import styled from 'styled-components'

export const InnerContainer =  styled.div<any>`
  padding: 70px 0;
  text-align: center;
`

export const Title = styled.h2<any>`
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`