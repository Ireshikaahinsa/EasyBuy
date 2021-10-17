import React from 'react';
import type {Node} from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';

const App: () => Node = () => {
  return <RootNavigator />;
};

export default App;
