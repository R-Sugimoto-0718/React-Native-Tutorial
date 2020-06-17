import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
  SafeAreaView,
  Platform,
  Button,
  StatusBar,
  ScrollView
} from 'react-native';

export default function App() {
  // console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  // console.log(Dimensions.get('screen'));

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView>
        <View style={{
          backgroundColor: '#fff',
          width: '100%',
          marginTop: 80,
          // 自動で計算する
          height: landscape ? "100%" : "30%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // alignContentはflextWrapと一緒に使う
          // alignContent: "center",
          // flexWrap: "wrap"
          // columnを下寄せにする
          // flexDirection: "column-reverse",
          // rowを右に寄せる
          // flexDirection: "row-reverse"
        }}>
          <View
            style={{
              backgroundColor: "gold",
              width: 100,
              height: 100,
            }}
          />
          <View
            style={{
              backgroundColor: "tomato",
              width: 100,
              height: 100,
              top: 20,
              left: 20,
              position: "absolute"
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100
            }}
          />
        </View>
        <Text style={styles.container_text} numberOfLines={1} onPress={handlePress}>Most components can be customized when they are created</Text>
        <TouchableHighlight onPress={() => console.log("Image tapped")}>
          {/* <View style={{ width: 200, height: 70, backgroundColor: "blue" }}></View> */}
          {/* 画像の読み込み */}
          {/* <Image source={require('./assets/icon.png')}/> */}
          <Image
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }} />
        </TouchableHighlight>
        <Button
          style={styles.container_button}
          color="#3dc0b1"
          title="Click Me"
          onPress={() =>
            // それぞれのボタンで制御
            // Alert.alert('My title', 'My message', [
            //   {text: "Yes", onPress: () => console.log("yes")},
            //   {text: "No", onPress: () => console.log("no")}
            // ])

            // Androidは今のところ対応していない
            Alert.prompt("My title", "Me message", text => console.log(text))
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const containerStyle = {
  flex: 1,
  // height: 900,
  backgroundColor: '#fff',
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container_text: {
    textAlign: "center",
    padding: 8,
    fontSize: 25
  },
  container_button: {
    marginTop: Platform.OS === 'android' ? 12 : 0
  }
});