import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <View style={tw`bg-blue-300 flex-1`}>
      <Text style={tw`text-black text-2xl`}>hello home screen</Text>
    </View>
  );
};

export default HomeScreen;
