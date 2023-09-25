import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Posts screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingTop: 32,
    // justifyContent: "flex-end",
  },
});
