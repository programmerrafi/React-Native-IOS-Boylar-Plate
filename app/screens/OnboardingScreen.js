import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const OnboardingScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-red-500`}>OnboardingScreen</Text>
    </View>
  );
};

export default OnboardingScreen;
