import React from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import CategoryRow from '../CategoryRow';

/**
 * @author
 * @function UberTypes
 **/
const Categories = props => {
  const CategoryData = [
    {
      id: '0',
      type: 'Smart Phones & Accessories',
      uri: require('../../assets/images/phone.jpg'),
    },
    {
      id: '1',
      type: 'Smart Watches',
      uri: require('../../assets/images/watch.jpg'),
    },
    {
      id: '2',
      type: 'Computers & Tablets',

      uri: require('../../assets/images/Computers.jpg'),
    },
    {
      id: '3',
      type: 'Video Games & Consoles',
      uri: require('../../assets/images/videoGames.jpg'),
    },
    {
      id: '4',
      type: 'Cameras',
      uri: require('../../assets/images/camera.jpg'),
    },
    {
      id: '5',
      type: 'Camera Drones',

      uri: require('../../assets/images/drone.jpg'),
    },
    {
      id: '6',
      type: 'Protable Audio & Headphones',

      uri: require('../../assets/images/headPhones.jpg'),
    },
    {
      id: '7',
      type: 'TV & Home Audio Electronics ',
      uri: require('../../assets/images/tv.jpg'),
    },
  ];

  return (
    <View>
      <FlatList
        data={CategoryData}
        renderItem={CategoryRow}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Categories;
