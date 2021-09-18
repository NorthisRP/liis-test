import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addFavFlight, remFavFlight } from "../store/flightReducer";
import { dictPlaces, dictCarriers } from "../../dict";
import { globalStyles } from "../globalStyles";

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

  const favHandler = () => {
    dispatch(addFavFlight(id));
  };

  const unfavHandler = () => {
    dispatch(remFavFlight(id));
  };

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.plane}>
          <Image source={require("../assets/icons/plane.png")} />
        </View>
        {fav ? (
          <TouchableOpacity style={styles.fav} onPress={unfavHandler}>
            <Image source={require("../assets/icons/fav.png")} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.fav} onPress={favHandler}>
            <Image source={require("../assets/icons/nonefav.png")} />
          </TouchableOpacity>
        )}
        <View style={styles.description}>
          <View style={styles.places}>
            <Text style={globalStyles.setAbel}>{dictPlaces[origin]}</Text>
            <Text style={globalStyles.setAbel}>{" -> "}</Text>
            <Text style={globalStyles.setAbel}>{dictPlaces[destination]}</Text>
          </View>
          <View>
            <Text style={globalStyles.setSF}>
              {"VKO - " +
                new Date(date).toDateString() +
                " - " +
                new Date(date).toLocaleTimeString()}
            </Text>
          </View>
          <View>
            <Text style={globalStyles.setSF}>{dictCarriers[carrier]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={globalStyles.setAbel}>{"Price: " + price + " ₽"}</Text>
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
