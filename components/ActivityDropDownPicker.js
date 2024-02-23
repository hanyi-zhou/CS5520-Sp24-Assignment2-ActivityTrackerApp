import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
// import DropDownPicker from "react-native-dropdown-picker";
import { activityDropDownPickerStyles } from "../Styles";
import { SelectList } from "react-native-dropdown-select-list";

// The ActivityDorpDownPicker component is a simple component that
// displays a dropdown picker to select an activity.
export default function ActivityDorpDownPicker({
  activity,
  editMode,
  onActivityChange,
}) {
  // To fix the issue with dropdown picker scroll bugs on Android,
  // I have to use react-native-dropdown-select-list instead.
  const [selected, setSelected] = React.useState("");

  // The useEffect hook is called when the activity prop changes.
  // It sets the selected state to the new activity.
  useEffect(() => {
    setSelected(activity);
  }, [activity]);

  // The handleActivityChange function is called when the user selects
  // an activity from the dropdown picker. It calls the onActivityChange
  // function with the new activity.
  function handleActivityChange(activity) {
    onActivityChange(activity);
    setSelected(activity);
  }

  const data = [
    { key: "1", value: "Running" },
    { key: "2", value: "Walking" },
    { key: "3", value: "Swimming" },
    { key: "4", value: "Weights" },
    { key: "5", value: "Yoga" },
    { key: "6", value: "Cycling" },
    { key: "7", value: "Hiking" },
  ];

  // The defaultOption is an object that represents the selected
  // activity. If the selected activity is null, the defaultOption
  // is null.
  const defaultOption = selected ? { key: selected, value: selected } : null;

  return (
    <SelectList
      setSelected={handleActivityChange}
      data={data}
      save="value"
      placeholder="Select An Activity"
      search={false}
      defaultOption={editMode ? defaultOption : ""}
      boxStyles={styles.boxStyles}
      inputStyles={styles.inputStyles}
      dropdownStyles={styles.dropdownStyles}
      dropdownTextStyles={styles.dropdownTextStyles}
    />
  );
}

const styles = StyleSheet.create({
  boxStyles: activityDropDownPickerStyles.boxStyles,
  inputStyles: activityDropDownPickerStyles.inputStyles,
  dropdownStyles: activityDropDownPickerStyles.dropdownStyles,
  dropdownTextStyles: activityDropDownPickerStyles.dropdownTextStyles,
});
