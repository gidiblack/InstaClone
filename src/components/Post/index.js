import { View } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import DoubleClick from 'react-native-double-tap';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { postLiked } from '../../redux/actions/generalActions';

const Post = ({ post }) => {
  const { image, description, rating, title, price } = post;
  const [liked, setLiked] = useState(false);
  const [likeCount, setlikeCount] = useState(rating?.count);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const postState = useSelector(state => state.generalReducer);
  const likesData = postState?.likedPosts;
  console.log(likesData);

  const onLikePressed = () => {
    const change = liked ? -1 : 1;
    setlikeCount(likeCount * 1 + change);
    setLiked(!liked);
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
        likesCount={likeCount}
        caption={description}
        postedAt={price}
        liked={liked}
        onLikePressed={onLikePressed}
      />
    </View>
  );
};

export default Post;
