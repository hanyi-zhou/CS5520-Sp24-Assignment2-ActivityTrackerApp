import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateInput from "./DateInput";

// The DatePicker component is a controlled component that displays a
// date picker when the user presses the input field.
export default function DatePicker({ editMode, activityDate, onDateChange }) {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  // The useEffect hook is called when the component mounts. It sets the
  // date state to the activityDate prop.
  useEffect(() => {
    if (editMode && activityDate) {
      // If in edit mode and activityDate is provided, set the date to activityDate
      setDate(activityDate);
      setText(activityDate.toDateString());
    }
  }, [activityDate, editMode]);

  // The onChange function is called when the user selects a date from
  // the date picker. It updates the date state and calls the onDateChange
  // function with the new date.
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setText(currentDate.toDateString());
    setShow(false);
    onDateChange(currentDate);
  };

  // The showDatePicker function is called when the user presses the input
  // field. It toggles the show state and updates the text state with the
  // date value.
  const showDatePicker = () => {
    // If the user presses the input field, the show state is toggled and
    // the date picker is displayed or hidden.
    setShow(!show);
    setText(date.toDateString());
  };

  return (
    <View>
      <DateInput showDatePicker={showDatePicker} value={text} />
      {show && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={"inline"}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
