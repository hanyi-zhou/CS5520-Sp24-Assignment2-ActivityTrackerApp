import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { addButtonColor } from "../Styles";

// The AddButton component is a simple component that displays a
// button to add a new activity.
export default function AddButton({ onAdd }) {
  function addHandler() {
    onAdd();
  }
  return (
    <View>
      <Button title="Add" onPress={addHandler} color={addButtonColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
