import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import ActivityDropDownPicker from "../components/ActivityDropDownPicker";
import DurationInput from "../components/DurationInput";
import DatePicker from "../components/DatePicker";
import CancelButton from "../components/CancelButton";
import SaveButton from "../components/SaveButton";
import { useActivitiesList } from "../components/ActivitiesListContext";

export default function AddAnActivity({ navigation }) {
  const { addActivity } = useActivitiesList();
  const [activity, setActivity] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [date, setDate] = React.useState(null);

  function handleActivityChange(activity) {
    setActivity(activity);
  }

  function handleDurationChange(duration) {
    setDuration(duration);
  }

  function handleDateChange(date) {
    setDate(date);
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

  function handleSave() {
    // Validate the duration
    const isDurationValid = validateDurationInput(duration);
    // If the duration is not valid or the activity is empty or the date is empty
    if (!isDurationValid || activity.length === 0 || !date) {
      // Show an alert
      Alert.alert("Invalid input", "Please check your input values");
    } else {
      // Create a new activity object
      const newActivity = {
        id: Math.random().toString(), // Generate a random id
        type: activity,
        duration: parseInt(duration),
        date: date.toDateString(),
      };
      console.log(newActivity);
      // Add the new activity to the activities list
      addActivity(newActivity);

      // Clear the input fields
      setActivity("");
      setDuration("");
      setDate(null);

      // Navigate back to the previous screen
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Activity *</Text>
        <ActivityDropDownPicker onActivityChange={handleActivityChange} />
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
        <DatePicker onDateChange={handleDateChange} />
      </View>
      <View>
        <CancelButton onCancel={handleCancel} />
        <SaveButton onSave={handleSave} />
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
