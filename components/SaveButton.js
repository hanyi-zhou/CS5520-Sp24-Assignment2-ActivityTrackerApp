import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

// The SaveButton component is a simple component that displays a
// button to save an activity and go back to the previous screen.
export default function SaveButton({ onSave }) {
  function saveHandler() {
    onSave();
  }

  return (
    <View>
      <Button title="Save" onPress={saveHandler} color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({});
