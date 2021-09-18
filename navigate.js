import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Browse from "./src/components/Browse";
import Favourites from "./src/components/Favourites";
import FlightItem from "./src/components/FlightItem";
import { globalStyles } from "./src/globalStyles";
import Navbar from "./src/components/Navbar";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarLabelStyle: [globalStyles.setAbel, { fontSize: 17 }],
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ tabBarLabel: "Browse" }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{ tabBarLabel: "Favourites" }}
      />
    </Tab.Navigator>
  );
}

export function NavigateTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Flight"
          component={MyTabs}
          options={{
            headerTitleStyle: globalStyles.setAbel,
            headerStyle: {
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={FlightItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
