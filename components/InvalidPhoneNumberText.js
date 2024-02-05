import { StyleSheet, Text, View } from "react-native";
import React from "react";

// The InvalidPhoneNumberText component is a simple component that
// displays a message to the user when the phone number is valid.
export default function InvalidPhoneNumberText() {
  return (
    <View>
      <Text>Please enter a valid phone number.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
