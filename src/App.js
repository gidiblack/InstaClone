import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Navigation from './navigation';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ReduxProvider store={store}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Navigation />
    </ReduxProvider>
  );
};

export default App;
