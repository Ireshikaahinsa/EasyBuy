import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {HStack, Stack, Center, NativeBaseProvider} from 'native-base';
import {useNavigation} from '@react-navigation/native';
/**
 * @author
 * @function WelcomeScreen
 **/
const WelcomeScreen = props => {
  const {container} = styles;
  const navigation = useNavigation();
  return (
    // main container

    <View style={container}>
      {/* logo container */}
      <View style={styles.logoContainer}>
        {/* logo */}
        <Image
          source={require('../../assets/images/Cart.jpg')}
          style={styles.logo}
        />

        {/* title */}
        <View>
          <Text style={styles.title}>EasyBuy</Text>
        </View>

        {/* slogan */}
        <View>
          <Text style={styles.slogan}>Feel-good shopping</Text>
        </View>
      </View>

      {/* button */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4e60',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    alignItems: 'center',
    fontSize: 50,
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
  },
  slogan: {
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
});
export default WelcomeScreen;
