import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';

const Story = ({ imageUri, name }) => {
  return (
    <View>
      <ProfilePicture imageUri={imageUri} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
