import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button } from 'native-base';
import { referenceChanged, nameChanged, formSubmit } from '../actions';

class LoginForm extends Component {
  onReferenceChange(text) {
    this.props.referenceChanged(text);
  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onFormSubmit() {
    this.props.formSubmit();
  }

  render() {
    const { container, button, inputgroup } = styles;


    return (
      <Container style={container}>
        <Content>
          <InputGroup style={inputgroup}>
            <Input
              placeholder="Numéro de contrat"
              onChangeText={this.onReferenceChange.bind(this)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Votre nom"
              onChangeText={this.onNameChange.bind(this)}
            />
          </InputGroup>
          <Button
            block
            rounded
            style={button}
            onPress={this.onFormSubmit.bind(this)}
          >
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

const mapStateToProps = ({ auth }) => {
  const { reference, name } = auth;

  return { reference, name };
};

export default connect(mapStateToProps, { referenceChanged, nameChanged, formSubmit })(LoginForm);
