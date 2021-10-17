import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author
 * @function MsgBar
 **/
const MsgBar = props => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text style={{color: 'white', fontSize: 25}}>Summer Sale</Text>
      <Text style={{color: 'white', fontSize: 18}}>up to 30% off</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4e60',
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default MsgBar;
