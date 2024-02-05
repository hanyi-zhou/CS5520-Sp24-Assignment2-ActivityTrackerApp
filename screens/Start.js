import { StyleSheet, Text, View, NameInput } from "react-native";
import React from "react";
import EmailInput from "../components/EmailInput";

export default function Start() {
  const [email, setEmail] = React.useState("");

  function handleEmailChange(email) {
    setEmail(email);
  }

  return (
    <View>
      <View>
        <Text>Email Address</Text>
        <EmailInput value={email} onEmailChange={handleEmailChange} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
