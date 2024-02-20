import React, { useState } from 'react';
import { ScrollView, StyleSheet, Animated, View } from 'react-native';

const Module = () => {
    const [scrollY] = useState(new Animated.Value(0));

    const boxSize = scrollY.interpolate({
        inputRange: [0, 300], // Change these values as needed
        outputRange: [100, 50], // Change these values as needed
        extrapolate: 'clamp',
    });

    return (
        <ScrollView
            style={styles.scrollView}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
            )}
        >
            <View style={styles.container}>
                <Animated.View style={[styles.box, { width: boxSize, height: boxSize }]} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'red',
    },
});

export default Module;
