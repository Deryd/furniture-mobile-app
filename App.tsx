import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavBar } from "./src/NavBar";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/HomeScreen'
import { DetailsScreen } from './src/DetailsScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {},
});
 