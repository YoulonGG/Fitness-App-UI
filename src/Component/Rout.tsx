import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Rout = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <MainStack />
    </NavigationContainer>
  );
};

export default Rout;

const styles = StyleSheet.create({});
