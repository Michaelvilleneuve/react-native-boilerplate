import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} initial hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene key="default" component={Main} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
