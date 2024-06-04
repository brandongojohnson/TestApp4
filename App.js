import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import { useEffect, useState } from 'react';
import OnBoard from './OnBoard';

export default function App() {

  const Stack = createStackNavigator()

  const FirstScreen = ({navigation}) =>{
    return(
      <View>
        <Button title="Login" onPress={()=>navigation.navigate(Login)}/>
        <Button title="Signup" onPress={()=>navigation.navigate(Signup)}/>
      </View>
    )
  }

  const Login = () =>{
    return(
      <Text>This is the Login</Text>
    )
  }

  const Signup = () =>{
    return(
      <Text>This is the Signup</Text>
    )
  }

  const MyStack = () =>{
    return(
      <Stack.Navigator>
        <Stack.Screen name= "First Screen" component = {FirstScreen}/>
        <Stack.Screen name= "Login" component = {Login}/>
        <Stack.Screen name= "Signup" component = {Signup}/>
      </Stack.Navigator>
    )
  }

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

