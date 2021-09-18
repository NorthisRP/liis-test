import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { dictPlaces } from "../../dict";
import { globalStyles } from "../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addFavFlight, remFavFlight } from "../store/flightReducer";

export default function FlightItem({ route }) {
  const dispatch = useDispatch();
  const flight = useSelector((state) => state.flights).filter(
    (flight) => flight.QuoteId === route.params
  )[0];

  const favHandler = () => {
    dispatch(addFavFlight(flight.QuoteId));
  };

  const unfavHandler = () => {
    dispatch(remFavFlight(flight.QuoteId));
  };
  return (
    <View style={styles.window}>
      <Image
        style={styles.background}
        source={require("../assets/images/background.png")}
      />
      <View style={styles.content}>
        {flight.fav ? (
          <TouchableOpacity style={styles.fav} onPress={unfavHandler}>
            <Image source={require("../assets/icons/fav.png")} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.fav} onPress={favHandler}>
            <Image source={require("../assets/icons/nonefav.png")} />
          </TouchableOpacity>
        )}
        <View style={styles.flightInfo}>
          <View>
            <Text style={[globalStyles.setSF]}>
              {new Date(flight.OutboundLeg.DepartureDate).toDateString()}
            </Text>
            <Text style={[globalStyles.setAbel, styles.h1]}>SVO</Text>
            <Text style={[globalStyles.setSF]}>
              {dictPlaces[flight.OutboundLeg.OriginId]}
            </Text>
          </View>
          <View>
            <Text style={[globalStyles.setSF, styles.h1]}>{">"}</Text>
          </View>
          <View>
            <Text style={[globalStyles.setSF]}>
              {new Date(flight.OutboundLeg.DepartureDate).toLocaleTimeString()}
            </Text>
            <Text style={[globalStyles.setAbel, styles.h1]}>JFK</Text>
            <Text style={[globalStyles.setSF]}>
              {dictPlaces[flight.OutboundLeg.DestinationId]}
            </Text>
          </View>
        </View>
        <View style={styles.priceInfo}>
          <View>
            <Text style={[globalStyles.setAbel, styles.priceInfoText]}>
              Price
            </Text>
            <Text style={[globalStyles.setAbel, styles.priceInfoTitle]}>
              {flight.MinPrice + " ₽"}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={[globalStyles.setAbel, styles.priceInfoText]}>
              Boarding
            </Text>
            <Text style={[globalStyles.setAbel, styles.priceInfoTitle]}>
              19:20
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <Image source={require("../assets/images/car1.png")} />
          <Image source={require("../assets/images/car2.png")} />
          <Image source={require("../assets/images/car1.png")} />
          <Image source={require("../assets/images/car2.png")} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  window: { height: "100%" },
  background: { width: "100%" },
  content: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 25,
    position: "absolute",
    bottom: 0,
    zIndex: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flightInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  priceInfo: {
    marginVertical: 20,
    backgroundColor: "#1157A7",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
  },
  priceInfoText: { color: "white", fontSize: 13, textAlign: "center" },
  priceInfoTitle: { color: "white", fontSize: 20 },
  h1: { fontSize: 36 },
  fav: { position: "absolute", right: 15, top: 15 },
  line: { width: 1, height: 50, backgroundColor: "white" },
});
