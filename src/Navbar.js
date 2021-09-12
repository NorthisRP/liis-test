import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Abel from "./fonts/Abel";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Abel text={"Flights"} />
      <View style={styles.slider}>
        <View style={styles.slide} onPress={loadBrowse}>
          <Abel text={"Favourites"} />
        </View>
        <View style={styles.slide} onPress={loadFavourites}>
          <Abel text={"Browse"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: { height: 140, justifyContent: "flex-end", alignItems: "center" },
  slider: {
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  slide: {
    marginHorizontal: 20,
    width: "40%",
    alignItems: "center",
  },
});
