import { SafeAreaView, Text, FlatList, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from '../DefaultScreen';
import Post from '../../components/Post';

const LikesScreen = () => {
  const likesState = useSelector(state => state.generalReducer);
  const likedPosts = likesState?.likedPosts;
  return (
    <SafeAreaView>
      {likedPosts.length ? (
        <FlatList
          data={likedPosts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={({ id }) => id}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={100}
        />
      ) : (
        <View style={styles.container}>
          <Text>You have not liked any post</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LikesScreen;
