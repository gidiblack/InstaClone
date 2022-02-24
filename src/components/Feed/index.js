import { FlatList } from 'react-native';
import React from 'react';
import Post from '../Post';
import Stories from '../StoriesComponent';

const data = [
  {
    user: {
      imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      name: 'John Doe',
    },
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    caption: 'this is a simple caption',
    likesCount: '123',
    postedAt: '2 hours ago',
  },
  {
    user: {
      imageUri:
        'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      name: 'Jane Doe',
    },
    imageUri:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    caption: 'this is a simple caption',
    likesCount: '123',
    postedAt: '2 hours ago',
  },
  {
    user: {
      imageUri: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      name: 'Patrick Doe',
    },
    imageUri: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    caption: 'this is a simple caption',
    likesCount: '123',
    postedAt: '2 hours ago',
  },
  {
    user: {
      imageUri: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      name: 'Patricia Doe',
    },
    imageUri: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    caption: 'this is a simple caption',
    likesCount: '123',
    postedAt: '2 hours ago',
  },
  {
    user: {
      imageUri: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      name: 'Helen Doe',
    },
    imageUri: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    caption: 'this is a simple caption',
    likesCount: '123',
    postedAt: '2 hours ago',
  },
];

const index = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={Stories}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default index;

// const styles = StyleSheet.create({});
