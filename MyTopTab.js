import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import { EventCard } from './EventCards';

const Screen1 = () => {
    return (
        <View style={{ paddingHorizontal: 13, backgroundColor: "#eff2f9" }}>
            <Test />
        </View>
    );
};

const Screen2 = () => {
    return (
        <View style={{ paddingHorizontal: 13, backgroundColor: "#eff2f9" }}>
            <EventCard />
        </View>
    );
};

const Screen3 = () => {
    return (
        <View style={styles.screen}>
            <Text>Screen3</Text>
        </View>
    );
};

const TopTab = createMaterialTopTabNavigator();

const MyTopTab = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "white", justifyContent: "flex-end" }}>
                <View style={{ width: "80%", height: 35, backgroundColor: "#e9eef0", marginHorizontal: "auto", borderRadius: 50, marginVertical: 15 }}></View>
            </View>
            <TopTab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: 'black',
                        bottom: 0,
                        marginHorizontal: "calc(9.5%)",
                        marginBottom: 4
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 600
                    },
                    tabBarStyle: {
                        backgroundColor: 'white',
                        borderBottomWidth: 0,
                        elevation: 0,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0,
                    },
                }}
            >
                <TopTab.Screen name="Politics" component={Screen1} />
                <TopTab.Screen name="Music" component={Screen2} />
                <TopTab.Screen name="Tech" component={Screen3} />
                <TopTab.Screen name="Art" component={Screen3} />
                {/* <TopTab.Screen name="Culture" component={Screen3} /> */}
                <TopTab.Screen name="Food" component={Screen3} />


            </TopTab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0, // Optional: add padding if needed
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10, // Space between text and tab navigator
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eff2f9'
    },
});

export default MyTopTab;
