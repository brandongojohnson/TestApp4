import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Screen1 = () => {
    return (
        <View style={styles.screen}>
            <Text>Screen1</Text>
        </View>
    );
}

const Screen2 = () => {
    return (
        <View style={styles.screen}>
            <Text>Screen2</Text>
        </View>
    );
}

const Screen3 = () => {
    return (
        <View style={styles.screen}>
            <Text>Screen3</Text>
        </View>
    );
}

const TopTab = createMaterialTopTabNavigator();

const MyTopTab = () => {
    return (
        <TopTab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: 'black',
                        bottom: 0, // Align to the bottom of the tab
                        marginHorizontal:"calc(16%)",
                        marginBottom:4
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarStyle: {
                        backgroundColor: 'white',
                    },
                }}
            >
                <TopTab.Screen name="Home" component={Screen1} />
                <TopTab.Screen name="Settings" component={Screen2} />
                <TopTab.Screen name="Screen3" component={Screen3} />
            </TopTab.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyTopTab;
