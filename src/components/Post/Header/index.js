import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture imageUri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
  },
});
