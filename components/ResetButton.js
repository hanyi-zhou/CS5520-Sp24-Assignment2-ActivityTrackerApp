import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

// The ResetButton component is a simple component that displays a
// button to reset the form.
export default function ResetButton({ onReset }) {
  function resetHandler() {
    onReset();
  }

  return (
    <View>
      <Button title="Reset" onPress={resetHandler} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({});
