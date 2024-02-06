import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivityDropDownPicker from "../components/ActivityDropDownPicker";
import DurationInput from "../components/DurationInput";
import DatePicker from "../components/DatePicker";
import CancelButton from "../components/CancelButton";

export default function AddAnActivity({ navigation }) {
  const [activity, setActivity] = React.useState("");
  const [duration, setDuration] = React.useState("");

  function handleDurationChange(duration) {
    setDuration(duration);
  }

  function validateDurationInput(duration) {
    const isNumber = /^[0-9]+$/.test(duration);
    // If the phone number is not a number or is empty or is negative
    if (!isNumber || duration.length === 0 || parseInt(duration) < 0) {
      return false;
    }
    return true;
  }

  function handleCancel() {
    setActivity("");
    setDuration("");
    navigation.goBack();
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
      <View>
        <Text>Date *</Text>
        <DatePicker />
      </View>
      <View>
        <CancelButton onCancel={handleCancel} />
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
