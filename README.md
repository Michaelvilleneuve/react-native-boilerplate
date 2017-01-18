REACT NATIVE BOILERPLATE
===

Because I couldn't find any correct and lightweight boilerplate to start with React Native, I decided to build a minimal app that contains all the required libraries to correctly start a project.

---

## Libraries

- React Native (of course) 🚀🚀 https://facebook.github.io/react-native/
- Redux 🎉 (To handle app state) http://redux.js.org/
- ReduxThunk (To handle Redux async actions) https://github.com/gaearon/redux-thunk
- React-native-router-flux (To manage routing within the app 🛣) https://github.com/aksonov/react-native-router-flux
- NativeBase (To have basic cross platform components, and icon fonts 👏👍) http://nativebase.io
- ESLint (To make developers code better and unified JS) http://eslint.org/

## Default Components and code

This boilerplate really provides the minimum setup.
The src folder contains all the actual code. For the purpose of the example, and because most app will need it,
I left a login form so you can understand the code and keep the architecture.


## How do I launch the project ?

1. npm install
2. react-native link
3. Either run 👉 react-native run-ios
4. Or 👉 react-native run-android

## How do I start coding ?

Well, if you need a login form, you can basically start adding your own components into src/components, and plug them to the src/Router.

If not, you can trash src/actions/AuthActions, src/reducers/AuthReducer, src/components/LoginForm, and the references to theses files in src/actions/index, src/actions/types, src/components/Router, src/components/reducers/index.

If you don't now how to organize redux actions/reducers, have a look at how it works for the form before trashing anything.

In general, your programming flow will be the following :

- Add a scene in src/Router and link it to a new component
- Create the component in src/components
- Write the component JSX code
- Import redux in your new component

```javascript
import { connect } from 'react-redux';
```
- Map global state to access it as props

```javascript
const mapStateToProps = ({ theKeyOfTheAction }) => {
  // theKeyOfTheAction can be any key defined in reducers/index
  const { yourProps, blaBlaProps } = theKeyOfTheAction;

  return { yourProps, blaBlaProps };
};

export default connect(mapStateToProps, { yourActions, blaBla })(LoginForm);
```
- Create your actions in src/actions
- Reference them in src/actions/types
- Pass back your new state from src/reducers if needed
