import "react-native-gesture-handler";
import React from "react";
// import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
// import PostsScreen from "./screens/PostsScreen";
import Home from "./screens/Home";
// import AddSvg from "./assets/images/add.svg";
import LogOutSvg from "./assets/images/log-out.svg";

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
