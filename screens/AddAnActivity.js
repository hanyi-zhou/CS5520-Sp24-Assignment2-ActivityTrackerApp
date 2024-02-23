import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ActivityDropDownPicker from "../components/ActivityDropDownPicker";
import DurationInput from "../components/DurationInput";
import DatePicker from "../components/DatePicker";
import CancelButton from "../components/CancelButton";
import SaveButton from "../components/SaveButton";
import PressableButton from "../components/PressableButton";
import {
  addActivityToDB,
  deleteActivityFromDB,
} from "../firebase-files/fireStoreHelper";
import { useActivitiesList } from "../components/ActivitiesListContext";
import {
  activitiesScreenStyles,
  addAnActivityStyles,
  editStyles,
} from "../Styles";
import { AntDesign } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase-files/firebaseSetup";

// The AddAnActivity screen is a form that allows the user to add a new activity.
export default function AddAnActivity({ route, navigation }) {
  const { addActivity } = useActivitiesList();
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const { editMode, activityId } = route.params;

  // Render the header based on the edit mode
  useEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit" : "Add an Activity",
      headerRight: () => (
        <PressableButton
          customStyle={editStyles.deleteButton}
          onPressFunction={handleDelete}
        >
          <AntDesign name="delete" size={24} color="white" />
        </PressableButton>
      ),
    });
  }, [editMode]);

  // If the edit mode is true, fetch the activity from the database
  useEffect(() => {
    if (editMode) {
      // Fetch the activity from the database
      const fetchActivity = async () => {
        try {
          const docRef = doc(database, "activities", activityId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const activityData = docSnap.data();
            setActivity(activityData.type);
            setDuration(activityData.duration.toString());
            setDate(new Date(activityData.date));
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          console.error("Error getting document:", err);
        }
      };
      fetchActivity();
    }
  }, [editMode, activityId]);

  // Handle delete button press
  function handleDelete() {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            deleteActivityFromDB(activityId);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  }

  // Handle the activity change
  function handleActivityChange(activity) {
    setActivity(activity);
  }

  // Handle the duration change
  function handleDurationChange(duration) {
    setDuration(duration);
  }

  // Handle the date change
  function handleDateChange(date) {
    setDate(date);
  }

  // Validate the duration input
  function validateDurationInput(duration) {
    const isNumber = /^[0-9]+$/.test(duration);
    // If the phone number is not a number or is empty or is negative
    if (!isNumber || duration.length === 0 || parseInt(duration) < 0) {
      return false;
    }
    return true;
  }

  // Handle the cancel button press
  function handleCancel() {
    setActivity("");
    setDuration("");
    navigation.goBack();
  }

  // Validate the activity based on the type and duration
  function validateActivitySpecial(activity) {
    if (activity.type === "Running" || activity.type === "Weights") {
      if (parseInt(activity.duration) > 60) {
        return true;
      }
    }
    return false;
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
        //id: Math.random().toString(), // Generate a random id
        type: activity,
        duration: parseInt(duration),
        date: date.toDateString(),
        special: validateActivitySpecial({
          type: activity,
          duration: duration,
        }),
      };

      // Add the new activity to the database
      //addActivity(newActivity);
      addActivityToDB(newActivity);

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
      <View style={styles.formContainer}>
        <View style={styles.dropDownContainer}>
          <Text style={styles.text}>Activity *</Text>
          <ActivityDropDownPicker
            editMode={editMode}
            activity={activity}
            onActivityChange={handleActivityChange}
          />
        </View>
        <View>
          <Text style={styles.text}>Duration (min) *</Text>
          <DurationInput
            value={duration}
            onDurationChange={handleDurationChange}
          />
        </View>
        <View>
          <Text style={styles.text}>Date *</Text>
          <DatePicker
            editMode={editMode}
            activityDate={date}
            onDateChange={handleDateChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* <CancelButton onCancel={handleCancel} />
          <SaveButton onSave={handleSave} /> */}
          <PressableButton
            customStyle={styles.cancelButton}
            onPressFunction={handleCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </PressableButton>
          <PressableButton
            customStyle={styles.saveButton}
            onPressFunction={handleSave}
          >
            <Text style={styles.buttonText}>Save</Text>
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: activitiesScreenStyles.container,
  formContainer: addAnActivityStyles.formContainer,
  dropDownContainer: addAnActivityStyles.dropDownContainer,
  text: addAnActivityStyles.text,
  buttonContainer: addAnActivityStyles.buttonContainer,
  cancelButton: addAnActivityStyles.cancelButton,
  saveButton: addAnActivityStyles.saveButton,
  buttonText: addAnActivityStyles.buttonText,
});
