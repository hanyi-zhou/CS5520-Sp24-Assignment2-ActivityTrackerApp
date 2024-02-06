import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AddAnActivity() {
  return (
    <View style={styles.container}>
      <Text>AddAnActivity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
