import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';

const DefaultScreen = () => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}>
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Nothing to see here...
      </Text>
    </View>
  );
};

export default DefaultScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
