import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import { useEffect, useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Authentication from './Authentication';
import { Icon } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTopTab from './MyTopTab';
import MyBottomTab from './MyBottomTab';

const OnBoard = () => {
    const Stack = createStackNavigator()

    const FirstScreen = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <Pressable style={styles.logo} onPress={()=>navigation.navigate("Main")}/>

                    <View>
                        <Text style={{ fontWeight: 800, fontSize: 32, textAlign: "center", marginBottom: 11 }}> Explore the App</Text>
                        <Text style={{ fontSize: 17, textAlign: "center", marginBottom: 76 }}> Now your finances are in one place and always under control</Text>
                    </View>

                    <Pressable style={[styles.button, { backgroundColor: "black", marginBottom: 14, borderColor: "black" }]} onPress={() => navigation.navigate(Login)}>
                        <Text style={[styles.buttonText, { color: "white" }]}> Login </Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate(SignUp)}>
                        <Text style={styles.buttonText}> Create Account</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    const MyStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="First Screen" component={FirstScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Main" component={MyBottomTab} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        )
    }

    return (
        <MyStack />
    );
}

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around"
    },
    logo: {
        width: 283,
        height: 283,
        backgroundColor: "#D9D9D9",
        borderRadius: "100%",
        marginBottom: 45
    },
    button: {
        padding: 20,
        borderWidth: 1.5,
        borderColor: "#747474",
        width: "100%",
        borderRadius: 10

    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
    }
})

export default OnBoard