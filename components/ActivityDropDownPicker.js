import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

// The ActivityDorpDownPicker component is a simple component that
// displays a dropdown picker to select an activity.
export default function ActivityDorpDownPicker({ onActivityChange }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Running", value: "Running" },
    { label: "Walking", value: "Walking" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ]);

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
    />
  );
}

const styles = StyleSheet.create({});
