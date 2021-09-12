import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "./src/Navbar";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/index";
import Navigate from "./navigate";

export default function App() {
  const [loaded] = useFonts({
    "abel-regular": require("./src/fonts/abel-regular.ttf"),
    sf: require("./src/fonts/sf.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigate />
      <StatusBar style="auto" />
    </Provider>
  );
}
