import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { inputContainerStyle } from "../Styles";

// The PhoneNumberInput component is a controlled component that takes
// in a value and a function to handle the change of the value.
export default function PhoneNumberInput({ value, onPhoneNumberChange }) {
  function changePhoneNumberHandler(phoneNumber) {
    onPhoneNumberChange(phoneNumber);
  }
  return (
    <TextInput
      value={value}
      onChangeText={changePhoneNumberHandler}
      keyboardType="numeric"
      maxLength={10}
      style={styles.inputContainer}
    />
  );
}

const styles = StyleSheet.create({ inputContainer: inputContainerStyle });
