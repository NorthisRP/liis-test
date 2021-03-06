import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFlights } from "../store/flightReducer";
import BrowseFlightItem from "./BrowseFlightItem";
import { TouchableOpacity } from "react-native";

export default function Browse({ navigation }) {
  const data = useSelector((state) => state.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details", item.QuoteId);
            }}
          >
            <BrowseFlightItem
              price={item.MinPrice}
              carrier={item.OutboundLeg.CarrierIds}
              origin={item.OutboundLeg.OriginId}
              destination={item.OutboundLeg.DestinationId}
              date={item.OutboundLeg.DepartureDate}
              id={item.QuoteId}
              fav={item.fav}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.QuoteId.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: "#F8F8F8" },
});
