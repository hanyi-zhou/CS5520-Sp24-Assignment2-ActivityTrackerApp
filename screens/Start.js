import { StyleSheet, Text, View, NameInput } from "react-native";
import React from "react";
import EmailInput from "../components/EmailInput";
import InvalidEmailText from "../components/InvalidEmailText";
import PhoneNumberInput from "../components/PhoneNumberInput";

export default function Start() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);

  function handleEmailChange(email) {
    setEmail(email);
  }

  function validateEmailInput(email) {
    if (email.length === 0 || !email.includes("@") || !email.includes(".")) {
      setEmailError(true);
    }
  }

  function handlePhoneNumberChange(phoneNumber) {
    setPhoneNumber(phoneNumber);
  }

  function validatePhoneNumberInput(phoneNumber) {
    const isNumber = /^[0-9]+$/.test(phoneNumber);
    if (!isNumber || phoneNumber.length === 0 || phoneNumber.length < 10) {
      setPhoneNumberError(true);
    }
  }

  return (
    <View>
      <View>
        <Text>Email Address</Text>
        <EmailInput value={email} onEmailChange={handleEmailChange} />
      </View>
      <View>{emailError ? <InvalidEmailText /> : null}</View>
      <View>
        <Text>Phone Number</Text>
        <PhoneNumberInput
          value={phoneNumber}
          onPhoneNumberChange={handlePhoneNumberChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
