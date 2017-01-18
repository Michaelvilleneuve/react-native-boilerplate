import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LoginForm} initial hideNavBar />
      <Scene key="main" component={Main} />
    </Router>
  );
};

export default RouterComponent;
