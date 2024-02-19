import { StyleSheet, View, Button } from "react-native";
import React from "react";
import { cancelButtonColor } from "../Styles";

// The CancelButton component is a simple component that displays a
// button to cancel the form and go back to the previous screen.
export default function CancelButton({ onCancel }) {
  function cancelHandler() {
    onCancel();
  }

  return (
    <View>
      <Button
        title="Cancel"
        onPress={cancelHandler}
        color={cancelButtonColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
