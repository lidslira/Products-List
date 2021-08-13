import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {HOME, LOGIN, REGISTER, PROFILE} from '../constants/routes';

import Login from '../views/Login';
import Home from '../views/Home';
import Register from '../views/Register';
import Profile from '../views/Profile';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LOGIN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={REGISTER} component={Register} />
        <Stack.Screen name={PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const Tab = createBottomTabNavigator();

export default function RootTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Login'}
        screenOptions={
          ({route}) =>  ({
          tabBarIcon: ({focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'list' : 'home';
            } else if (route.name === 'Register Item') {
              iconName = focused ? 'plus' : 'plus-square';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-check' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#53b175',
          tabBarInactiveTintColor: 'gray',
        })

      }
      >
        <Tab.Screen name="Home" component={Home} options= {{ headerShown: false}} />
        <Tab.Screen name="Register Item" component={Register} options= {{ headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options= {{ headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
