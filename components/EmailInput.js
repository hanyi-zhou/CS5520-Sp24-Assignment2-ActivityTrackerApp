import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { inputContainerStyle } from "../Styles";

// The EmailInput component is a controlled component that takes
// in a value and a function to handle the change of the value.
export default function EmailInput({ value, onEmailChange }) {
  function changeEmailHandler(email) {
    onEmailChange(email);
  }

  return (
    <TextInput
      value={value}
      onChangeText={changeEmailHandler}
      style={styles.inputContainer}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: inputContainerStyle,
});
