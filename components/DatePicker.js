import { StyleSheet, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateInput from "./DateInput";

// The DatePicker component is a controlled component that displays a
// date picker when the user presses the input field.
export default function DatePicker({ onDateChange }) {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    onDateChange(currentDate);
    setText(currentDate.toDateString());
  };

  const showDatePicker = () => {
    setShow(true);
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
