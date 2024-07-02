import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';

const Element = () => {
    return (
        <View style={{ width: "100%", marginTop: 10, height: 300, backgroundColor: "#BA76FF", borderRadius: 25, padding: 5 }}>

            <View style={{ borderRadius: 20, backgroundColor: "white", width: "100%", height: 160 }}>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
        </View>
    );
};

const Screen1 = () => {
    return (
        <View style={{ paddingHorizontal: 13 }}>
            <Element />
        </View>
    );
};

const Screen2 = () => {
    return (
        <View style={styles.screen}>
            <Text>Screen2</Text>
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
            <View style={{ height: 50, backgroundColor: "white" }}></View>
            <TopTab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: 'black',
                        bottom: 0,
                        marginHorizontal: "calc(16%)",
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
                <TopTab.Screen name="Home" component={Screen1} />
                <TopTab.Screen name="Settings" component={Screen2} />
                <TopTab.Screen name="Screen3" component={Screen3} />
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
    },
});

export default MyTopTab;
