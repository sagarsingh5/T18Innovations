import {placeholder} from '@babel/types';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import AppButton from './components/AppButton';
import AppIcon from './components/AppIcon';
import AppTextInput from './components/AppTextInput';

export default function LoginScreen({onPress}) {
  //   const textInput = (image, placeholder, height, width) => (

  //   );
  return (
    <ImageBackground
      source={require('./assets/BG.png')}
      style={styles.container}>
      <View style={styles.logo}>
        <AppIcon
          source={require('./assets/Logo2.png')}
          size={70}
          //   style={{zIndex: 1}}
        />
        <Text style={styles.logoText}>Ekart</Text>
      </View>
      <View style={styles.body}>
        <AppTextInput
          image={require('./assets/mail.png')}
          placeholder="Email"
          height={11}
          width={16}
          borderBottomWidth={1}
        />
        <AppTextInput
          image={require('./assets/lock.png')}
          placeholder="Password"
          height={20}
          width={16}
          borderBottomWidth={1}
        />
        <View style={styles.loginCredentials}>
          <View style={styles.rememberMeContainer}>
            <AppIcon size={8} source={require('./assets/tick.png')} />
            <Text style={[styles.rememberMeText, {marginLeft: 5}]}>
              Remember me
            </Text>
          </View>
          <Text style={styles.rememberMeText}>Forgot password?</Text>
        </View>
        <AppButton
          title="Login"
          fontSize={24}
          backgroundColor="#DB4700"
          color="#fff"
          paddingHorizontal={65}
          style={styles.button}
          onPress={onPress}
        />
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signIn}>Sign up</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 35,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '80%',
    alignItems: 'center',
    borderRadius: 50,
  },

  loginCredentials: {
    width: '85%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {fontSize: 10},
  button: {
    marginTop: 45,
  },
  footerText: {
    fontSize: 9,
    marginTop: 5,
  },
  signIn: {
    textDecorationLine: 'underline',
  },
  logo: {
    position: 'absolute',
    right: 0,
    top: 0,
    // zIndex: 1,
  },
  logoText: {
    color: '#DB4700',
    alignSelf: 'center',
  },
});
