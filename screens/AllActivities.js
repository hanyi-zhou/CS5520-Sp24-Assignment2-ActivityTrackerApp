import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivitiesListContext } from "../components/ActivitiesListContext";

export default function AllActivities() {
  const activities = React.useContext(ActivitiesListContext);
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
