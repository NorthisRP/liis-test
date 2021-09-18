import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../globalStyles";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={globalStyles.setAbel}>Flights</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: { justifyContent: "flex-end", alignItems: "center", paddingTop: 40 },
});
