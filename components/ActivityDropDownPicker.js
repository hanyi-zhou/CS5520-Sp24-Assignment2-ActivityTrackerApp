import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { activityDropDownPickerStyles } from "../Styles";

// The ActivityDorpDownPicker component is a simple component that
// displays a dropdown picker to select an activity.
export default function ActivityDorpDownPicker({ onActivityChange }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  // The items state is an array of objects that represent the
  // activities that can be selected.
  const [items, setItems] = React.useState([
    { label: "Running", value: "Running" },
    { label: "Walking", value: "Walking" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ]);

  // The handleActivityChange function is called when the user selects
  // an activity from the dropdown picker. It calls the onActivityChange
  // function with the new activity.
  function handleActivityChange(activity) {
    onActivityChange(activity);
  }

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select An Activity"
      onChangeValue={handleActivityChange}
      containerStyle={styles.containerStyle}
      textStyle={styles.textStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: activityDropDownPickerStyles.container,
  textStyle: activityDropDownPickerStyles.textStyle,
});
