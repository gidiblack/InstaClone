import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import ProfilePicture from '../../ProfilePicture';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ imageUri, name }) => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <ProfilePicture imageUri={imageUri} size={40} />
        <Text style={[styles.name, { color: !isDarkMode ? '#000' : '#fff' }]}>
          {name}
        </Text>
      </View>
      <View style={styles.headerRight}>
        <Icon name="dots-vertical" size={24} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    marginRight: 5,
  },
});
