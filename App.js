import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import CommentsScreen from "./screens/CommentsScreen";
import MapScreen from "./screens/MapScreen";
// import PostsScreen from "./screens/PostsScreen";
import Home from "./screens/Home";
// import AddSvg from "./assets/images/add.svg";
import ArrowSvg from "./assets/images/arrow-left.svg";

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const MainStack = createStackNavigator();

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTintColor: "#212121",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 17,
            },
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerTintColor: "#212121",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 17,
            },
            headerRight: () => (
              <LogOutSvg
                style={{ position: "absolute", right: 10, bottom: 10 }}
                width={25}
                height={25}
              />
            ),
          }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  arrowSvg: {
    position: "absolute",
    left: -370,
    top: -12,
  },
});
