import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// The DatePicker component is a controlled component that displays a
// date picker when the user presses the input field.
export default function DatePicker() {
  const [date, setDate] = React.useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View>
      <DateTimePicker
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
        display={"calendar"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
