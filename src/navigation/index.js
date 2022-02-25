import { StyleSheet, Image, useColorScheme } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import LikesScreen from '../screens/LikesScreen';
import DefaultScreen from '../screens/DefaultScreen';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import InstaLogo from '../assets/images/instagram-logo.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStackScreen = () => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
          headerTitle: () => (
            <Image
              source={InstaLogo}
              style={styles.logo}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <>
              <FAIcon
                name="plus-square-o"
                size={24}
                color={isDarkMode ? '#fff' : '#000'}
                style={styles.plusIcon}
              />
              <MCIcon
                name="facebook-messenger"
                size={24}
                color={isDarkMode ? '#fff' : '#000'}
              />
            </>
          ),
        }}
      />
      <Stack.Group
        screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const isDarkMode = useColorScheme() === 'dark' ? true : false;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              return (
                <FoundationIcon name={iconName} size={size} color={color} />
              );
            }
            if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            }
            if (route.name === 'Reels') {
              iconName = focused ? 'ios-film' : 'ios-film-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            }
            if (route.name === 'Likes') {
              iconName = focused ? 'heart' : 'heart-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarItemStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
          tabBarShowLabel: false,
          headerShown: false,
          contentStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Explore" component={DefaultScreen} />
        <Tab.Screen name="Reels" component={DefaultScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Profile" component={DefaultScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  plusIcon: {
    marginRight: 20,
  },
  logo: {
    width: 100,
    height: 44,
  },
});
