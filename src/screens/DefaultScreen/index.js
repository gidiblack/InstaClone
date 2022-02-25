import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const DefaultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DefaultScreen</Text>
    </View>
  );
};

export default DefaultScreen;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
