import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

// The EmailInput component is a controlled component that takes
// in a value and a function to handle the change of the value.
export default function EmailInput({ value, onEmailChange }) {
  function changeEmailHandler(email) {
    onEmailChange(email);
  }

  return (
    <View>
      <TextInput value={value} onChangeText={changeEmailHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
