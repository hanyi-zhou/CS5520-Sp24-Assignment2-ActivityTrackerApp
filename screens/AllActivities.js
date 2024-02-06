import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivitiesList } from "../components/ActivitiesList";

export default function AllActivities() {
  const activities = React.useContext(ActivitiesList);
  console.log(activities);
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
