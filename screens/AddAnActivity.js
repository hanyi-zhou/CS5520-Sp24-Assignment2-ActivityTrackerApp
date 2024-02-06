import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivityDropDownPicker from "../components/ActivityDropDownPicker";
import DurationInput from "../components/DurationInput";

export default function AddAnActivity() {
  const [duration, setDuration] = React.useState("");

  function handleDurationChange(duration) {
    setDuration(duration);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Activity *</Text>
        <ActivityDropDownPicker />
      </View>
      <View>
        <Text>Duration (min) *</Text>
        <DurationInput
          value={duration}
          onDurationChange={handleDurationChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
  },
});
