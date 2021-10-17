import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * @author
 * @function Header
 **/
const Header = props => {
  const {container} = styles;
  return (
    <View style={container}>
      {/* back icon */}
      <View>
        <MaterialIcons
          name={'arrow-back'}
          size={35}
          color={'black'}
          style={{paddingHorizontal: 20, paddingVertical: 10}}
        />
      </View>

      {/* title */}
      <View>
        <Text style={styles.title}>Categories</Text>
      </View>
      {/* search icon */}
      <View>
        <Ionicons
          name={'search'}
          size={30}
          color={'black'}
          style={{paddingHorizontal: 20, paddingVertical: 10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 4,
    borderBottomColor: '#ebebeb',
    marginBottom: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
});
export default Header;
