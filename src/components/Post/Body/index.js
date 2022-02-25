import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { deviceWidth } from '../../../constants';

const Body = ({ imageUri }) => {
  return (
    <>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceWidth,
  },
});
