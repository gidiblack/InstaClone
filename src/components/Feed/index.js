import { FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import Post from '../Post';
import Stories from '../StoriesComponent';
import useFeed from '../../hooks/useFeed';

const Feed = () => {
  const { feedPosts, isLoading } = useFeed();
  const feed = [];
  if (!isLoading && feedPosts) {
    feed.push(...feedPosts);
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={'large'} color="#000" />
      ) : (
        <FlatList
          data={feed}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={Stories}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={100}
        />
      )}
    </>
  );
};

export default Feed;
