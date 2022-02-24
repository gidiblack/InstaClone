import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { deviceWidth } from '../../../constants';

const Body = ({ imageUri }) => {
  return (
    <View>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceWidth,
  },
});
