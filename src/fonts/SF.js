import { StyleSheet, Text } from "react-native";
import React from "react";

export default function SF({ text }) {
  return <Text style={styles.p}>{text}</Text>;
}
const styles = StyleSheet.create({
  p: { fontFamily: "sf", fontWeight: "400", fontSize: 14 },
});
