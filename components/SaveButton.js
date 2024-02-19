import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { saveButtonColor } from "../Styles";

// The SaveButton component is a simple component that displays a
// button to save an activity and go back to the previous screen.
export default function SaveButton({ onSave }) {
  function saveHandler() {
    onSave();
  }

  return (
    <View>
      <Button title="Save" onPress={saveHandler} color={saveButtonColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
