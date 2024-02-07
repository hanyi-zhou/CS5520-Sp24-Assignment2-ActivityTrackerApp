import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

// The DateInput component is a controlled component that takes in
// a value and a function to handle the change of the date.
export default function DateInput({ showDatePicker, value }) {
  return (
    <TouchableOpacity onPress={showDatePicker}>
      <TextInput
        onPressIn={showDatePicker}
        value={value}
        editable={false}
        style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
