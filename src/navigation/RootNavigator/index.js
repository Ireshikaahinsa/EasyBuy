import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from '../AppStack';

import TabNavigator from '../TabNavigator';

/**
 * @author
 * @function RootNavigator
 **/

const RootNavigator = props => {
  const {container} = styles;
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RootNavigator;
