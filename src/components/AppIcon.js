import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppIcon({source, size, style}) {
  return (
    <TouchableOpacity
      style={[styles.container, {height: size, width: size}, style]}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    height: '100%',
    width: '100%',
  },
});
