import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../components/ActivitiesList";
import ActivitiesHeader from "../components/ActivitiesHeader";
import AddButton from "../components/AddButton";

export default function AllActivities({ navigation }) {
  function handleAdd() {
    navigation.navigate("AddAnActivity");
  }
  return (
    <View style={styles.container}>
      <View>
        <ActivitiesHeader type="all" />
        <AddButton onAdd={handleAdd} />
      </View>
      {/* <ActivitiesList type="all" /> */}
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
