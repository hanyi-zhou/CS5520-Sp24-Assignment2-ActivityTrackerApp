import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

// The AddButton component is a simple component that displays a
// button to add a new activity.
export default function AddButton({ onAdd }) {
  function addHandler() {
    onAdd();
  }
  return (
    <View>
      <Button title="Add" onPress={addHandler} color="yellow" />
    </View>
  );
}

const styles = StyleSheet.create({});
