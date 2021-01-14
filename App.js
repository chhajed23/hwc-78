import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupLoginScreen from "./screens/LoginScreen";
import { AppTabNavigator } from "./components/appTabNavigator";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: { screen: SignupLoginScreen },
  AppTabNavigator: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
