import React from 'react'
import { Container, Form, FormH1, FormContent, FormInput, FormLabel, FormWrap, Icon, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Agentes V</Icon>
          <FormContent>
            <Form action="/">
              <FormH1>Faça seu Login</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Esqueci a senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
