import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTopTab from './MyTopTab';

const BottomTab = createBottomTabNavigator()

const Screen1 = () =>{
    return(
        <View>
            <Text></Text>
        </View>
    )
}

const Screen2 = () =>{
    return(
        <View>
            <Text></Text>
        </View>
    )
}

const Screen3 = () =>{
    return(
        <View>
            <Text></Text>
        </View>
    )
}

const MyBottomTab = () => {
    return(
        <BottomTab.Navigator screenOptions={{headerShown:false}}>
            <BottomTab.Screen name="Screen1" component={MyTopTab}/>
            <BottomTab.Screen name="Screen2" component={Screen2}/>
            <BottomTab.Screen name="Screen3" component={Screen3}/>
        </BottomTab.Navigator>
    )
}
export default MyBottomTab;