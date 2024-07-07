import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';

const Element = () => {
    return (
        <View style={{ width: "100%", marginTop: 10, backgroundColor: "#AA3177", borderRadius: 25, padding: 5 }}>

            <View style={{ borderRadius: 20, backgroundColor: "white", width: "100%", height: 183 }}>
                {/* <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                /> */}
            </View>
            <View style={{width:"80%", }}>
                <Text style={{ marginLeft: 16, marginTop: 15, color: "white", fontSize: 20, fontWeight: 700 }}>Card Title</Text>
                <Text style={{ marginLeft: 16, marginTop: 15, color: "white", fontSize: 15, lineHeight: 20, marginBottom:41, fontWeight:200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing elit. Intege</Text>
            </View>
        </View>
    );
};

const Test = () =>{
    return(
        <View style={{backgroundColor:"white", width:320, borderRadius: 20, marginHorizontal:"auto", marginTop:25, shadowColor:"black", shadowRadius:20, shadowOpacity:.1, overflow:"hidden"}}>
            <View style={{margin:16, flexDirection: "row"}}>
                <View style={{width:40, height:40, backgroundColor:"#F2C14E", borderRadius:100, marginRight:12}}></View>
                <View>
                    <Text style={{fontSize:17, fontWeight:600, marginBottom:2}}>Jerome shared event</Text>
                    <Text style={{color:"#9597A1", fontWeight:400, fontSize:12}}>12 April 2019 at 10:47 AM</Text>
                </View>
            </View>
            <View style={{height:300, backgroundColor:"#fe2565"}}></View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}

const Test2 = () =>{
    return(
        <View style={{backgroundColor:"white", width:320, borderRadius: 20, marginHorizontal:"auto", marginTop:25, shadowColor:"black", shadowRadius:20, shadowOpacity:.1, overflow:"hidden"}}>
            
            <View style={{height:300, backgroundColor:"#fe2565"}}></View>
            <View style={{margin:16, flexDirection: "row"}}>
                <View style={{width:40, height:40, backgroundColor:"#F2C14E", borderRadius:100, marginRight:12}}></View>
                <View>
                    <Text style={{fontSize:17, fontWeight:600, marginBottom:2}}>Jerome shared event</Text>
                    <Text style={{color:"#9597A1", fontWeight:400, fontSize:12}}>12 April 2019 at 10:47 AM</Text>
                </View>
            </View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}

const Screen1 = () => {
    return (
        <View style={{ paddingHorizontal: 13, backgroundColor:"#eff2f9" }}>
            <Test/>
        </View>
    );
};

const Screen2 = () => {
    return (
        <View style={{ paddingHorizontal: 13, backgroundColor:"#eff2f9" }}>
            <Test2/>
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
            <View style={{backgroundColor: "white", justifyContent:"flex-end"}}>
                <View style={{width:"80%", height:35, backgroundColor:"#e9eef0", marginHorizontal:"auto", borderRadius:50, marginVertical:15}}></View>
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
        backgroundColor:'#eff2f9'
    },
});

export default MyTopTab;
