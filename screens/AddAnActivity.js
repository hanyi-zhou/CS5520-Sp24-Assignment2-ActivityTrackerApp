import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivityDorpDownPicker from "../components/ActivityDorpDownPicker";

export default function AddAnActivity() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Activity *</Text>
        <ActivityDorpDownPicker />
      </View>
      <View>
        <Text>Duration (min) *</Text>
      </View>
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
