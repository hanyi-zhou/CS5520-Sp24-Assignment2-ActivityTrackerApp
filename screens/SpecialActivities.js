import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../components/ActivitiesList";
import { activitiesScreenStyles } from "../Styles";

// The SpecialActivities screen is a simple screen that displays
// a list of special activities.
export default function SpecialActivities() {
  return (
    <View style={styles.container}>
      <ActivitiesList type="special" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesScreenStyles.container,
});
