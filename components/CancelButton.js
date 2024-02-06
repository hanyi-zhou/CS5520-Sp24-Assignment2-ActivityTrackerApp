import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function CancelButton({ onCancel }) {
  function cancelHandler() {
    onCancel();
  }

  return (
    <View>
      <Button title="Cancel" onPress={cancelHandler} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({});
