import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/WelcomeScreen';

import TabNavigator from '../TabNavigator';

/**
 * @author
 * @function StackNavigator
 **/
const Stack = createStackNavigator();
const AppStack = props => {
  const {container} = styles;
  return (
    <Stack.Navigator
      initialRouteName={'WelcomeScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AppStack;
