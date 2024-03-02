import { StyleSheet, View } from "react-native";
import React from "react";
import ActivitiesList from "../components/ActivitiesList";
import { activitiesScreenStyles } from "../Styles";

// The AllActivities screen is a simple screen that displays
// a list of all activities.
export default function AllActivities({ navigation }) {
  return (
    <View style={styles.container}>
      <ActivitiesList type="all" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesScreenStyles.container,
});
