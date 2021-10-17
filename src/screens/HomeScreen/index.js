import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import MsgBar from '../../components/MsgBar';
import Categories from '../../components/Categories';
import CategoryRow from '../../components/CategoryRow';

/**
 * @author
 * @function HomeScreen
 **/
const HomeScreen = props => {
  const {container} = styles;

  return (
    //main  container
    <View style={container}>
      {/* header */}
      <Header />

      {/* Category list container  */}
      <ScrollView>
        {/* message bar */}
        <MsgBar />
        {/* category list */}
        <Categories />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryRow: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ebebeb',
    elevation: 1,

    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginTop: 15,
    shadowColor: '#ebebeb',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemText: {
    fontSize: 25,
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
