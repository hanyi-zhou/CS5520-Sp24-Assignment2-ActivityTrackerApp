import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

// The PhoneNumberInput component is a controlled component that takes
// in a value and a function to handle the change of the value.
export default function PhoneNumberInput({ value, onPhoneNumberChange }) {
  function changePhoneNumberHandler(phoneNumber) {
    onPhoneNumberChange(phoneNumber);
  }
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={changePhoneNumberHandler}
        keyboardType="numeric"
        maxLength={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
