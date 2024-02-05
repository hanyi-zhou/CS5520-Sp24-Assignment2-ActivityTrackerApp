import { StyleSheet, Text, View } from "react-native";
import React from "react";

// The InvalidEmailText component is a simple component that
// displays a message to the user when the email address is invalid.
export default function InvalidEmailText() {
  return (
    <View>
      <Text>Please enter a valid email address.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
