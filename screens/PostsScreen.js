import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

export default function PostsScreen({ route }) {
  // console.log("from create", route.params);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postWrapper}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    paddingTop: 32,
    // justifyContent: "flex-end",
  },
  postWrapper: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  photo: {
    // marginHorizontal: 10,
    height: 240,
    width: 350,
    borderRadius: 8,
  },
});
