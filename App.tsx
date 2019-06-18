import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/modules/store";
import { SliderContainer } from "./src/components/Slider.container";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>{">>>> TODO <<<<"}</Text>
        <Text>Here you should replace that by:</Text>
        <Text>- a button to submit on bottom of the page</Text>
        <Text>- a slider vertically centred compared to the page with:</Text>
        <Text>---> a vertical line (width 3)</Text>
        <Text>
          ---> a mobile slider handle (circle of diameter 30, but the touch area
          should be 42)
        </Text>
        <Text>- a moving label on the left:</Text>
        <Text>
          - a scale on the right: from 100cm to 250cm (configurable with the
          redux store min/max)
        </Text>
        <Text>-------</Text>
        <SliderContainer currentQuestion={10} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20
  }
});
