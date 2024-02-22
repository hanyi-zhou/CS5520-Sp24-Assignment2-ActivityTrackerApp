import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { pressableButtonStyles } from "../Styles";

export default function PressableButton({
  customStyle,
  onPressFunction,
  isDisabled,
  children,
}) {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        isDisabled && styles.disabled,
        pressed && styles.pressed,
      ]}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: pressableButtonStyles.defaultStyle,
  pressed: pressableButtonStyles.pressed,
  disabled: pressableButtonStyles.disabled,
});
