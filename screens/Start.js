import { StyleSheet, Text, View, NameInput } from "react-native";
import React from "react";
import EmailInput from "../components/EmailInput";
import InvalidEmailText from "../components/InvalidEmailText";
import PhoneNumberInput from "../components/PhoneNumberInput";
import InvalidPhoneNumberText from "../components/InvalidPhoneNumberText";
import ResetButton from "../components/ResetButton";
import StartButton from "../components/StartButton";

export default function Start({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");

  function handleEmailChange(email) {
    setEmail(email);
  }

  function validateEmailInput(email) {
    // If the email is empty or does not contain an @ or a .
    if (email.length === 0 || !email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function handlePhoneNumberChange(phoneNumber) {
    setPhoneNumber(phoneNumber);
  }

  function validatePhoneNumberInput(phoneNumber) {
    const isNumber = /^[0-9]+$/.test(phoneNumber);
    // If the phone number is not a number or is empty or is less than 10 digits
    if (!isNumber || phoneNumber.length === 0 || phoneNumber.length < 10) {
      setPhoneNumberError("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  function handleReset() {
    setEmail("");
    setPhoneNumber("");
    setEmailError("");
    setPhoneNumberError("");
  }

  function handleStart() {
    setEmailError("");
    setPhoneNumberError("");
    // Validate the email and phone number
    const isEmailValid = validateEmailInput(email);
    const isPhoneNumberValid = validatePhoneNumberInput(phoneNumber);
    if (isEmailValid && isPhoneNumberValid) {
      // Navigate to the next screen
      navigation.navigate("AllActivities");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Email Address</Text>
        <EmailInput value={email} onEmailChange={handleEmailChange} />
      </View>
      <View>{emailError !== "" ? <InvalidEmailText /> : null}</View>
      <View>
        <Text>Phone Number</Text>
        <PhoneNumberInput
          value={phoneNumber}
          onPhoneNumberChange={handlePhoneNumberChange}
        />
      </View>
      <View>{phoneNumberError !== "" ? <InvalidPhoneNumberText /> : null}</View>
      <View>
        <ResetButton onReset={handleReset} />
        <StartButton
          onStart={handleStart}
          isInputEmpty={!email && !phoneNumber}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
