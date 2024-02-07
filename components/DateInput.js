import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { inputContainerStyle } from "../Styles";

// The DateInput component is a controlled component that takes in
// a value and a function to handle the change of the date.
export default function DateInput({ showDatePicker, value }) {
  return (
    <TouchableOpacity onPress={showDatePicker}>
      <TextInput
        onPressIn={showDatePicker}
        value={value}
        editable={false}
        style={styles.inputContainer}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ inputContainer: inputContainerStyle });
