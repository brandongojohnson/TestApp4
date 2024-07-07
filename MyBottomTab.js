import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';  // Import RNEUI Icon
import MyTopTab from './MyTopTab';

const BottomTab = createBottomTabNavigator();

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <Text>Screen 1</Text>
        </View>
    );
};

const Screen2 = () => {
    return (
        <View style={styles.container}>
            <Text>Screen 2</Text>
        </View>
    );
};

const Screen3 = () => {
    return (
        <View style={styles.container}>
            <Text>Screen 3</Text>
        </View>
    );
};

const MyBottomTab = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null, // Hide labels
                tabBarActiveTintColor: 'black',  // Active tab icon color
                tabBarInactiveTintColor: 'gray', // Inactive tab icon color
            }}
        >
            <BottomTab.Screen
                name="Screen1"
                component={MyTopTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" type="ionicon" color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='map-outline' type='ionicon'/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bookmarks-outline" type="ionicon"/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Screen4"
                component={Screen3}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-circle-outline" type="ionicon"/>
                    ),
                }}

            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyBottomTab;
