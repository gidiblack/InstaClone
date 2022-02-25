import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ likesCount, caption, postedAt, liked, onLikePressed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <Icon
              name={liked ? 'heart' : 'hearto'}
              size={24}
              color={liked ? '#c30000' : '#000000'}
            />
          </TouchableWithoutFeedback>
          <IonIcon name="chatbubble-outline" size={24} style={styles.comment} />
          <IonIcon name="paper-plane-outline" size={24} />
        </View>
        <FaIcon name="bookmark-o" size={24} />
      </View>
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
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 112,
    justifyContent: 'space-between',
  },
  comment: {
    transform: [{ rotate: '-90deg' }],
  },
});
