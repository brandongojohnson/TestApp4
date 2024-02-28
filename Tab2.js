// // import React, { useEffect, useState } from 'react';
// // import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
// // import PersonFeed from './PersonFeed';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // export default function Tab2() {


// //     const ButtonComponent = ({active}) => {
// //         const [color, setColor] = useState("slateblue");

// //         const handlePress = (active) => {
// //             active = true
// //             active? setColor("red") : setColor("slateblue")

// //         }

// //         return (
// //             <TouchableOpacity onPress={handlePress} style={{ flex: 1, backgroundColor: color, padding: 15, alignItems: "center", margin: 10, borderRadius: 10 }}>
// //                 <Text style={{ fontWeight: 600, color: "white" }}>This is a Test</Text>
// //             </TouchableOpacity>
// //         )
// //     }

// //     const Test = () => {
// //         var elements = []

// //         for (let i = 0; i < 3; i++) {
// //             elements.push(
// //                 <ButtonComponent key={i} active={false}/>
// //             )
// //         }

// //         return (
// //             <ScrollView horizontal>
// //                 {elements}
// //             </ScrollView>
// //         )
// //     }

// //     return (
// //         <View>
// //             <Test />
// //         </View>
// //     )
// // }


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

// export default function Tab2() {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const stuff = {
//         0: <Text>This is a test</Text>,
//         1: <Text>This is a test2</Text>,
//         2: <Text>This is a test3</Text>
//     }

//     const DateCard = () =>{
//         return(
//             <View>
//                 <View></View>
//                 <View>
//                     <Text>Title</Text>
//                     <Text>Description</Text>
//                 </View>
//             </View>
//         )
//     }

//     const moreStyle = StyleSheet.create({
//         profile:{

//         },
//         textInfo:{

//         }
//     })

//     const ButtonComponent = ({ isActive, onPress }) => {
//         return (
//             <TouchableOpacity onPress={onPress} style={{ flex: 1, backgroundColor: isActive ? "red" : "slateblue", padding: 15, alignItems: "center", margin: 10, borderRadius: 10 }}>
//                 <Text style={{ fontWeight: 600, color: "white" }}>This is a Test</Text>
//             </TouchableOpacity>
//         );
//     };

//     const Test = () => {

//         const buttons = [];

//         for (let i = 0; i < 3; i++) {
//             buttons.push(
//                 <ButtonComponent key={i} isActive={activeIndex === i} onPress={() => setActiveIndex(i)} />
//             );
//         }

//         return (
//             <ScrollView horizontal>
//                 {buttons}
//             </ScrollView>
//         );
//     };

//     return (
//         <View>
//             <Test />
//             {stuff[activeIndex]}
//         </View>
//     );
// }

import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const Tab2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [labelAnim] = useState(new Animated.Value(20));

  const handleInputChange = (text) => {
    setInputValue(text);
    if (text.length > 0) {
      Animated.timing(labelAnim, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(labelAnim, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, { fontSize: labelAnim }]}>
        Label
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default Tab2;
