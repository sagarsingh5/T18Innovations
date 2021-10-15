import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import AppIcon from './AppIcon';

export default function AppTextInput({
  image,
  placeholder,
  height,
  width,
  footerImage,
  borderBottomWidth,
  backgroundColor,
  style,
  fontSize,
}) {
  return (
    <View
      style={[
        styles.textInputContainer,
        {
          borderBottomWidth: borderBottomWidth,
          borderColor: '#000',
          backgroundColor: backgroundColor,
        },
        style,
      ]}>
      <AppIcon source={image} style={{height: height, width: width}} />
      <TextInput
        style={[styles.input, {fontSize: fontSize}]}
        placeholder={placeholder}
      />
      {footerImage && <View style={styles.vr} />}
      {footerImage && <AppIcon source={footerImage} size={16} />}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 10,
    letterSpacing: 1,
  },
  textInputContainer: {
    height: 50,
    width: '85%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginTop: 20,
    // backgroundColor: 'red',
  },
  vr: {
    height: '70%',
    width: 1,
    backgroundColor: 'grey',
    marginRight: 5,
  },
});
