import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {selectUser} from '../redux/slices/authSlice';
import {useSelector} from 'react-redux';
import Screen from '../components/shared/Screen';
import tw from 'twrnc';

const AppNavigator = () => {
  const user = {}; // using redux here
  return (
    <NavigationContainer>
      <Screen style={tw`flex-1 bg-transparent`}>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </Screen>
    </NavigationContainer>
  );
};

export default AppNavigator;
