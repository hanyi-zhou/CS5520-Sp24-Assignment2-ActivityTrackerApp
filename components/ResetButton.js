import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { resetButtonColor } from "../Styles";

// The ResetButton component is a simple component that displays a
// button to reset the form.
export default function ResetButton({ onReset }) {
  function resetHandler() {
    onReset();
  }

  return (
    <View>
      <Button title="Reset" onPress={resetHandler} color={resetButtonColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
