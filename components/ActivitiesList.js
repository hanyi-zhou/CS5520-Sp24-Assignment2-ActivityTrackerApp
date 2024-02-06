import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useActivitiesList } from "./ActivitiesListContext";

// The ActivitiesList component takes in a type prop and filters the
// activities based on the type. It then renders the filtered activities
// in a FlatList.
export default function ActivitiesList({ type }) {
  const { activities } = useActivitiesList();

  // Validate the activity based on the type and duration
  const validateActivitySpecial = (activity) => {
    if (activity.type === "Running" || activity.type === "Weights") {
      if (parseInt(activity.duration) > 60) {
        return true;
      }
    }
    return false;
  };

  // Filter the activities based on the screen type
  const filteredActivities =
    type === "special"
      ? activities.filter((activity) => validateActivitySpecial(activity))
      : activities;

  return (
    <FlatList
      data={filteredActivities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.type}</Text>
          <Text>{validateActivitySpecial(item) ? "⚠️" : null}</Text>
          <Text>{item.date}</Text>
          <Text>{item.duration} min</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({});
