import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../components/ActivitiesList";
import ActivitiesHeader from "../components/ActivitiesHeader";
import AddButton from "../components/AddButton";

export default function SpecialActivities({ navigation }) {
  function handleAdd() {
    navigation.navigate("Add An Activity");
  }
  return (
    <View style={styles.container}>
      <View>
        <ActivitiesHeader type="special" />
        <AddButton onAdd={handleAdd} />
      </View>
      <ActivitiesList type="special" />
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
