// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

export function ContactUs() {

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.ContactUsWrapper>
          <Elements.TitleSection>
            <Elements.Title>
              GET IN TOUCH
            </Elements.Title>
            <Elements.SubTitle>
              Please fill out the form below to send us an email
              and we will get back to you as soon as possible.
            </Elements.SubTitle>
          </Elements.TitleSection>
          <Elements.FormWrapper>
            <Elements.InputsWrapper>
              <Elements.InputContainer>
                <Elements.Input
                  type='text'
                  placeholder='Name'
                />
              </Elements.InputContainer>
              <Elements.InputContainer>
                <Elements.Input
                  type='text'
                  placeholder='Email'
                />
              </Elements.InputContainer>
            </Elements.InputsWrapper>
            <Elements.TextAreaInput
              placeholder='Message'
            />
            <Elements.SubmitButton>
              Send message
            </Elements.SubmitButton>
          </Elements.FormWrapper>
        </Elements.ContactUsWrapper>
        <Elements.ContactInfoWrapper>
          <Elements.ContactInfoTitle>
            Contact info
          </Elements.ContactInfoTitle>
        </Elements.ContactInfoWrapper>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}