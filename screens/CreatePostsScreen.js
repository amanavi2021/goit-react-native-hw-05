import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PhotoSvg from "../assets/images/photo.svg";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <Image style={styles.photo} />
        <Text style={styles.photoTitle}>Завантажте фото</Text>
        {/* <DeleteSvg style={styles.deleteIcon} width={37} height={37} />  */}
        <View style={styles.iconWrapper}>
          <PhotoSvg fill={"#BDBDBD"} width={24} height={24} />
        </View>
      </View>
      {/* <View style={styles.header}> */}

      {/* </View>  */}
      <View style={styles.wrapper}></View>
      <View style={styles.form}>
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Увійти</Text>
        </View> */}
        <View>
          <TextInput
            style={{
              ...styles.input,
              // borderColor: hasFocusEmail ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Назва..."
            placeholderTextColor={"#BDBDBD"}
            // value={state.email}
            // onFocus={() => handleFocusEmail()}
            // onBlur={() => setHasFocusEmail(false)}
            // onChangeText={(value) =>
            //   setState((prevState) => ({ ...prevState, email: value }))
            // }
          />
        </View>
        <View style={{ marginTop: 16, position: "relative" }}>
          <TextInput
            style={{
              ...styles.input,
              // borderColor: hasFocusPassword ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Місцевість.."
            placeholderTextColor={"#BDBDBD"}
            // value={state.password}
            // onFocus={() => handleFocusPassword()}
            // onBlur={() => setHasFocusPassword(false)}
            // onChangeText={(value) =>
            //   setState((prevState) => ({
            //     ...prevState,
            //     password: value,
            //   }))
            // }
            // secureTextEntry={!showPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          // onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 32,
  },
  photoWrapper: {
    // position: "relative",
  },
  photo: {
    position: "relative",
    width: 341,
    height: 240,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    marginRight: "auto",
    marginLeft: "auto",
  },
  photoTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8,
  },
  iconWrapper: {
    position: "absolute",
    bottom: 120,
    left: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  btn: {
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "transparent",
  },
  btnTitle: {
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },

  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   zIndex: -1,
  // },
  // wrapper: {
  //   backgroundColor: "#fff",
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  // },

  // header: {
  //   alignItems: "center",
  //   marginTop: 92,
  //   marginBottom: 32,
  // },

  // deleteIcon: {
  //   position: "absolute",
  //   right: 128,
  //   top: 18,
  // },
  // logOutIcon: {
  //   position: "absolute",
  //   right: 16,
  //   top: 22,
  // },
});
