import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
