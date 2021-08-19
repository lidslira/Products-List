import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HOME, PROFILE} from '~/constants/routes';

import Home from '~views/Home';
import Profile from '~views/Profile';

const Tab = createBottomTabNavigator();

export default function RootTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'list' : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-check' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7FFFD4',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name={PROFILE}
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
