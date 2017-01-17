import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Button } from 'native-base';

class LoginForm extends Component {
    render() {
      const { container, button, inputgroup } = styles;

      return (
        <Container style={container}>
          <Content>
            <InputGroup style={inputgroup}>
              <Input placeholder="Numéro de contrat" />
            </InputGroup>
            <InputGroup>
              <Input placeholder="Votre nom" />
            </InputGroup>
            <Button block rounded style={button}>
              Se connecter
            </Button>
          </Content>
        </Container>
      );
    }
}

const styles = {
  container: {
    padding: 20,
    marginTop: 100
  },
  button: {
    marginTop: 20
  },
  inputgroup: {
    marginTop: 5,
    marginBottom: 5
  }
};

export default LoginForm;
