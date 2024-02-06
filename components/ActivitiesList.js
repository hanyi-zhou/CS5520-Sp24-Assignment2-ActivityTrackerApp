import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useActivitiesList } from "./ActivitiesListContext";

// The ActivitiesList component takes in a type prop and filters the
// activities based on the type. It then renders the filtered activities
// in a FlatList.
export default function ActivitiesList({ type }) {
  const { activities } = useActivitiesList();

  // Filter the activities based on the screen type
  const filteredActivities =
    type === "special"
      ? activities.filter(
          (activity) =>
            (activity.type === "Running" || activity.type === "Weights") &&
            parseInt(activity.duration) > 60
        )
      : activities;

  return (
    <FlatList
      data={filteredActivities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.type}</Text>
          <Text>{item.date}</Text>
          <Text>{item.duration} min</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({});
