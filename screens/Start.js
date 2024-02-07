import { StyleSheet, Text, View, NameInput } from "react-native";
import React from "react";
import EmailInput from "../components/EmailInput";
import PhoneNumberInput from "../components/PhoneNumberInput";
import ResetButton from "../components/ResetButton";
import StartButton from "../components/StartButton";

// The Start screen is a simple screen that displays a form to
// enter an email address and a phone number.
export default function Start({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");

  // Handle the email input change
  function handleEmailChange(email) {
    setEmail(email);
  }

  // Validate the email input
  function validateEmailInput(email) {
    if (
      email.length === 0 ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") === 0 ||
      email.lastIndexOf(".") === email.length - 1 ||
      email.lastIndexOf(".") < email.indexOf("@") ||
      email.lastIndexOf(".") - email.indexOf("@") === 1
    ) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  // Handle the phone number input change
  function handlePhoneNumberChange(phoneNumber) {
    setPhoneNumber(phoneNumber);
  }

  // Validate the phone number input
  function validatePhoneNumberInput(phoneNumber) {
    const isNumber = /^[0-9]+$/.test(phoneNumber);
    // If the phone number is not a number or is empty or is less than 10 digits
    if (!isNumber || phoneNumber.length === 0 || phoneNumber.length < 10) {
      setPhoneNumberError("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  // Reset the form
  function handleReset() {
    setEmail("");
    setPhoneNumber("");
    setEmailError("");
    setPhoneNumberError("");
  }

  // Handle the start button click
  function handleStart() {
    setEmailError("");
    setPhoneNumberError("");
    // Validate the email and phone number
    const isEmailValid = validateEmailInput(email);
    const isPhoneNumberValid = validatePhoneNumberInput(phoneNumber);
    if (isEmailValid && isPhoneNumberValid) {
      // Navigate to the next screen
      navigation.navigate("Activities");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Email Address</Text>
        <EmailInput value={email} onEmailChange={handleEmailChange} />
      </View>
      <View>{emailError !== "" ? <Text>{emailError}</Text> : null}</View>
      <View>
        <Text>Phone Number</Text>
        <PhoneNumberInput
          value={phoneNumber}
          onPhoneNumberChange={handlePhoneNumberChange}
        />
      </View>
      <View>
        {phoneNumberError !== "" ? <Text>{phoneNumberError}</Text> : null}
      </View>
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
