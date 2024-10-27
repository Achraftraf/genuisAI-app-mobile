import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function HomeScreen() {
  return (
    <WebView
      style={styles.containerwebvbiew}
      source={{ uri: "https://www.codingwithachrafzarouki.me/" }}
    />
  );
}

const styles = StyleSheet.create({
  containerwebvbiew: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
