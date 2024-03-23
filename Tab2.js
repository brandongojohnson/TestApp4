import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, Pressable, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

const AuthenticationStack = () => {
  return (
    <Stack.Navigator style={{ width: "80%" }}>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LogInPage} initialParams={{ testValue: "pizza" }} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  )
}

function newUserInfo(userId, firstName, lastName, userName, email, password) {
  set(ref(db, 'users2/' + userId), {
    firstname: firstName,
    lastname: lastName,
    username: userName,
    email: email
  });
}

const createUser = (firstName, lastName, userName, email, password) => {

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      const uid = auth.currentUser.uid
      newUserInfo(uid, firstName, lastName, userName, email, password)
      console.log(newUser.uid)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}



const SignUpPage = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const clear = () => {
    setFirstName("")
    setLastName("")
    setFirstName("")
    setUserName("")
    setEmail("")
    setPassword("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 30, marginBottom: 40 }}>Sign Up</Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="First Name" style={[styles.textInput, { width: "50%" }]} onChangeText={(e) => setFirstName(e)} value={firstName} />
          <TextInput placeholder="Last Name" style={[styles.textInput, { width: "50%" }]} onChangeText={(e) => setLastName(e)} value={lastName} />
        </View>

        <TextInput placeholder="User Name" style={styles.textInput} onChangeText={(e) => setUserName(e)} value={userName} />

        <TextInput placeholder="Email" style={styles.textInput} onChangeText={(e) => setEmail(e)} value={email} />
        <TextInput placeholder="Password" style={styles.textInput} onChangeText={(e) => setPassword(e)} value={password} />

        <Pressable onPress={() => {createUser(firstName, lastName, userName, email, password); clear()}} style={{ backgroundColor: "black", borderRadius: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: 600, fontSize: 18, textAlign: "center", color: "white", padding: 18 }}>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

const LogInPage = ({ navigation, route }) => {
  const { testValue } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 30, marginBottom: 40 }}>Log in</Text>
        <View>
          <TextInput placeholder="Email" style={styles.textInput} onChangeText={(e) => setEmail(e)} />
          <TextInput placeholder="Password" style={styles.textInput} onChangeText={(e) => setPassword(e)} />
        </View>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "blue", fontWeight: 700, textAlign: "center" }}>Link to Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

// const Submit = ({ email, password, firstName, LastName, userName }) => {
//   return (
//     <Pressable onPress={() => userSignUp(email, password)} style={{ backgroundColor: "black", borderRadius: 10, marginTop: 10 }}>
//       <Text style={{ fontWeight: 600, fontSize: 18, textAlign: "center", color: "white", padding: 18 }}>Submit</Text>
//     </Pressable>
//   )
// }

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

export default AuthenticationStack
