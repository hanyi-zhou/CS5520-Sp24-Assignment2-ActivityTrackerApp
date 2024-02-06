import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

// The CancelButton component is a simple component that displays a
// button to cancel the form and go back to the previous screen.
export default function CancelButton({ onCancel }) {
  function cancelHandler() {
    onCancel();
  }

  return (
    <View>
      <Button title="Cancel" onPress={cancelHandler} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({});
