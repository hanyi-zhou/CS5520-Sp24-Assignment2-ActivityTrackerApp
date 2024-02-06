import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AllActivities() {
  return (
    <View style={styles.container}>
      <Text>AllActivities</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
