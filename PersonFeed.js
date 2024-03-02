import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PersonFeed() {
    return (
        <View style={styles.container}>
            <Info/>
            <PictureGrid />
        </View>
    )
}
const Info = () =>{
    return(
        <View style={styles.infoContainer}>
            <View style={styles.profilePic}></View>
            <View>
                <Text style={[styles.infoText, {fontWeight:700}]}>Vintage Denim Jacket</Text>
                <Text style={[styles.infoText, {color:"#888"}]}>Owned for 5 Years</Text>
            </View>
        </View>
    )
}

const PictureGrid = () => {
    const pics = []

    for (var i = 0; i < 6; i++) {
        pics.push(
            <View style={styles.box}></View>
        )
    }
    return (
        <View style={styles.picsContainer}>
            {pics}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        backgroundColor: "white",
        padding:5,
        borderRadius:30,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowRadius:20,
        shadowOpacity: .08,
        marginBottom:20
    },
    picsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding:5
    },
    box: {
        flexBasis: "calc(33.33% - 12px)",
        aspectRatio:1,
        backgroundColor: "#D9D9D9",
        borderRadius:20,
        margin: 6,
    },
    profilePic:{
        width: 75,
        aspectRatio:1,
        backgroundColor:"#D9D9D9",
        borderRadius:100,
        marginRight:13
    },
    infoContainer:{
        flexDirection:"row",
        margin:10,
        alignItems:"center"
    },
    infoText:{
        fontSize:15
    }
})

