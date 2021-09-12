import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Abel({ text }) {
  return <Text style={styles.h1}>{text}</Text>;
}
const styles = StyleSheet.create({
  h1: { fontFamily: "abel-regular", fontWeight: "400", fontSize: 20 },
});
