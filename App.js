import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import { Test2 } from './Test';
import { useEffect, useState } from 'react';
import { getData } from './Test';


export default function App() {
  const [data, setData] = useState([])

  const Tabs = createBottomTabNavigator()
  const Stack = createStackNavigator()

  useEffect(() => {
    setData(Test2['Tasks']['t1']['event'])
  }, [data])


  const Home = ({ navigation }) => {
    return (
      <View>
        <Button title="Click on Me" onPress={() => navigation.navigate("Main")} />
        <Text>{data}</Text>
        <Button title="Test" onPress={() => console.log(data)} />
      </View>
    )
  }

  const MyTabs = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen options={{ headerShown: false }} name="Tab1" component={Tab1} />
        <Tabs.Screen options={{ headerShown: false }} name="Tab3" component={Tab2} />
      </Tabs.Navigator>
    )
  }
  const testBool = true
  const MyStack = () => {
    return (
      <Stack.Navigator>
        {testBool ? <Stack.Screen name="Home" component={Home} /> : null}
        <Stack.Screen name="Main" component={MyTabs} />
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "pink",
    backgroundColor: "#f0f2f5",
    flex: 1
  },
  box: {
    height: 150,
    backgroundColor: "#D9D9D9",
    // margin:10
  },
  coverPhoto: {
    height: 150,
    backgroundColor: "#9E2A2B",
    justifyContent: "flex-end",
    overflow: "visible"
  }
});

