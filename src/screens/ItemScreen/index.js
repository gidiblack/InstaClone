import { SafeAreaView, useColorScheme } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';

const ItemScreen = ({ route }) => {
  const feedState = useSelector(state => state.generalReducer);
  const feedPosts = feedState?.feedPosts;
  const post = feedPosts.filter(item => item.id === route?.params?.post?.id);
  const isDarkMode = useColorScheme() === 'dark' ? true : false;

  return (
    <SafeAreaView
      style={{ backgroundColor: isDarkMode ? '#000' : '#fff', flex: 1 }}>
      <Post post={post[0]} />
    </SafeAreaView>
  );
};

export default ItemScreen;
