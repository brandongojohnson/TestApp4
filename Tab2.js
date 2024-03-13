import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, Pressable, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//Default -> Log in 
//Email
//Password
//Sign Up (Button)
//-> Name
//-> Username
//-> Email
//-> Password

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

const Submit = ({ email, password }) => {
  return (
    <Pressable onPress={() => Authenticate(email, password)} style={{ backgroundColor: "black", borderRadius: 10, marginTop: 10 }}>
      <Text style={{ fontWeight: 600, fontSize: 18, textAlign: "center", color: "white", padding: 18 }}>Submit</Text>
    </Pressable>
  )
}

const Authenticate = (email, password) => {

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
const Login = (setEmail, setPassword ) => {
  return (
    <View>
      <TextInput placeholder="Email" style={styles.textInput} onChangeText={(e) => setEmail(e)} />
      <TextInput placeholder="Password" style={styles.textInput} onChangeText={(e) => setPassword(e)} />
    </View>
  )
}

const SignUp = ({ setFirstName, setLastName, setUserName, setEmail, setPassword }) => {

  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 30, marginBottom: 40 }}>Sign Up</Text>

      <View style={{ flexDirection: "row" }}>
        <TextInput placeholder="First Name" style={[styles.textInput, { width: "50%" }]} onChangeText={(e) => setFirstName(e)} />
        <TextInput placeholder="Last Name" style={[styles.textInput, { width: "50%" }]} onChangeText={(e) => setLastName(e)} />
      </View>

      <TextInput placeholder="User Name" style={styles.textInput} onChangeText={(e) => setUserName(e)} />
      <Login/> 
    </View>
  )
}

const Tab2 = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <SignUp
          setFirstName={setFirstName}
          setLastName={setLastName}
          setUserName={setUserName}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Submit email={email} password={password} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0,
    padding: 18,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,.05)"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  form: {
    width: "90%",
    // backgroundColor: null
  }
})

export default Tab2

