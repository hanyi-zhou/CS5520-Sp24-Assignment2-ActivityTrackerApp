import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

// The DurationInput component is a controlled component that takes
// in a value and a function to handle the change of the value.
export default function DurationInput({ value, onDurationChange }) {
  function changeDurationHandler(duration) {
    onDurationChange(duration);
  }
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={changeDurationHandler}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
