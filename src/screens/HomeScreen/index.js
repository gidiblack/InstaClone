import { SafeAreaView, useColorScheme } from 'react-native';
import React from 'react';
import Feed from '../../components/Feed';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;
  return (
    <SafeAreaView
      style={{ backgroundColor: isDarkMode ? '#000' : '#fff', flex: 1 }}>
      <Feed />
    </SafeAreaView>
  );
};

export default HomeScreen;
