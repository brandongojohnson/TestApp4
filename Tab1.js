import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PersonFeed from './PersonFeed';

const ProfileHeader = () => {
  return (
    <View style={{ height: 185 }}>
      <View style={styles.coverPhoto}></View>
      <View style={styles.profilePic}></View>
    </View>
  )
}

const Tab1 = () => {
  return (
    <ScrollView>
      <ProfileHeader />
      <View style={styles.container}>
        <PersonFeed />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f0f2f5",
    flex: 1
  },
  coverPhoto: {
    height: 150,
    backgroundColor: "#9E2A2B",
    justifyContent: "flex-end",
    overflow: "visible"
  },
  profilePic: {
    width: 100,
    height: 100,
    backgroundColor: "#E3879E",
    top: -75,
    left: 20,
    borderRadius: 20
  }
});

export default Tab1;
