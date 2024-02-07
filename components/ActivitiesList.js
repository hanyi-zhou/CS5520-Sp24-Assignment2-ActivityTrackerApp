import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useActivitiesList } from "./ActivitiesListContext";
import { activitiesListStyles } from "../Styles";

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
    <View style={styles.container}>
      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.typeText}>{item.type}</Text>
            <Text>{validateActivitySpecial(item) ? "⚠️" : null}</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.detailText}>{item.duration} min</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesListStyles.container,
  itemContainer: activitiesListStyles.itemContainer,
  typeText: activitiesListStyles.typeText,
  dateText: activitiesListStyles.dateText,
  detailText: activitiesListStyles.detailText,
  flatListContainer: activitiesListStyles.flatListContainer,
  detailContainer: activitiesListStyles.detailContainer,
});
