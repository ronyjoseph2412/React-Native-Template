import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex flex-col items-center justify-center text-center bg-white">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <HomeScreen />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

registerRootComponent(App);
