import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import { useEffect, useState } from 'react';
import OnBoard from './OnBoard';
import Login from './Login';

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <OnBoard/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "pink",
    backgroundColor: "#f0f2f5",
    flex: 1
  }
});

