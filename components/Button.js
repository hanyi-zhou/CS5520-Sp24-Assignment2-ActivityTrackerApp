import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Button({ title, onPress, buttonStyles }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: buttonStyles.button,
  buttonPressed: buttonStyles.buttonPressed,
  buttonText: buttonStyles.buttonText,
});
