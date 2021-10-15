import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function AppButton({
  title,
  backgroundColor,
  style,
  onPress,
  paddingHorizontal,
  fontSize,
  borderColor,
  color,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          paddingHorizontal: paddingHorizontal,
          borderWidth: borderColor ? 2 : 0,
          borderColor: borderColor,
          borderRadius: 20,
        },
        style,
      ]}>
      <Text style={{fontSize: fontSize, color: color}}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
