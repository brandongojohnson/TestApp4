import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Module from './Module';
import PersonFeed from './PersonFeed';


const CastType = () => {
  return (
    <View style={styles.box}>
      <View></View>
    </View>
  )
}

const MusicInfo = () =>{
  return(
    <View style={{flexDirection:"row", alignItems:"center", marginBottom:8}}>
      <View  style={{width:75, aspectRatio:1, marginRight:10, backgroundColor:"steelblue", borderRadius:10}}></View>
      <View>
        <Text style={{fontWeight:600, fontSize:17.5, color:"white"}}>Kill Bill</Text>
        <Text style={{fontWeight:300, color:"white"}}>SZA!</Text>
      </View>
    </View>
  )
}

const Screen = () =>{
  const songs = []

  for(var i=0;i<5;i++){
    songs.push(<MusicInfo/>)
  }
  return(
    <View style={{backgroundColor:"black", padding: 10, borderRadius:10}}>
      {songs}
    </View>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
   
      <PersonFeed/>
      <PersonFeed/>

      {/* <Module/> */}

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:15,
    backgroundColor:"pink",
    backgroundColor:"#f0f2f5",
    flex:1
  },
  box:{
    height:150,
    backgroundColor:"#D9D9D9",
    // margin:10
  }
});

