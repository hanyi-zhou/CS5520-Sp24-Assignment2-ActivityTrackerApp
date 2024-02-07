import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function DateInput({ showDatePicker, value }) {
  return (
    <View>
      <TextInput
        onPressIn={showDatePicker} // Show the date picker when the input is pressed
        value={value}
        editable={false}
        style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
