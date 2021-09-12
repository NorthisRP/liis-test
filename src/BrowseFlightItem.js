import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Abel from "./fonts/Abel";
import SF from "./fonts/SF";
import { useDispatch } from "react-redux";
import { addFavFlight, remFavFlight } from "./store/flightReducer";

const dictPlaces = {
  82495: "Moscow",
  60987: "New York",
  50290: "New York",
  65633: "New York",
};
const dictCarriers = {
  1324: "KLM",
  1717: "Aeroflot",
  270: "Smartavia",
  1375: "LOT",
  1329: "Unknown",
};

export default function BrowseFlightItem({
  price,
  carrier,
  origin,
  destination,
  date,
  fav,
  id,
}) {
  const dispatch = useDispatch();

  favHandler = () => {
    dispatch(addFavFlight(id));
  };

  const unfavHandler = () => {
    dispatch(remFavFlight(id));
  };

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.plane}>
          <Image source={require("./icons/plane.png")} />
        </View>
        {fav ? (
          <TouchableOpacity style={styles.fav} onPress={unfavHandler}>
            <Image source={require("./icons/fav.png")} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.fav} onPress={favHandler}>
            <Image source={require("./icons/nonefav.png")} />
          </TouchableOpacity>
        )}
        <View style={styles.description}>
          <View style={styles.places}>
            <Abel text={dictPlaces[origin]} />
            <Abel text={" -> "} />
            <Abel text={dictPlaces[destination]} />
          </View>
          <View>
            <SF text={new Date(date).toUTCString()} />
          </View>
          <View>
            <SF text={dictCarriers[carrier]} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Abel text={"Price: " + price + " ₽"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  description: { paddingHorizontal: 20 },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
  places: { flexDirection: "row", flexWrap: "wrap" },
  footer: { alignItems: "flex-end", paddingVertical: 10 },
  fav: { position: "absolute", right: 5, top: 5 },
  plane: { backgroundColor: "#ecefff", padding: 15, borderRadius: 100 },
});
