import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';

export const EventOG = () => {
    return (
        <View style={{ backgroundColor: "white", width: 320, borderRadius: 20, marginHorizontal: "auto", marginTop: 25, shadowColor: "black", shadowRadius: 20, shadowOpacity: .1, overflow: "hidden" }}>
            <View style={{ margin: 16, flexDirection: "row" }}>
                <View style={{ width: 40, height: 40, backgroundColor: "#F2C14E", borderRadius: 100, marginRight: 12 }}></View>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 600, marginBottom: 2 }}>Jerome shared event</Text>
                    <Text style={{ color: "#9597A1", fontWeight: 400, fontSize: 12 }}>12 April 2019 at 10:47 AM</Text>
                </View>
            </View>
            <View style={{ height: 300, backgroundColor: "#fe2565" }}></View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}

export const EventCard = () => {
    return (
        <View style={{ backgroundColor: "white", width: 320, borderRadius: 20, marginHorizontal: "auto", marginTop: 25, shadowColor: "black", shadowRadius: 20, shadowOpacity: .1, overflow: "hidden" }}>

            <View style={{ height: 230, backgroundColor: "#fe2565" }}></View>
            <View style={{ margin: 16, flexDirection: "row" }}>
                <View style={{ width: 40, height: 40, backgroundColor: "#F2C14E", borderRadius: 100, marginRight: 12 }}></View>
                <View style={{ flexWrap: "wrap" }}>
                    <Text style={{ fontSize: 17, fontWeight: 600, marginBottom: 2 }}>Jerome shared event</Text>
                    <Text style={{ color: "#9597A1", fontWeight: 400, fontSize: 12 }}>12 April 2019 at 10:47 AM</Text>
                </View>
            </View>
            <View style={{paddingHorizontal:20, paddingBottom:25}}>
                <Text style={{textWeight:700}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate justo.
                </Text>
            </View>
            <View></View>
            <View></View>
        </View>
    )
}
