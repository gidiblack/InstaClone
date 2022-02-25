import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from '../DefaultScreen';
import Post from '../../components/Post';

const LikesScreen = () => {
  const likesState = useSelector(state => state.generalReducer);
  const likedPosts = likesState?.likedPosts;
  const isDarkMode = useColorScheme() === 'dark' ? true : false;

  return (
    <SafeAreaView
      style={{ backgroundColor: isDarkMode ? '#000' : '#fff', flex: 1 }}>
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
          <Text style={[styles.text, { color: !isDarkMode ? '#000' : '#fff' }]}>
            You have not liked any post
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LikesScreen;
