import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import BrowseFlightItem from "./BrowseFlightItem";

export default function Favourites() {
  const data = useSelector((state) => state.flights).filter(
    (obj) => obj.fav === true
  );

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BrowseFlightItem
            price={item.MinPrice}
            carrier={item.OutboundLeg.CarrierIds}
            origin={item.OutboundLeg.OriginId}
            destination={item.OutboundLeg.DestinationId}
            date={item.OutboundLeg.DepartureDate}
            id={item.QuoteId}
            fav={item.fav}
          />
        )}
        keyExtractor={(item) => item.QuoteId.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: "#F8F8F8" },
});
