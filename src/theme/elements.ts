import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div<any>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Button = styled.button<any>`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textLighter};
  background-color: ${({ theme }) => theme.primary};
  background-image: ${({ theme }) => theme.gradient};
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background-image: none;
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`;

export const LinkButton = styled(RouterLink)<any>`
  display: inline-block;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.textLighter};
  background-color: ${({ theme }) => theme.primary};
  background-image: ${({ theme }) => theme.gradient};
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textLighter};
    background-image: none;
    background-color: ${({ theme }) => theme.primaryDarker};
  }
`;
