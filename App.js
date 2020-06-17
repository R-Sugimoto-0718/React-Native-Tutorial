import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Platform
} from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container_text} numberOfLines={1} onPress={handlePress}>Most components can be customized when they are created</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        {/* <View style={{ width: 200, height: 70, backgroundColor: "blue" }}></View> */}
        {/* <Image source={require('./assets/icon.png')}/> */}
        <Image
          fadeDuration={1000}
          source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
          }}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container_text: {
    textAlign: "center",
    padding: 8,
    fontSize: 25
  }
});