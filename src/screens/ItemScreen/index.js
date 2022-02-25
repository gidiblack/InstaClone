import React from 'react';
import Post from '../../components/Post';

const ItemScreen = ({ route }) => {
  const post = route?.params?.post;

  return (
    <>
      <Post post={post} />
    </>
  );
};

export default ItemScreen;
