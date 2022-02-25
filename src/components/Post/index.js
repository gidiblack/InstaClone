import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import DoubleClick from 'react-native-double-tap';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { postLiked } from '../../redux/actions/generalActions';

const Post = ({ post }) => {
  const { image, description, rating, title, price, liked } = post;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLikePressed = () => {
    dispatch(postLiked(post, liked));
  };

  return (
    <View>
      <Header imageUri={image} name={title} />
      <DoubleClick
        singleTap={() => {
          console.log('single tap');
          navigation.navigate('Item', { post });
        }}
        doubleTap={() => {
          console.log('double tap');
          onLikePressed();
        }}
        delay={200}>
        <Body imageUri={image} />
      </DoubleClick>
      <Footer
        likesCount={rating.count}
        caption={description}
        postedAt={price}
        liked={liked}
        onLikePressed={onLikePressed}
      />
    </View>
  );
};

export default Post;
