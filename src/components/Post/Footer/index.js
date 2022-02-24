import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = ({ likesCount, caption, postedAt }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  likes: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  caption: {
    color: '#000',
    marginTop: 5,
  },
  postedAt: {
    fontSize: 10,
    marginTop: 5,
  },
});
