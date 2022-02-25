import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Post = ({ post: { image, description, rating, title, price } }) => {
  return (
    <View>
      <Header imageUri={image} name={title} />
      <Body imageUri={image} />
      <Footer
        likesCount={rating?.count}
        caption={description}
        postedAt={price}
      />
    </View>
  );
};

export default Post;
