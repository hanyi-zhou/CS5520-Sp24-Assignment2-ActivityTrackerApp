import { StyleSheet, Button, View } from "react-native";
import React from "react";

// The ConfirmButton component is a simple component that displays a
// button to confirm the form.
export default function ConfirmButton({ onConfirm, isInputEmpty }) {
  function confirmHandler() {
    onConfirm();
  }

  return (
    <View>
      <Button
        title="Confirm"
        onPress={confirmHandler}
        disabled={isInputEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
