import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Excercise from '../Screens/Excercise';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // animation: 'fade_from_bottom',
      }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Excercise} name="Excercise" />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
