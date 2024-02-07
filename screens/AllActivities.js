import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../components/ActivitiesList";

// The AllActivities screen is a simple screen that displays
// a list of all activities.
export default function AllActivities() {
  return (
    <View style={styles.container}>
      <ActivitiesList type="all" />
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
