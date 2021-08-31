import styled from 'styled-components'

// common styled components
import { Button } from 'theme/elements'

export const Wrapper = styled.div<any>`
  background: ${({ theme }) => `${theme.gradient}`};
  padding: 100px 0 60px;
  color: rgba(255, 255, 255, 0.75);
`

export const InnerContainer = styled.div<any>`
  display: flex;
`

export const ContactUsWrapper = styled.div<any>`
  max-width: 66.666666%;
  padding-right: 15px;
`

export const TitleSection = styled.div<any>`
  margin-bottom: 40px;
`

export const Title = styled.div<any>`
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  color: ${({ theme }) => `${theme.textLighter}`};
  &:after {
    position: absolute;
    content: '';
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 0;
  }
`

export const SubTitle = styled.p<any>`
  font-size: 16px;
`

export const FormWrapper = styled.form<any>`
  display: flex;
  flex-direction: column;
`

export const InputsWrapper = styled.div<any>`
  display: flex;
  margin-bottom: 20px;
`

export const InputContainer = styled.div<any>`
  width: 50%;
  &:first-child {
    padding-right: 10px;
  }
  &:last-child {
    padding-left: 10px;
  }
`

export const Input = styled.input<any>`
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  color: ${({ theme }) => `${theme.textLight}`};
  background-color: ${({ theme }) => `${theme.background}`};
  background-image: none;
  border: 1px solid ${({ theme }) => `${theme.line}`};
  border-radius: 0;
  box-shadow: none;
  transition: none;
  outline: none;
`

export const TextAreaInput = styled.textarea<any>`
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 100%; 
  min-height: 140px;
  padding: 12px;
  font-size: 16px;
  color: ${({ theme }) => `${theme.textLight}`};
  background-color: ${({ theme }) => `${theme.background}`};
  background-image: none;
  border: 1px solid ${({ theme }) => `${theme.line}`};
  border-radius: 0;
  box-shadow: none;
  transition: none;
  outline: none;
  resize: none;
`

export const SubmitButton = styled(Button)<any>`
  max-width: 210px;
  margin-top: 40px;
  background: transparent;
  border: 2px solid ${({ theme }) => `${theme.palette.white}`};
  &:hover {
    color: #1f386e;
    background: ${({ theme }) => `${theme.palette.white}`};
  }
`

export const ContactInfoWrapper = styled.div<any>`
  max-width: 33.333333%;
   padding-left: 15px;
`

export const ContactInfoTitle = styled.h3<any>`
  margin: 0 0 40px;
  font-weight: 400;
  color: ${({ theme }) => `${theme.palette.white}`};
`

export const ContactInfoItem = styled.div<any>`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`

export const ContactInfoItemTitle = styled.p<any>`
  color: ${({ theme }) => `${theme.palette.white}`};
`
