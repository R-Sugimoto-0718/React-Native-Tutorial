import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Most components can be customized when they are created, with different parameters. These creation parameters are called props.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BC1B1',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});