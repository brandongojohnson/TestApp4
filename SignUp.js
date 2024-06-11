import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Pressable, TextInput, TouchableOpacity } from 'react-native';
import PersonFeed from './PersonFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import { useEffect, useState } from 'react';
import { styles } from './OnBoard';

const SignUp = ({ navigation }) => {
    return (
        <View style={[styles.container, { backgroundColor: "white" }]}>
            <View style={{ width: "100%" }}>
                <Text style={styleSignUp.heading}> Sign Up</Text>
                

                <View>
                    <Text style={{ marginBottom: 6 }}>Email</Text>
                    <TextInput style={styleSignUp.field} placeholder='Name@example.com' />
                </View>

                <View>
                    <Text style={{ marginBottom: 6 }}>Create a Password</Text>
                    <View style={[styleSignUp.field, { flexDirection: "row", alignItems: "center" }]}>
                        <TextInput style={{ flex: 1 }} placeholder='Enter your password' secureTextEntry={true} />
                        <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: "rgba(0,0,0,.6)", borderRadius: 10 }} />
                    </View>
                </View>

                <View>
                    <Text style={{ marginBottom: 6 }}>Confirm Password</Text>
                    <TextInput style={[styleSignUp.field, { marginBottom: 38 }]} placeholder='Re-enter your password' secureTextEntry={true} />
                </View>

                <Pressable style={[styles.button, { backgroundColor: "black", marginBottom: 14, borderColor: "black" }]} onPress={() => navigation.navigate("Login")}>
                    <Text style={[styles.buttonText, { color: "white" }]}> Login </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SignUp;

const styleSignUp = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 38
    },
    field: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#D8DADC",
        borderRadius: 10,
        marginBottom: 22,
    }
});
