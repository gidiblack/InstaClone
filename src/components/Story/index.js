import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';

const Story = ({ imageUri, name }) => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;

  return (
    <View>
      <ProfilePicture imageUri={imageUri} />
      <Text style={[styles.text, { color: !isDarkMode ? '#000' : '#fff' }]}>
        {name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
