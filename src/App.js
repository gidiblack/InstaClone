import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
