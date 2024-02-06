import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// The DatePicker component is a controlled component that displays a
// date picker when the user presses the input field.
export default function DatePicker() {
  const [date, setDate] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TextInput
        onPressIn={showDatePicker} // Show the date picker when the input is pressed
        value={date ? date.toDateString() : ""}
        editable={false}
      />
      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode={"date"}
          display={"calender"}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
