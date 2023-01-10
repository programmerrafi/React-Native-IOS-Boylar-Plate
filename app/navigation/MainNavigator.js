import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigator from './AppTabNavigator';
import {AboutUsScreen} from '../screens';
import FindDonorStackNavigator from './FindDonorStackNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="FindDonor" component={FindDonorStackNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
