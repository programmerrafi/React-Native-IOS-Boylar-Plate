import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FindDonorScreen} from '../screens';

const Stack = createStackNavigator();

function FindDonorStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FindDonorScreen" component={FindDonorScreen} />
    </Stack.Navigator>
  );
}

export default FindDonorStackNavigator;
