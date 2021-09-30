import styled from 'styled-components'

export const Container = styled.div<any>`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const Tab = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  padding: 10px 40px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.secondaryGrayLight};
  color: ${({ theme }) => theme.textLighter};
  transition: all 0.2s ease;
  outline: none;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.9;
  }
  
  &.active {
    background-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 50%;
    padding: 10px 20px;
    font-size: 18px;
  }
`