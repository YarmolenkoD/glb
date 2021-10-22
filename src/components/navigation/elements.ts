import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div<any>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${({ theme }) => `${theme.palette.white}`};
  border-bottom: 1px solid rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  padding: 15px 0;
`

export const InnerContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.ul<any>`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li<any>`
  display: flex;
  align-items: center;
`

export const Link = styled(NavLink)<any>`
  position: relative;
  padding: 10px 4px;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  margin: 0 10px;
  color: ${({ theme }) => theme.textLight};
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradient};
    content: '';
    transition: width 0.2s;
  }
  &:hover:after, &.active:after {
    width: 100%;
  }
`

export const FlexContainer = styled.div<any>`
  display: flex;
  align-items: center;
`

export const LogoContainer = styled(FlexContainer)`
  margin-right: 35px;
  cursor: pointer;
  
  &:hover img {
    transform: rotate(360deg) scale(1.1);
  }
`

export const Logo = styled.img<any>`
  width: 50px;
  margin: 0 5px;
  transition: all 1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallLaptop}px) {
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 50px;
  }
`

export const LogoText  = styled.p<any>`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 0;
  letter-spacing: -1px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.smallLaptop}px) {
    font-size: 30px;
  }
`