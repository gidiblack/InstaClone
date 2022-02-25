import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Navigation from './navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Navigation />
    </>
  );
};

export default App;
