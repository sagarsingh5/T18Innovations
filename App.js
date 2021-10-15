import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CartScreen from './src/CartScreen';
import LoginScreen from './src/LoginScreen';

export default function App() {
  const [onLoginScreen, setOnLoginScreen] = React.useState(true);

  const switchonLoginScreen = () => {
    setOnLoginScreen(!onLoginScreen);
  };

  return (
    <>
      {onLoginScreen ? (
        <LoginScreen onPress={switchonLoginScreen} />
      ) : (
        <CartScreen onPress={switchonLoginScreen} />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
