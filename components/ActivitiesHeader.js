import { StyleSheet, Text, View } from "react-native";
import React from "react";

// The ActivitiesHeader component is a simple component that displays a
// header for the activities list. It takes in a type prop to determine
// the header text.
export default function ActivitiesHeader({ type }) {
  return (
    <View>
      {type === "all" ? (
        <Text>All Activities</Text>
      ) : (
        <Text>Special Activities</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
