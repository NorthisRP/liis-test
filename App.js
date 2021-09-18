import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/index";
import { NavigateTabs } from "./navigate";

export default function App() {
  const [loaded] = useFonts({
    "abel-regular": require("./src/assets/fonts/abel-regular.ttf"),
    sf: require("./src/assets/fonts/sf.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigateTabs />
      <StatusBar style="auto" />
    </Provider>
  );
}
