import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button } from 'native-base';
import { refChanged } from '../actions';

class LoginForm extends Component {
  onRefChange(text) {
    this.props.refChanged(text);
  }

  render() {
    const { container, button, inputgroup } = styles;


    return (
      <Container style={container}>
        <Content>
          <InputGroup style={inputgroup}>
            <Input
              placeholder="Numéro de contrat"
              onChangeText={this.onRefChange.bind(this)}
            />
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

export default connect(null, { refChanged })(LoginForm);
