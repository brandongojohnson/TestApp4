import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab2 from './Tab2';

const CastType = () => {
  return (
    <View style={styles.box}>
      <View >
        <View></View>
      </View>
    </View>
  )
}
   
const ProfileHeader = () => {
  return (
    <View style={{height:200}} >
      <View style={styles.coverPhoto}></View>
      <View style={{width:100, height:100, backgroundColor:"pink", top:-50, left:20, borderRadius:20}}></View>
    </View>
  )
}

const Tab1 = () => {
  return (
    <ScrollView >
      <ProfileHeader />
      <View style={styles.container}>
        <PersonFeed />
        {/* <PersonFeed />
        <PersonFeed /> */}
      </View>
    </ScrollView>
  )
}

const Tabs = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Tab1" component={Tab1} />
      <Tabs.Screen name="Tab2" component={Tab2} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
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
    backgroundColor: "red",
    justifyContent: "flex-end",
    overflow: "visible"
  }
});
