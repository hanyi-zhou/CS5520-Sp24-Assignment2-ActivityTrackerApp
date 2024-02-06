import { StyleSheet, Button, View } from "react-native";
import React from "react";

// The ConfirmButton component is a simple component that displays a
// button to confirm the form.
export default function StartButton({ onStart, isInputEmpty }) {
  function startHandler() {
    onStart();
  }

  return (
    <View>
      <Button title="Start" onPress={startHandler} disabled={isInputEmpty} />
    </View>
  );
}

const styles = StyleSheet.create({});
