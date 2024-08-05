import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        width: 320,
        borderRadius: 20,
        marginHorizontal: "auto",
        marginTop: 25,
        shadowColor: "black",
        shadowRadius: 20,
        shadowOpacity: 0.1,
        overflow: "hidden",
    },
    cardContentContainer: {
        margin: 16,
        flexDirection: "row",
    },
    cardAvatar: {
        width: 40,
        height: 40,
        backgroundColor: "#F2C14E",
        borderRadius: 100,
        marginRight: 12,
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 2,
    },
    cardDate: {
        color: "#9597A1",
        fontWeight: "500",
        fontSize: 13.5,
        fontFamily:"Inter Regular"
    },
    cardImage: {
        height: 300,
        backgroundColor: "#fe2565",
    },
    wrappedTextContainer: {
        flexWrap: "wrap",
        width:"90%"
    },
    tabPadding: {
        paddingHorizontal: 20,
        paddingBottom: 25,
    },
    tabTextWeight: {
        fontWeight: "700",
    },
    eventTab2Container: {
        backgroundColor: "white",
        width: 320,
        borderRadius: 20,
        marginHorizontal: "auto",
        marginTop: 15,
        shadowColor: "black",
        shadowRadius: 64,
        shadowOpacity: 0.1,
        shadowOffset:{width:0,height:24},
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
    },
    eventTab2Image: {
        width: 100,
        aspectRatio:1,
        // height: 85,
        // flex:1,
        backgroundColor: "#F2C14E",
        borderRadius: 16,
        marginRight: 20,
    },
    eventTab2Title: {
        fontSize: 15,
        fontWeight: "900",
        marginBottom: 10,
        marginTop:17,
        fontFamily: "Inter Regular",
    },
    eventTab2Description: {
        fontWeight: "700",
        fontFamily: "Inter Regular",
        color:"red",
        fontSize: 13,
    }
});

export const EventCardOG = ({ title }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContentContainer}>
                <View style={styles.cardAvatar}></View>
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardDate}>Lorem ipsum dolor sit amet consectetur  </Text>
                </View>
            </View>
            <View style={styles.cardImage}></View>
        </View>
    )
}

export const EventCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={{ height: 280, backgroundColor: "#fe2565" }}></View>
            <View style={styles.cardContentContainer}>
                <View style={styles.cardAvatar}></View>
                <View style={styles.wrappedTextContainer}>
                    <Text style={styles.cardTitle}>Jerome shared event</Text>
                    <Text style={styles.cardDate}>12 April 2019 at 10:47 AM</Text>
                </View>
            </View>
        </View>
    )
}

// export const EventTab = () => {
//     return (
//         <View style={styles.cardContainer}>
//             <View style={styles.cardContentContainer}>
//                 <View style={styles.cardAvatar}></View>
//                 <View style={styles.wrappedTextContainer}>
//                     <Text style={styles.cardTitle}>Jerome shared event</Text>
//                     <Text style={styles.cardDate}>12 April 2019 at 10:47 AM</Text>
//                 </View>
//             </View>
//             <View style={styles.tabPadding}>
//                 <Text style={styles.tabTextWeight}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate justo.
//                 </Text>
//             </View>
//         </View>
//     )
// }

export const EventTab2 = () => {
    return (
        <View style={styles.eventTab2Container}>
            <View style={styles.eventTab2Image}></View>
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <View style={styles.wrappedTextContainer}>
                    <Text style={styles.eventTab2Title}>Jerome shared event</Text>
                    <Text style={styles.cardDate}>Lorem ipsum dolor sit amet consectetur </Text>
                </View>
                <View>
                    <Text style={styles.eventTab2Description}>
                       
                    </Text>
                </View>
            </View>
        </View>
    )
}
