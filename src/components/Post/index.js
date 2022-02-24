import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Post = ({ post: { user, imageUri, likesCount, caption, postedAt } }) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer likesCount={likesCount} caption={caption} postedAt={postedAt} />
    </View>
  );
};

export default Post;
