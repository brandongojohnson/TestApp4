import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import { useEffect, useState } from 'react';
import { styles } from './OnBoard';

const Authentication = (type) =>{
    type == "signup" ? null : null
}

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={[styles.container, { backgroundColor: "white" }]}>
            <View style={{ width: "100%" }}>

                <Text style={styleForm.heading}>Log In</Text>

                <View>
                    <Text>Email</Text>
                    <TextInput style={styleForm.field} placeholderTextColor="rgba(0,0,0,.5)" placeholder="name@example.com" onChangeText={(e) => setEmail(e)} />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styleForm.field} placeholderTextColor="rgba(0,0,0,.5)" placeholder="name@example.com" onChangeText={(e) => setPassword(e)} />
                </View>
               

                <Pressable
                    style={[styles.button, { backgroundColor: "black", marginBottom: 14, borderColor: "black" }]}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={[styles.buttonText, { color: "white" }]}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}


export default Login;

export const styleForm = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 38,
        // fontFamily:"Poppins-Light.ttf"
    },
    field: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#D8DADC",
        borderRadius: 10,
        marginBottom: 22,
        marginTop: 6
    }
});
