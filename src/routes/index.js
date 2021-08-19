import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {HOME, LOGIN, REGISTER, PROFILE, EDITPROFILE} from '../constants/routes';

import Login from '~/views/Login';
import Home from '~/views/Home';
import Register from '~/views/Register';
import Profile from '~/views/Profile';
import EditProfile from '~/views/EditProfile';

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME}
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={REGISTER}
      component={Register}
      options={{
        title: 'Cadastrar novo item',
      }}
    />
    <Stack.Screen
      name={PROFILE}
      component={Profile}
      options={{
        title: 'Perfil',
      }}
    />
    <Stack.Screen
      name={EDITPROFILE}
      component={EditProfile}
      options={{
        title: 'Editar perfil',
      }}
    />
  </Stack.Navigator>
);

export default function RootStack() {
  const {isLoggedIn} = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false,
            animationEnabled: false,
            headerShown: false,
          }}>
          <Stack.Screen
            name="AppStack"
            options={{
              headerShown: false,
            }}
            component={AppStack}
          />
        </Stack.Navigator>
      ) : (
        <LoginStack.Navigator
          initialRouteName={LOGIN}
          screenOptions={{
            gestureEnabled: false,
            animationEnabled: false,
            headerShown: false,
          }}>
          <LoginStack.Screen name={LOGIN} component={Login} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
}
