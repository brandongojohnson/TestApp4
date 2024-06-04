import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, Pressable, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./firebase"
import { ref, set } from "firebase/database";

//Default -> Log in 
//Email
//Password
//Sign Up (Button)
//-> Name
//-> Username
//-> Email
//-> Password

const Stack = createStackNavigator();
const auth = getAuth();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator style={{ width: "80%" }} >
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LogInPage} initialParams={{ testValue: "pizza" }} />
      <Stack.Screen options={{ headerShown: true }} name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  )
}

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const LogInPage = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>

      <View style={{marginVertical:"auto"}}>

        <View style={styles.logo}/>
        <TextInput style={styles.field} onChangeText={(e) => setEmail(e)} placeholder='User Name' />
        <TextInput style={styles.field} onChangeText={(e) => setPassword()} placeholder='Password' />
        <Pressable style={styles.submitButton} onPress={() => login(email, password)}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
        <Pressable style={{ alignSelf: "center", flex: 1}} onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontSize: 17, fontWeight: 600, textAlign: "center" }}>Sign Up</Text>
        </Pressable>
      </View>

    </View>
  )
}

//-----------------------------

const SignUpPage = () => {
  return (
    <Text>This is Log in</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,

  },
  form: {
    flex: 1,
    justifyContent: "flex-end"
  },
  field: {
    backgroundColor: "lightgray",
    padding: 20,
    // marginHorizontal:10,
    marginBottom: 10,
    borderRadius: 10
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    marginHorizontal: "auto",
    marginBottom: 30,
    borderRadius: "100%"
  },
  submitButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop:30
  },
  submitText: {
    fontWeight: 600,
    color: "white",
    textAlign: 'center',
    fontSize: 20,
  }
})

export default AuthenticationStack
