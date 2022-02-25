import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';

const ItemScreen = ({ route }) => {
  const feedState = useSelector(state => state.generalReducer);
  const feedPosts = feedState?.feedPosts;
  const post = feedPosts.filter(item => item.id === route?.params?.post?.id);
  return (
    <>
      <Post post={post[0]} />
    </>
  );
};

export default ItemScreen;
