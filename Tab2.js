import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const Tab2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [labelAnim] = useState(new Animated.Value(20));

  const handleInputChange = (text) => {
    setInputValue(text);
    if (text.length > 0) {
      Animated.timing(labelAnim, {
        toValue: 15,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(labelAnim, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, { fontSize: labelAnim }]}>
        Label
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default Tab2;
