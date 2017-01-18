import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Spinner, Text } from 'native-base';
import { referenceChanged, nameChanged, formSubmit } from '../actions';

class LoginForm extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onReferenceChange(text) {
    this.props.referenceChanged(text);
  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onFormSubmit() {
    const { reference, name } = this.props;

    this.props.formSubmit(reference, name);
  }

  showLoading() {
    if (this.props.loading === true) {
      return (
        <Spinner color='orange' />
      );
    }
    return (
      <Button
        block
        rounded
        style={styles.button}
        onPress={this.onFormSubmit.bind(this)}
      >
        Se connecter
      </Button>
    );
  }

  render() {
    const { container, inputgroup, errors } = styles;


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
          {this.showLoading()}
          <Text style={errors}>{this.props.error}</Text>
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
    marginTop: 20,
    backgroundColor: 'orange'
  },
  inputgroup: {
    marginTop: 5,
    marginBottom: 5
  },
  errors: {
    paddingTop: 10,
    color: 'orange'
  }
};

const mapStateToProps = ({ auth }) => {
  const { reference, name, loading, error } = auth;

  return { reference, name, loading, error };
};

export default connect(mapStateToProps, { referenceChanged, nameChanged, formSubmit })(LoginForm);
