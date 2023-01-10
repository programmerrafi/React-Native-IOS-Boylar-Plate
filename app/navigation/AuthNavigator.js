import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingScreen, JoinScreen} from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="JoinScreen" component={JoinScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
