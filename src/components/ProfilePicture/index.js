import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const ProfilePicture = ({ imageUri, size = 70 }) => {
  return (
    <View style={[styles.container, { width: size + 4, height: size + 4 }]}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={[styles.image, { width: size, height: size }]}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#EA1E01',
    margin: 8,
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});
