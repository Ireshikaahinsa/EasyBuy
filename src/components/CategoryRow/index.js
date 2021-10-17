import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

/**
 * @author
 * @function UberTypeRow
 **/
const CategoryRow = props => {
  const {item} = props;

  return (
    <Pressable style={styles.categoryRow}>
      {/*  Image */}
      {/* <Image style={styles.image} source={item.uri} /> */}

      {/* category name */}
      <View>
        <Text style={styles.text}>{item.type}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryRow: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
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
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 20,
    width: 250,
  },
});
export default CategoryRow;
